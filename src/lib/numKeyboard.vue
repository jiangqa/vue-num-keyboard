<template>
  <div>
    <div class="mask" @click="close" v-show="show"></div>
    <div class="bordView flex" :class="show?'bordViewActive':''">
      <div class="left">
        <div v-for="i, k in 4" :key="k" class="flex">
          <template v-if="point">
            <a href="javascript:;" v-if="i == 4" @click.stop="numclick('.')">.</a>
          </template>
          <template v-else>
            <a href="javascript:;" v-if="i == 4"></a>
          </template>
          <!--<template v-if="isMobile">-->
          <!--<a href="javascript:;" v-for="n, k in numsArr.slice((i - 1) * 3, i * 3)" @touchstart.stop="numclick(n)"-->
          <!--:key="k">{{n}}</a>-->
          <!--</template>-->
          <template>
            <a href="javascript:;" v-for="n, k in numsArr.slice((i - 1) * 3, i * 3)" @click.stop="numclick(n)" :key="k">{{n}}</a>
          </template>
          <a href="javascript:;" v-if="i == 4" class="flex-center" @click.stop="close">
            <div class="sanjiao"></div>
          </a>
        </div>
      </div>
      <div class="right flex-column">
        <a href="javascript:;" class="flex-center" @click.stop="cleanValue">
          <div class="cha"></div>
        </a>
        <a href="javascript:;" @click.stop="confirm">确定</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  // import bord from './bord.jpg'
  // import bordC from './bordC.jpg'

  export default {
    name: 'numKeyboard',
    data() {
      return {
        // bord: bord,
        // bordC: bordC,
        numsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        values: '',
        show: this.value
      }
    },
    props: {
      point: {
        type: Boolean,
        default: true
      },
      value: {
        type: Boolean,
        default: false
      },
      decimalDigits: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      value(v) {
        this.show = v
      }
    },
    methods: {
      lockFu(e) {
        e.preventDefault();
        e.stopPropagation();
      },
      lock() {
        document.addEventListener('touchmove', (e) => {
          this.lockFu(e)
        })

      },
      unLock() {
        document.removeEventListener('touchmove', (e) => {
          this.lockFu(e)
        })
        this.values = ''
      },
      numclick(n) {
        let oldV = this.values
        if (oldV === '0' && n !== '.') {
          oldV = `${n}.00`
        } else if (oldV === '' && n === '.') {
          oldV = '0.'
        } else if (/\./g.test(oldV) && n === '.') {
          this.values = oldV
        } else {
          if (!/^[0-9]*\.\d{2}$/.test(oldV) || !this.decimalDigits) {
            oldV = oldV + n.toString()
          }
        }
        this.values = oldV
        this.$emit('cb', this.values)
      },
      close() {
        this.unLock()
        this.values = ''
        this.$emit('input', false)
        // this.$emit('emitShow',false)
      },
      confirm() {
        this.$emit('confirm', this.values)
        this.close()
      },
      cleanValue() {
        this.values = ''
        this.$emit('cb', this.values)
      }
    },
    created() {
      this.lock()
      // const ua = window.navigator && window.navigator.userAgent || '';

      // this.isMobile = !!ua.match(/AppleWebKit.*Mobile.*/) || 'ontouchstart' in document.documentElement;
    },
    beforeDestroy() {
      this.unLock()
    }
  }
</script>

<style scoped>

  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-center {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 8888;
  }

  .bordView {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 200px;
    background: #ffffff;
    transform: translate(0, 100%);
    transition: transform 0.2s;
    overflow: hidden;
    z-index: 8889;
  }

  .bordViewActive {
    transform: translate(0, 0);
  }

  .left {
    flex: 3;
  }

  .right {
    flex: 1;
  }

  .left a {
    height: 50px;
    font-size: 26px;
    line-height: 50px;
    text-align: center;
    flex: 1;
    border-top: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    color: #2A2B2C;
  }

  .left a:active, .right a:first-child:active {
    background: #cccccc;
  }

  .right a {
    border-top: 1px solid #cccccc;
    height: 100px;
    line-height: 100px;
    text-align: center;

    font-size: 21px;
  }

  .right a:last-child {
    background: #108EE9;
    color: #ffffff;
  }

  img {
    width: 30px;
  }
  .cha{ display: inline-block; width: 26px;height:3px; background: #666;line-height: 0;font-size:0;vertical-align: middle;-webkit-transform: rotate(45deg);}
  .cha:after{content:'/';display:block;width: 26px;height:3px; background: #666;-webkit-transform: rotate(-90deg);}
  .sanjiao{
    width:0;
    height:0;
    border-width:12px 12px 0;
    border-style:solid;
    border-color:#666 transparent transparent;/*灰 透明 透明 */
    position:relative;
  }
</style>
