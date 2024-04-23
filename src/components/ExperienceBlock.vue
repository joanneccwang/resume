<script setup lang="ts">
import type { PropType } from 'vue'
import type { Company } from '@/typings/experience.ts'

import Panel from '@/components/Panel.vue'

defineProps({
  company: {
    type: Object as PropType<Company>,
    required: true
  }
})
</script>

<template>
  <Box>
    <Box class="experience_company">
      <Box class="experience_company-name">{{ $t(`experience.${company.key}.company`) }}</Box>
      <Box class="experience_time">{{ company.time }}</Box>
    </Box>

    <Box class="experience_content">
      <ul>
        <li v-for="(summaryKey, sIdx) in company.summary" :key="`${company.key}-summary-${sIdx}`">
          {{ $t(`experience.${company.key}.summary${summaryKey}`) }}
        </li>
      </ul>

      <p>{{ $t('experience.emotibot.includes') }}</p>

      <Box v-for="product in company.products" :key="product.name">
        <Box class="product">
          <Box class="product_time">{{ product.time }}</Box>
          <Box class="product_info">
            <Box class="product_name">
              {{ $t(`experience.${company.key}.${product.name}.product`) }}
            </Box>
            <p class="product_summary">
              {{ $t(`experience.${company.key}.${product.name}.summary`) }}
            </p>
            <ul>
              <li
                v-for="(bulletKey, idx) in product.bullets"
                :key="`${product.name}-bullet-${idx}`"
              >
                {{ $t(`experience.${company.key}.${product.name}.bullet${bulletKey}`) }}
              </li>
            </ul>
            <Box v-if="product.links && product.links.length > 0" class="product_link">
              <Box v-for="(link, lIdx) in product.links" :key="`${product.name}-link-${lIdx}`">
                <font-awesome-icon icon="square-up-right" />
                <a :href="link.href" :target="`_${link.key}`">
                  {{ $t(`experience.${company.key}.${product.name}.link.${link.key}`) }}
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        <panel v-if="product.imgs && product.imgs.length > 0" :imgs="product.imgs"></panel>
      </Box>
    </Box>
  </Box>
</template>

<style lang="scss" scoped>
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
