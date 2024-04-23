<script setup lang="ts">
import { ref } from 'vue'
import type { Company } from '@/typings/experience.ts'

import ExperienceBlock from '@/components/ExperienceBlock.vue'

import imgEasycard01 from '@/assets/imgs/easycard_01.svg'
import imgEasycard02 from '@/assets/imgs/easycard_02.svg'
import imgKgi01 from '@/assets/imgs/kgi_01.svg'
import imgKgi02 from '@/assets/imgs/kgi_02.svg'
import imgAICC01 from '@/assets/imgs/aicc_01.svg'
import imgAICC02 from '@/assets/imgs/aicc_02.svg'
import imgAICC03 from '@/assets/imgs/aicc_03.svg'
import imgAICC04 from '@/assets/imgs/aicc_04.svg'

const companyList = ref<Company[]>([
  {
    key: 'emotibot',
    time: 'Dec 2017 - Nov 2021',
    summary: ['1', '2', '3', '4'],
    products: [
      {
        name: 'AI_bot', // 智能客服
        time: '2020.11 - 2021.11',
        bullets: ['1', '2', '3'],
        imgs: [imgEasycard01, imgEasycard02, imgKgi01, imgKgi02],
        links: [
          { key: 'easycard', href: 'https://chatbot.easycard.com.tw/chatbot/#/robotchat' },
          { key: 'kgi', href: 'https://aiservice.kgieworld.com.tw/#/robotchat' }
        ]
      },
      {
        name: 'voice_platform', // 語音平台
        time: '2021.01 - 2021.11',
        bullets: ['1', '2']
      },
      {
        name: 'AICC', // 智能質檢
        time: '2018.07 - 2020.11',
        bullets: ['1', '2', '3', '4', '5'],
        imgs: [imgAICC01, imgAICC02, imgAICC03, imgAICC04]
      },
      {
        name: 'bot_factory', // Bot Factory
        time: '2017.12 - 2018.07',
        bullets: ['1', '2', '3']
      }
    ]
  }
])
</script>

<template>
  <Box id="experience">
    <block-title>EXPERIENCE</block-title>
    <ExperienceBlock
      v-for="company in companyList"
      :key="company.key"
      :company="company"
    ></ExperienceBlock>
  </Box>
</template>

<style lang="scss" scoped>
#experience {
  display: flex;
  flex-direction: column;
}
</style>
