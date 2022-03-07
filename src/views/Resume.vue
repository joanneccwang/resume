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
    createMeta(property, content) {
      const link = document.createElement('meta');
      link.setAttribute('property', property);
      link.content = content;
      document.getElementsByTagName('head')[0].appendChild(link);
    },
  },
  beforeMount() {
    console.log(this.$route.query);
    const currentLang = this.$route.query.lang;
    if (currentLang === 'en') {
      this.$i18n.locale = currentLang;
    }
    document.documentElement.lang = this.$i18n.locale;
    // document.title = 'Joanne Wang';
    this.createMeta('description', 'Hi! I\'m Joanne Wang. A frontend developer with 4 years of experience.');
  },
};
</script>

<style lang="scss">
#resume {
  max-width: 794px; // A4
  width: 100%;
  margin: 0 auto;
  padding: 20px 20px;

  @include mobile {
    width: 100%;
    padding: 10px 15px;
  }
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
