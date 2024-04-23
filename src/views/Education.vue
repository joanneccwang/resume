<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { School } from '@/typings/education'
import EducationBlock from '@/components/EducationBlock.vue'

const { t } = useI18n()
const schoolList = ref<School[]>([
  {
    name: t('education.NCKU.school'),
    degree: t('education.NCKU.degree'),
    yearStart: 2015,
    yearEnd: 2017
  },
  {
    name: t('education.NTHU.school'),
    degree: t('education.NTHU.degree'),
    yearStart: 2011,
    yearEnd: 2015
  }
])
</script>

<template>
  <Box id="education">
    <block-title>EDUCATION</block-title>
    <EducationBlock v-for="school in schoolList" :key="school.degree" :school="school" />
  </Box>
</template>

<style lang="scss" scoped></style>
