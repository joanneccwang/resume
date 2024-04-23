<script setup lang="ts"></script>

<template>
  <Box class="title">
    <slot></slot>
    <hr />
  </Box>
</template>

<style lang="scss" scoped>
.title {
  font-size: 22px;
  font-weight: bold;
  margin: 15px 0px 10px 0px;

  hr {
    margin: 5px 0px;
    background: $color-font-mark;
  }
}
</style>
