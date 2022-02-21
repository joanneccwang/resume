<template>
  <div id="resume">
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
};
</script>
<style lang="scss">
#resume {
  max-width: 794px; // A4
  min-width: 794px;
  margin: 0 auto;
}
</style>
