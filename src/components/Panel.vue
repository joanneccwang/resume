<template>
  <div class="panel">
    <div v-show="show">
      <img v-for="(img, idx) in imgs" :key="idx" :src="img"/>
    </div>
    <div class="panel-btn" @click="show = !show">
      <font-awesome-icon class="expand-icon" :class="{expand: show}" icon="caret-down" />
      <div>Project Screenshots</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      show: false,

      // eslint-disable-next-line global-require
      imgPath: require('@/assets/imgs/easycard_01.svg'),
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
    transition: transform .5s ease;
    &.expand {
      transform: rotate(180deg);
    }
  }
}
</style>
