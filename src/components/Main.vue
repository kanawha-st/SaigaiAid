<template>
  <v-container>
    <h1>災害支援ナビゲーター(テスト版)</h1>
    <h2>令和6年能登半島沖地震版</h2>
    <div class="text-sm-right">powered by Civic Tech Sodegaura</div>
    <p>本サービスで紹介している支援内容はボランティアにより調査されたものです。</p>
    <p>できる限り正確な情報に気をつけていますが、必ずしもサービスが受けられることを保証するものではないことをご了承ください。</p>
    <p>回答をクリックすると質問を巻き戻すことができます。</p>
    <v-container class="mt-4 float-none" wrap>
      <transition-group
        tag="div"
        name="vue-anime-list"
        class="d-flex flex-wrap layout row wrap"
        else
      >
        <QA
          v-for="(qa, i) in QAs"
          v-bind:key="qa[0]"
          v-bind:answer="qa[1]"
          v-bind:question="qa[2]"
          v-bind:index="i"
          v-bind:scan="qa[3]"
          @rewind="onRewind"
        />
      </transition-group>
    </v-container>
    <h2 class="mt-4">質問</h2>
    <Q
      v-if="Question"
      @answered="onAnswered"
      v-bind:question="Question[3]"
      v-bind:options="Question[2]"
      v-bind:option="selection"
    />
    <h2 class="mt-4">受けられる可能性のある支援 {{ Services.length }}</h2>
    <v-btn
      v-if="Services.length"
      v-on:click="exportToPdf()"
      text="PDFに保存"
    />
    <v-container wrap>
      <div v-if="!Services.length">
        居住地を答えた後、質問に答えていくと受けられる可能性のある支援が表示されます。
      </div>
      <transition-group
        tag="div"
        name="vue-anime-list"
        class="d-flex flex-wrap layout row wrap"
        else
      >
        <Service
          v-for="service in Services"
          v-bind:key="service.name"
          v-bind:title="service.name"
          v-bind:TBD="service.additional_state"
          v-bind:servicer="service.who"
          v-bind:url="service.url"
          v-bind:description="service.description"
        />
      </transition-group>
    </v-container>
  </v-container>
</template>

<script>
import QA from './QA';
import Q from './Q';
import Service from './Service';
import QData from '../data/QData';
import ServiceData from '../data/ServiceData';
import ServiceUrlData from '../data/ServiceUrlData';
import html2pdf from 'html2pdf.js';

export default {
  components: {
    QA,
    Q,
    Service,
  },

  data: () => ({
    current: 0,
    answers: null,
    QAs: [],
    Question: null,
    Services: [],
    selection: null,
  }),

  created: function() {
    this.answers = new Set();
    this.Question = QData[0];
    QData.forEach(function(q, i) {
      q.push(i);
    });
  },

  methods: {
    matchCondition: function(condition) {
      if (condition == "") {
        return true;
      }
      return condition.split(",").some((cond1) => {
        // ALL / separated conditions should be satisfied
        return cond1.split("/").every((cond2) => {
          return this.answers.has(cond2);
        });
      });
    },

    updateServices: function() {
      this.Services = [];
      let self = this;
      ServiceData.forEach(function(service) {
        if (self.matchCondition(service.conditions)) {
          self.Services.unshift(service);
        }
      });

      // Setting URL.
      this.Services.forEach((service) => {
        const serviceName = service.additional_url_key ? `${service.name}|${self.getAnswer(service.additional_url_key)}` : service.name;
        let url = ServiceUrlData.get(serviceName);
        let who = service.who;
        if(url && url.includes("@")){
          [who, url] = url.split("@");
          service.who = who;
        }
        service.url = url
      });
    },

    getAnswer: function(question) {
      const key = question + '=';
      for (const answer of this.answers) {
        if (answer.startsWith(key)) {
          return answer.substring(key.length);
        }
      }
      return null;
    },

    nextQ: function() {
      for (let i = this.current + 1; i < QData.length; i++) {
        let Q = QData[i];
        if (this.matchCondition(Q[1])) {
          this.current = i;
          return Q;
        }
      }
      this.current = QData.length; // end of question
      return null;
    },

    onAnswered: function(opt) {
      let Q = QData[this.current];
      this.QAs.push([Q[0], opt, Q[3], Q[4]]);
      let answer = `${Q[0]}=${opt}`;
      
      localStorage.setItem('QAs', JSON.stringify(this.QAs));
      this.answers.add(answer);

      this.Question = this.nextQ();
      this.selection = null;
      this.updateServices();
    },

    onRewind: function(index, scan) {
      this.QAs = this.QAs.slice(0, index);
      let ans = this.QAs.map(function(qa) {
        return `${qa[0]}=${qa[1]}`;
      });

      this.answers = new Set(ans);
      this.current = scan;
      this.Question = QData[this.current];
      this.updateServices();
    },
    exportToPdf:function(){
      html2pdf(document.body, {
        margin:       1,
        filename:     '災害支援ナビゲーター.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { dpi: 192, letterRendering: true },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
      })
    }
  },
  mounted: function() {
    const QAs = localStorage.getItem('QAs');
    if (QAs) {
      this.QAs = JSON.parse(QAs);
      this.answers = new Set(this.QAs.map(function(qa) {
        return `${qa[0]}=${qa[1]}`;
      }));
      this.current = this.QAs[this.QAs.length - 1][3];
      this.Question = this.nextQ();
      this.updateServices();
    }
  },
};
</script>

<style>
.v-application {
  font-family: "Open Sans";
}

.headline {
  font-family: "Open Sans" !important;
}

.vue-anime-list-enter-active {
  animation: fadeInUp 0.7s;
  animation-delay: 0.4s;
  opacity: 0;
}

@keyframes fadeInUp {
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  60% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
