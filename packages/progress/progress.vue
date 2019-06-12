<template>
  <div class="ui-progress" :class="['is-' + type]">
    <div class="ui-progress-bar" :style="{width: width + 'px',height: width + 'px'}">
      <div v-show="type === 'line'" class="ui-progress__container">
        <div
          class="ui-progress__inner"
          :style="{backgroundcolor: color, width: getPercentage + '%'}"
        >
          <span class="ui-progress__text" v-show="showText && textInside">
            {{ getPercentage }}%
          </span>
        </div>
        <span class="ui-progress__text" v-show="!textInside">
          <span v-show="showText">{{ getPercentage }}%</span>
          <i v-show="!showText" class="i-check"></i>
        </span>
      </div>
      <div v-show="type === 'circle'" class="ui-progress__container">
        <svg class="ui-progress-svg" viewBox="0 0 100 100">
          <path :d="getPathData" stroke="#ebeef5" :stroke-width="getStrokeWidth" fill="none"></path>
          <path
            class="circle"
            :d="getPathData"
            :stroke="color"
            :stroke-width="getStrokeWidth"
            fill="none"
            stroke-linecap="round"
            :style="getPathStyle"
          >
          </path>
        </svg>
        <span class="ui-progress__text">
          <span v-show="showText">{{ getPercentage }}%</span>
          <i v-show="!showText" class="i-check"></i>
        </span>
      </div>
    </div>
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
        return ['line', 'circle'].includes(value);
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
  },
  computed: {
    getPercentage() {
      return Math.max(0, Math.min(this.percentage, 100));
    },
    getStrokeWidth() {
      // 通过实际圆弧边框宽度在总宽度的占比来计算出相对宽度
      // 相对宽度作为实际宽度
      return (this.strokeWidth / this.width * 100).toFixed(1);
    },
    getRadius() {
      // 计算出当前半径（50是初始半径），以后等比呈现时都依此来处理
      return parseInt(50 - this.getStrokeWidth / 2, 10);
    },
    getPathData() {
      const radius = this.getRadius;
      // 绘制圆弧，注意相对坐标和绝对坐标的区别
      return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
    },
    getPathStyle() {
      // 圆周长
      const premitter = 2 * Math.PI * this.getRadius;
      // 计算进度占比对应的偏移长度
      const offset = (1 - this.getPercentage / 100) * premitter;
      return {
        strokeDasharray: `${premitter}px,${premitter}px`,
        strokeDashoffset: `${offset}px`
      };
    }
  }
};
</script>
