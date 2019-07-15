<script>
export default {
  name: 'UiSlider',
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '200px'
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sliderSize: null,
      startX: null,
      startY: null,
      position: {
        prevPos: 0,
        currentPos: 0
      },
      isDraging: false
    };
  },
  computed: {
    currentPosition() {
      const position = this.position;
      const pos = this.limitRange(position.currentPos || this.value);
      if (!position.currentPos) {
        position.currentPos = pos;
      }
      return pos;
    }
  },
  render() {
    const vertical = this.vertical;
    const className = {
      'ui-slider': true,
      'is-horizontal': !vertical,
      'is-vertical': vertical,
      'is-disabled': this.disabled
    };
    const leftText = String(this.leftText).trim();
    const rightText = String(this.rightText).trim();
    const currentPosition = this.currentPosition;
    const barStyle = {
      [vertical ? 'bottom' : 'left']: `${currentPosition}%`
    };
    const progressStyle = {
      [vertical ? 'height' : 'width']: `${currentPosition}%`
    };
    const runwayStyle = {};
    if (vertical) {
      runwayStyle.height = this.height;
    }
    return (
      <div class={className}>
        {leftText && <span class="text--left">{leftText}</span>}
        <div class="ui-slider__container">
          <div ref="sliderRunway" class="ui-slider__runway" style={runwayStyle}>
            <span class="bar" onMousedown={this.handleDragStart} style={barStyle} />
            <div class="progress" style={progressStyle} />
          </div>
        </div>
        {rightText && <span class="text--right">{rightText}</span>}
      </div>
    );
  },
  mounted() {
    this.$nextTick(() => this.getSliderSize());
  },
  methods: {
    emitValue() {
      this.$emit('input', parseInt(this.position.currentPos, 10));
    },
    limitRange(value) {
      return Math.max(this.min, Math.min(value, this.max));
    },
    getSliderSize() {
      const clientAttr = this.vertical ? 'clientHeight' : 'clientWidth';
      this.sliderSize = this.$refs.sliderRunway[clientAttr];
    },
    setCurrentPosition(ev) {
      const vertical = this.vertical;
      const position = this.position;
      const diff = vertical ? (ev.clientY - this.startY) : (ev.clientX - this.startX);
      // 计算差距占精度条的百分比
      let percent = (diff / this.sliderSize).toFixed(6) * 100;
      percent = vertical ? -percent : percent;
      position.currentPos = this.limitRange(position.prevPos + percent);
      this.emitValue();
    },
    handleDragStart(e) {
      if (this.disabled) return;
      e.stopPropagation();
      window.addEventListener('mousemove', this.handleDraging);
      window.addEventListener('mouseup', this.handleDragEnd);
      const position = this.position;
      const vertical = this.vertical;
      this[vertical ? 'startY' : 'startX'] = vertical ? e.clientY : e.clientX;
      position.prevPos = position.currentPos;
      this.isDraging = true;
    },
    handleDraging(e) {
      e.stopPropagation();
      if (this.isDraging) {
        this.setCurrentPosition(e);
      }
    },
    handleDragEnd(e) {
      e.stopPropagation();
      this.isDraging = false;
      window.removeEventListener('mousemove', this.handleDraging);
      window.removeEventListener('mouseup', this.handleDragEnd);
    }
  }
};
</script>
