<script setup lang="ts">
import type { PropType } from 'vue'
import type { School } from '@/typings/education.ts'

defineProps({
  school: {
    type: Object as PropType<School>,
    required: true
  }
})
</script>

<template>
  <Flex class="education_degree">
    <Flex class="education_degree-block">
      <Box class="degree_school">{{ school.name }}</Box>
      <Box class="degree_degree">{{ school.degree }}</Box>
    </Flex>
    <Box class="degree_year">{{ `${school.yearStart} - ${school.yearEnd}` }}</Box>
  </Flex>
</template>

<style lang="scss" scoped>
.education_degree {
  flex-direction: row;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @include mobile {
    flex-direction: column;
    justify-content: flex-start;
  }
}

.education_degree-block {
  flex: 1 0 auto;
  flex-direction: row;
}

.degree_school {
  @include title;
}
.degree_degree {
  margin-top: 5px;
  flex: 1 0 auto;
}
.degree-year {
  flex: 0 0 auto;
  color: #666;
}

[lang='en'] {
  .education_degree-block {
    .degree_school {
      flex: 0 0 300px;
    }
    @include mobile {
      flex-direction: column;
      margin-bottom: 5px;
      .degree_school {
        flex: 0 0 auto;
      }
    }
  }
}
[lang='zhtw'] {
  .degree_school {
    flex: 0 0 150px;
  }
}
</style>
