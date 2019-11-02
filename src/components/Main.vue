<template>
  <v-container>
    <h1>災害支援ナビゲーターQ&A</h1><span class="text-sm-right float-right">powered by Civic Tech Sodegaura</span>
    <v-row class="mt-4" wrap>
      <transition-group tag="div" name="vue-anime-list" class="layout row wrap" else>
        <QA v-for="(qa,i) in QAs"
          v-bind:key="qa[0]"
          v-bind:answer="qa[1]"
          v-bind:question="qa[2]"
          v-bind:index="i"
          v-bind:scan="qa[3]"
          @rewind="onRewind"
        />
      </transition-group>
    </v-row>
    <h2 class="mt-4">質問</h2>
    <Q v-if="Question"
      @answered="onAnswered"
      v-bind:question="Question[3]"
      v-bind:options="Question[2]"
      v-bind:option="selection"
    />
    <h2 class="mt-4">受けられる支援</h2>
    <v-row wrap>
      <div v-if="!Services.length">
        質問に答えると受けられる可能性のある支援が表示されます。
      </div>
      <transition-group tag="div" name="vue-anime-list" class="layout row wrap" else>
        <Service v-for="service in Services"
          v-bind:key="service[0]"
          v-bind:title="service[0]"
          v-bind:TBD="service[2]"
          v-bind:servicer="service[3]"
          v-bind:url="service[4]"
          v-bind:description="service[5]"
        />
      </transition-group>
    </v-row>
  </v-container>
</template>

<script>
import QA from './QA'
import Q from './Q'
import Service from './Service'
import QData from '../data/QData'
import ServiceData from '../data/ServiceData'

export default {

  components: {
    QA,
    Q,
    Service,
  },

  data: () => ({
    current: 0,
    answers: null,
    QAs:[ ],
    Question: null,
    Services:[ ],
    selection:null,
  }),

  created: function() {
    this.answers = new Set();
    this.Question = QData[0];
    QData.forEach(function(q,i){ q.push(i); });
    console.log(QData);
  },

  methods: {
    matchCondition: function(condition) {
      if(condition == ""){ return true; }
      return condition.split(",").some( cond1 => {
        // ALL / separated conditions should be satisfied
        return cond1.split("/").every( cond2 => {
          return this.answers.has(cond2);
        });
      });
    },

    updateServices: function() {
      this.Services = [];
      let self = this;
      ServiceData.forEach(function(service){
        if(self.matchCondition(service[1])){
          self.Services.unshift(service);
        }
      });
    },

    nextQ: function() {
      for(let i = this.current + 1; i < QData.length; i++) {
        let Q = QData[i];
        if(this.matchCondition(Q[1])){ 
          this.current = i; return Q;
        }
      }
      this.current = QData.length; // end of question
      return null;
    },

    onAnswered: function(opt) {
      let Q = QData[this.current];
      this.QAs.push([Q[0], opt, Q[3],Q[4]])
      let answer = `${Q[0]}=${opt}`;
      this.answers.add(answer)

      this.Question = this.nextQ();
      this.selection = null
      this.updateServices();
    },

    onRewind: function(index, scan) {
      console.log("REWIND", index, scan);
      this.QAs = this.QAs.slice(0, index);
      let ans = this.QAs.map( function(qa){ return `${qa[0]}=${qa[1]}`;} );

      this.answers = new Set(ans);
      this.current = scan;
      this.Question = QData[this.current];
      this.updateServices();
    },
  },
}

</script>

<style>
  .v-application {
    font-family: "Open Sans";
  }
  .headline {
    font-family: "Open Sans" !important;
  }

</style>

