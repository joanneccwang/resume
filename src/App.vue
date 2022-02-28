<template>
  <div id="resume">
    <font-awesome-icon icon="language"
      id="i18n-button" @click="changeLanguage"/>
    <Info/>
    <Summary/>
    <Experience/>
    <Education/>
  </div>
</template>
<script>
import Info from '@/views/Info.vue';
import Summary from '@/views/Summary.vue';
import Experience from '@/views/Experience.vue';
import Education from '@/views/Education.vue';

export default {
  components: {
    Info,
    Experience,
    Education,
    Summary,
  },

  methods: {
    changeLanguage() {
      console.log(this.$i18n.locale);
      this.$i18n.locale = (this.$i18n.locale === 'zhtw') ? 'en' : 'zhtw';
      document.documentElement.lang = this.$i18n.locale;
    },
  },
  beforeMount() {
    document.documentElement.lang = this.$i18n.locale;
  },
};
</script>
<style lang="scss">
#resume {
  max-width: 794px; // A4
  min-width: 794px;
  margin: 0 auto;
}

#i18n-button {
  position: fixed;
  top: 20px;
  right: 20px;
  height: 30px;
  cursor: pointer;
  filter: drop-shadow(5px 8px 10px #999);
}
</style>
