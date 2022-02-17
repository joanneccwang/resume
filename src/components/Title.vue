<template>
  <div class="title">
    <slot></slot>
    <hr>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.title {
  font-size: 22px;
  font-weight: bold;
  margin: 15px 0px 10px 0px;

  hr {
    margin: 5px 0px;
  }
}
</style>
