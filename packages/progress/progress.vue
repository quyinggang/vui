<template>
  <div class="ui-progress" :class="['is-' + type]">
    <div v-show="type === 'line'" class="ui-progress-bar" :style="{height: width + 'px'}">
      <div
        class="ui-progress__inner"
        :style="{backgroundcolor: color, width: percentage + '%'}"
      >
        <span class="ui-progress__text" v-show="showText && textInside">
          {{ percentage }}%
        </span>
      </div>
    </div>
    <span class="ui-progress__text" v-show="showText && !textInside">
      {{ percentage }}%
    </span>
  </div>
</template>

<script>
export default {
  name: 'UiProgress',
  props: {
    percentage: {
      type: Number,
      default: 0,
      validator: value => {
        return value >= 0 && value <= 100;
      }
    },
    type: {
      type: String,
      default: 'line',
      validator: value => {
        return ['line', 'circle', 'dashboard'].includes(value);
      }
    },
    showText: {
      type: Boolean,
      default: true
    },
    textInside: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#409EFF'
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    width: {
      type: Number,
      default: 126
    }
  }
};
</script>
