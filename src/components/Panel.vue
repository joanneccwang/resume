<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'

defineProps({
  imgs: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => {
      ;[]
    }
  }
})

const show = ref(false)
</script>

<template>
  <Box class="panel">
    <Box v-show="show">
      <img v-for="(img, idx) in imgs" :key="idx" :src="img" />
    </Box>
    <Flex class="panel-btn" @click="show = !show">
      <font-awesome-icon class="expand-icon" :class="{ expand: show }" icon="caret-down" />
      <Box>Project Screenshots</Box>
    </Flex>
  </Box>
</template>

<style lang="scss" scoped>
.panel-btn {
  width: 100%;
  padding: 3px 0px;
  border: 1px solid #ccc;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 14px;
  cursor: pointer;
  .expand-icon {
    font-size: 14px;
    margin-right: 10px;
    transition: transform 0.5s ease;
    &.expand {
      transform: rotate(180deg);
    }
  }
}
</style>
