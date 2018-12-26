<template>
  <div class="ebook">
    <transition name="slide-down">
      <div class="title-wrapper" v-show="ifTitleAndMenuShow">
        <div class="left">
          <span class="icon iconfont icon-backarrow"></span>
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <span class="icon iconfont icon-cart"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon iconfont icon-renyuan"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon iconfont icon-more"></span>
          </div>
        </div>
      </div>
    </transition>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="toggleTitleAndMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <transition name="slide-up">
      <div class="menu-wrapper" v-show="ifTitleAndMenuShow">
        <div class="icon-wrapper">
          <span class="icon iconfont icon-menu"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon iconfont icon-progress"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon iconfont icon-brightness"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon iconfont icon-a">A</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Epub from 'epubjs'
global.ePub = Epub
const DOWNLOAD_URL = '/static/2018_Book_AgileProcessesInSoftwareEngine.epub'
export default {
  data () {
    return {
      ifTitleAndMenuShow: false
    }
  },
  methods: {
    toggleTitleAndMenu () {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
    },
    // 上一页
    prevPage () {
      // Rendition.prev
      this.rendition.prev()
    },
    // 下一页
    nextPage () {
      // Renddition.next
      this.rendition.next()
    },
    // 电子书的解析和渲染
    showEpub () {
      // 1. 生成Ebook
      this.book = new Epub(DOWNLOAD_URL)
      console.log(this.book)
      // 2. 生成rendition, 通过Book.renderTo
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeights
      })
      // 3.  通过rendition.display 渲染电子书
      this.rendition.display()
    }
  },
  mounted () {
    this.showEpub()
  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
@import 'assets/styles/global';
.ebook {
  position: relative;
  .title-wrapper{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: px2rem(48);
    z-index: 101;
    display: flex;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
    background: white;
    .left{
      flex: 0 0 px2rem(60);
      @include center
    }
    .right{
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper{
        flex: 0 0 px2rem(40);
        @include center;
        .icon-cart {
          font-size: px2rem (22)
        }
      }
    }
  }
  .read-wrapper{
    position: relative;
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      display: flex;
    }
    .left{
      flex: 0 0 px2rem(100);
    }
    .center{
      flex: 1;
    }
    .right{
      flex: 0 0 px2rem(100);
    }
  }
  .menu-wrapper{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: px2rem(48);
    z-index: 101;
    display: flex;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
    background: white;
    .icon-wrapper{
      flex: 1;
      @include center;
      .icon-progress{
        font-size: px2rem(28)
      }
      .icon-brightness{
        font-size: px2rem(24)
      }
    }
  }
}
</style>
