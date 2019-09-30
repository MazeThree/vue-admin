<template>
  <div class="asp-card" :style="cardStyle" :class="'is-' + shadow">
    <div class="asp-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="asp-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'asp-card',
    props: {
      header: '',
      cardStyle: {},
      bodyStyle: {},
      shadow: {
        type: String,
        default: () => 'always'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import 'src/assets/css/mixins';

  .asp-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: $main-box-radius;
    background: #fff;
    overflow: hidden;
    &.is-always {
      box-shadow: $main-box-shadow;
    }
    // hover
    &.is-hover {
     &:hover {
       box-shadow: $main-box-shadow;
     }
    }
    .asp-card__header {
      flex: none;
      font-weight: bold;
      height: .5rem;
      line-height: .5rem;
      padding: 0 .2rem;
    }
    .asp-card__body {
      overflow: hidden;
      flex: 1;
      height: 100%;
      padding: .25rem;
    }
  }
</style>
