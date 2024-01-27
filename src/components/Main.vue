<template>
  <v-container>
    <h1>災害支援ナビゲーター(テスト版)</h1>
    <h2>令和6年能登半島地震版</h2>
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
    <h2 class="mt-4" ref="qtitle">質問</h2>
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
        <v-container class="">
        さらに支援の具体的な見積もりが必要な場合は協力プロジェクトの<a href="https://shien-yadokari.netlify.app/">支援みつもりヤドカリくん</a>(by Project Inclusive)をご覧ください。
        </v-container>
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
    allServices: [],
    allQuestions: [],

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
      this.allServices.forEach(function(service) {
        if (self.matchCondition(service.conditions)) {
          self.Services.unshift(Object.assign({}, service));
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
      
      this.Services = this.Services.filter((service) => {
        return service.url != "N/A";
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
      for (let i = this.current + 1; i < this.allQuestions.length; i++) {
        let Q = this.allQuestions[i];
        if (this.matchCondition(Q[1])) {
          this.current = i;
          return Q;
        }
      }
      this.current = this.allQuestions.length; // end of question
      return null;
    },

    onAnswered: function(opt) {
      let Q = this.allQuestions[this.current];
      this.QAs.push([Q[0], opt, Q[3], Q[4]]);
      localStorage.setItem('QAs', JSON.stringify(this.QAs));

      let answer = `${Q[0]}=${opt}`;
      this.answers.add(answer);

      this.Question = this.nextQ();
      this.selection = null;
      this.updateServices();
      this.$refs.qtitle.scrollIntoView({behavior: 'smooth'}); 
    },

    onRewind: function(index, scan) {
      this.QAs = this.QAs.slice(0, index);
      localStorage.setItem('QAs', JSON.stringify(this.QAs));
  
      let ans = this.QAs.map(function(qa) {
        return `${qa[0]}=${qa[1]}`;
      });

      this.answers = new Set(ans);
      this.current = scan;
      this.Question = this.allQuestions[this.current];
      this.updateServices();
    },
    exportToPdf:function(){
      /*
      create pdf page by page since iOS render blank page when data is big.
      https://github.com/eKoopmans/html2pdf.js/issues/397
      */
      let divs = [];
      let div = document.createElement('div');
      div.innerHTML = `<h1>災害支援ナビゲーター</h1>
      <h2>質問と回答</h2>`;
      this.QAs.forEach(qa => {
        let p = document.createElement('p');
        p.innerHTML = `【質問】${qa[2]}  【答え】${qa[1]}`;
        div.appendChild(p);
      });
      divs.push(div);
      div = document.createElement('div');
      div.innerHTML = "<h2>受けられる可能性のある支援</h2>";
      for(let i=0; i<this.Services.length; i++){
        let service = this.Services[i];
        let p = document.createElement('p');
        p.innerHTML = `【支援】: ${service.name} (${service.who})<br>${service.description}<hr>`;
        div.appendChild(p);
        if(i%8==7){
          divs.push(div);
          div = document.createElement('div');
        }
      }
      if(this.Services.length%7!=0){
        divs.push(div);
      }
      
      let pdf =  html2pdf().set({
        margin:       1,
        filename:     '災害支援ナビゲーター.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { dpi: 170, letterRendering: true },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait', compress:true },
        pagebreak:    { mode: 'avoid-all'}
      }).from(
        divs[0]
      ).toPdf()

      for (let i = 1; i < divs.length; i++) {
        pdf = pdf.get('pdf').then((_pdf) => {
          return _pdf.addPage()
      })
        .from(divs[i])
        .toCanvas().toPdf()
      }
      pdf.toCanvas().toPdf().save();
    },
    clear: function(){
      localStorage.removeItem('QAs');
      this.QAs = [];
      this.answers = new Set();
      this.current = 0;
      this.Question = this.allQuestions[this.current];
      this.updateServices();
    }
  },
  mounted: function() {
    function sanitize(html){
      return html.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    }
    this.allQuestions = QData.map(function(q) {
      q[3] = sanitize(q[3]);
      return q;
    });
    this.allServices = ServiceData.map(function(s) {
      s.description = sanitize(s.description);
      return s;
    });

    const QAs = localStorage.getItem('QAs');
    if (QAs) {
      this.QAs = JSON.parse(QAs);
      if (this.QAs.length === 0) {
        return;
      }
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
