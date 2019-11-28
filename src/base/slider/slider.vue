<!-- 轮播图组件 -->
<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot name="sing"></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) in dots" :key="index" :class="{active: currentPageIndex === index}">

      </span>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { addClass } from "common/js/dom";
export default {
  name: "slider",
  props: {
    loop: {
      // 是否循环轮播
      type: Boolean,
      default: true
    },
    autoPlay: {
      // 是否自动播放
      type: Boolean,
      default: true
    },
    interval: {
      // 轮播间隔时间
      type: Number,
      default: 4000
    }
  },
  data() {
    return {
      dots: [], // 小圆点导向
      currentPageIndex: 0, // 当前播放的下角标
      children: [] // 轮播图片组合
    };
  },
  mounted() {
    setTimeout(() => {
      this._setSliderWidth();
    }, 200);
  },
  methods: {
    /**
     * 设置轮播宽度
     *
     */
    _setSliderWidth() {
      this.children = this.$refs.sliderGroup.children; // 子节点 轮播图个数
      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth; // 视口大小
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        addClass(child, "slider-item"); // 添加样式
        child.style.width = sliderWidth + "px"; // 设置宽度
        width += sliderWidth; // 轮播总宽度（实例中是5，就是5倍大小）
      }
      if (this.loop) {
        // 如果循环播放 需要在头尾 各添加一个节点 保证循环无缝切换
        width += 2 * sliderWidth;
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.slider {
  min-height: 1px;

  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;

    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;

      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;

    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-text-l;

      &.active {
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }
}
</style>