<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import Info from '@/views/Info.vue'
import Summary from '@/views/Summary.vue'
import Experience from '@/views/Experience.vue'
import Education from '@/views/Education.vue'

const { locale } = useI18n()

const changeLanguage = () => {
  console.log(locale.value)
  locale.value = locale.value === 'zhtw' ? 'en' : 'zhtw'
  document.documentElement.lang = locale.value
}
const createMeta = (property: string, content: string) => {
  const link = document.createElement('meta')
  link.setAttribute('property', property)
  link.content = content
  document.getElementsByTagName('head')[0].appendChild(link)
}

onBeforeMount(() => {
  const { query } = useRoute()
  const currentLang = query.lang
  if (currentLang === 'en') {
    locale.value = currentLang
  }
  document.documentElement.lang = locale.value
  createMeta('description', "Hi! I'm Joanne Wang. A frontend developer with 6 years of experience.")
})
</script>

<template>
  <Box id="resume">
    <font-awesome-icon icon="language" id="i18n-button" @click="changeLanguage" />
    <Info />
    <Summary />
    <Experience />
    <Education />
  </Box>
</template>

<style lang="scss" scoped>
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
