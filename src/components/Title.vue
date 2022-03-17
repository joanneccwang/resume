<template>
  <div class="title">
    <slot></slot>
    <!-- <hr> -->
    <div class="split"></div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.title {
  // font-size: 22px;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px 8px 0px;

  // hr {
  //   margin: 5px 0px;
  //   background: $color-font-mark;
  // }
  .split {
    height: 0px;
    border: 1px solid $color-font-mark;
    background: $color-font-mark;
    width: 100%;
  }
}
</style>
