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

      <p>{{ $t('experience.emotibot.includes') }}</p>
      <div class="product" v-for="(product) in company.products" :key="product.name">
        <!-- <div class="product_time">{{ product.time }}</div> -->
        <div class="product_info">
          <div class="product_name">
            {{ $t(`experience.${company.key}.${product.name}.product`) }}
          </div>
          <p class="product_summary"> {{ $t(`experience.${company.key}.${product.name}.summary`) }} </p>
          <ul>
            <li v-for="(bulletKey, idx) in product.bullets"
              :key="`${product.name}-bullet-${idx}`">
              {{ $t(`experience.${company.key}.${product.name}.bullet${bulletKey}`) }}
            </li>
          </ul>
        </div>
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
              name: 'AICC', // 智能質檢
              time: '2018.07 - 2020.11',
              bullets: ['1', '2', '3', '4', '5'],
            },
            {
              name: 'voice_platform', // 語音平台
              time: '2021.01 - 2021.11',
              bullets: ['1'], // '2'
            },
            // {
            //   name: 'bot_factory', // Bot Factory
            //   time: '2017.12 - 2018.07',
            //   bullets: ['1', '2', '3'],
            // },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

#experience {
  display: flex;
  flex-direction: column;
}
.experience_company {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .experience_company-name {
    @include title;
  }
  .experience_time {
    margin: 5px 0px;
    color: $color-font-mark;
  }
}

.product {
  max-width: inherit;
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  line-height: 20px;

  .product_time {
    flex: 0 0 80px;
    color: $color-font-mark;

  }
  .product_info {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    .product_name {
      @include sub-title;
      margin-bottom: 3px;
    }
    .product_summary {
      margin: 5px 0px;
    }
  }

  @include mobile {
    flex-direction: column;
    justify-content: flex-start;

    .product_time {
      flex: 0 0 auto;
      margin-bottom: 5px;
    }
    .product_info {
      flex: 1 0 auto;
    }
  }
}
</style>
