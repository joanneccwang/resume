<template>
  <div id="experience">
    <block-title>EXPERIENCE</block-title>
    <template v-for="company in companys" :key="company.key">
    <div class="experience_company">
      <div class="experience_company-name">{{ this.$t(`experience.${company.key}.company`) }}</div>
      <div class="experience_time">{{ company.time }}</div>
    </div>
    <div class="experience_content">
      <ul>
        <li v-for="(summaryKey, sIdx) in company.summary"
          :key="`${company.key}-summary-${sIdx}`">
          {{ this.$t(`experience.${company.key}.summary${summaryKey}`) }}
        </li>
      </ul>

      {{ $t('experience.emotibot.includes') }}
      <div class="product" v-for="(product, pIdx) in company.products" :key="product.name">
        <div class="product_info">
          <div class="product_name">
            {{pIdx + 1}}. {{ $t(`experience.${company.key}.${product.name}.product`) }}
          </div>
          <div class="product_time">{{ product.time }}</div>
        </div>
        <p> {{ $t(`experience.${company.key}.${product.name}.summary`) }} </p>
        <ul>
          <li v-for="(bulletKey, idx) in product.bullets"
            :key="`${product.name}-bullet-${idx}`">
            {{ $t(`experience.${company.key}.${product.name}.bullet${bulletKey}`) }}
          </li>
        </ul>
      </div>
    </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companys: [
        {
          key: 'emotibot',
          time: 'Dec 2017 - Nov 2021',
          summary: ['1', '2', '3', '4'],
          products: [
            {
              name: 'AI_bot', // 智能客服
              time: '2020.11 - 2021.11',
              bullets: ['1', '2', '3'],
            },
            {
              name: 'voice_platform', // 語音平台
              time: '2021.01 - 2021.11',
              bullets: ['1', '2'],
            },
            {
              name: 'AICC', // 智能質檢
              time: '2018.07 - 2020.11',
              bullets: ['1', '2', '3', '4', '5'],
            },
            {
              name: 'bot_factory', // 智能質檢
              time: '2017.12 - 2018.07',
              bullets: ['1', '2', '3'],
            },
          ],
        },
      ],
    };
  },
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
