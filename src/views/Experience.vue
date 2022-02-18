<template>
  <div id="experience">
    <block-title>EXPERIENCE</block-title>
    <div class="experience_company">
      <div class="experience_company-name">Emotibot Technologies Limited</div>
      <div class="experience_time">Dec 2017 - Nov 2021</div>
    </div>
    <div class="experience_content">
      <ul>
        <li>Work closely with designers and project managers to build product from scratch to completion</li>
        <li>Integrating with Back-end services including RESTful API (through axios) and WebSocket API</li>
        <li>Develop with Vue.js and its ecosystem, including, Vue-router, Vuex, Vue I18n and Element UI</li>
      </ul>

      Products involved:
      <div class="product">
        <div class="product_info">
          <div class="product_name">1. AI Customer Service Bots</div>
          <div class="product_time">2020.11 - 2021.11</div>
        </div>
        <p>
          AI Chatbots for answering common customer question which also allow human customer service to take action when customer's questions are out of robot's scope.
        </p>
        <ul>
          <li>Develop CMS system features for human customer service</li>
          <li>Customize chat bot web page for each project with RWD. Devices include PC, tablet and mobile</li>
          <li>Handle cross-browser compatibility issues. Browsers include Chrome 66+, Firefox 87+, Safari, IE11 and Edge.</li>
        </ul>
      </div>
      <div class="product">
        <div class="product_info">
          <div class="product_name">2. Voice Platform </div>
          <div class="product_time">2021.01 - 2021.11</div>
        </div>
        <p>
          A system that allows users to train and test models for ASR(Automatic Speech Recognition) and TTS(Text To Speech) techniques.
        </p>
        <ul>
          <li>Build a transcription application that allows user to either record audio for real-time transcription or upload recordings for offline transcription</li>
          <li>Implement real-time ASR service with WebSocket API</li>
        </ul>
      </div>
      <div class="product">
        <div class="product_info">
          <div class="product_name">3. AICC - An AI-based quality assurance system for customer service </div>
          <div class="product_time">2018.07 - 2020.11</div>
        </div>
        <p>
          A system that allows users to write custom rules and upload call recordings to evaluate customer service performance. A rule is constructed from training keywords to writing logical semantics. Evaluation result is visualized in dialog-like interface with rule highlighting and recording play back features.
        </p>
        <ul>
          <li>Develop highly reusable components for building complicated logical rules</li>
          <li>Support internationalization(i18n) in Traditional Chinese and Simplified Chinese</li>
          <li>Visualize customer service workers' performance using Apache Echarts</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.experience_company {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .experience_company-name {
    @include title;
  }
}

.product {
  margin: 10px 0px;
  .product_info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .product_name {
      @include sub-title;
    }

  }
}
</style>
