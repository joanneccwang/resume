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
      <template v-for="(product) in company.products" :key="product.name">
        <div class="product">
          <div class="product_time">{{ product.time }}</div>
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
            <div v-if="product.links && product.links.length > 0" class="product_link">
              <div v-for="(link, lIdx) in product.links" :key="`${product.name}-link-${lIdx}`">
                <font-awesome-icon icon="square-up-right" />
                <a :href="link.href" :target="`_${link.key}`">
                  {{ $t(`experience.${company.key}.${product.name}.link.${link.key}`) }}
                </a>
              </div>
            </div>
          </div>

        </div>

        <panel v-if="product.imgs && product.imgs.length > 0" :imgs="product.imgs"></panel>
      </template>
    </div>
    </template>
  </div>
</template>

<script>
import Panel from '@/components/Panel.vue';
import imgEasycard01 from '@/assets/imgs/easycard_01.svg';
import imgEasycard02 from '@/assets/imgs/easycard_02.svg';
import imgKgi01 from '@/assets/imgs/kgi_01.svg';
import imgKgi02 from '@/assets/imgs/kgi_02.svg';
import imgAICC01 from '@/assets/imgs/aicc_01.svg';
import imgAICC02 from '@/assets/imgs/aicc_02.svg';
import imgAICC03 from '@/assets/imgs/aicc_03.svg';
import imgAICC04 from '@/assets/imgs/aicc_04.svg';

export default {
  components: {
    Panel,
  },
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
              imgs: [imgEasycard01, imgEasycard02, imgKgi01, imgKgi02],
              links: [
                { key: 'easycard', href: 'https://chatbot.easycard.com.tw/chatbot/#/robotchat' },
                { key: 'kgi', href: 'https://aiservice.kgieworld.com.tw/#/robotchat' },
              ],
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
              imgs: [imgAICC01, imgAICC02, imgAICC03, imgAICC04],
            },
            {
              name: 'bot_factory', // Bot Factory
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
    .product_link {
      display: flex;
      flex-direction: row;
      :not(:last-child) {
        margin-right: 10px;
      }
      a {
        color: $color-chigusa;
        text-decoration: none;
      }
      a:hover {
        color: darken($color-chigusa, 10%);
      }
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
