<template>
  <div class="panel">
    <template v-if="show">
      <p>hello panel</p>
      <p>hello panel</p>
      <p>hello panel</p>
      <slot></slot>
    </template>
    <div class="panel-btn" @click="show = !show">
      <font-awesome-icon class="expand-icon" :class="{expand: show}" icon="caret-down" />
      <div>Project Screenshots</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.panel-btn {
  width: 100%;
  padding: 3px 0px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 14px;
  cursor: pointer;
  .expand-icon {
    font-size: 14px;
    margin-right: 10px;
    &.expand {
      transform: rotate(180deg);
    }
  }
}
</style>
