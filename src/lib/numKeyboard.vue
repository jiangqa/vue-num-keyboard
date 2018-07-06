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
            <!--<div class="sanjiao"></div>-->
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAvCAYAAAHLDpf5AAAAAXNSR0IArs4c6QAAAkhJREFUaAXtV4tyAyEIvHT6/7+cCsk6e5TjHiZiG2+mpwjCsqCX3pZluZe/8Pk22puR1YEsygSjsXmsf9lVkqtXDlcXyfD4dAtL9cDuPRqq3lPqGoP1jGqotkmr6zszD2cy8lwgejLWNAUWZA45GqHTAIxEPT5fMPLGWgds2K0sDFtHoNn08xIku1E2w5cCMKFw5I3emvplB0GgWAXvYoU5jzxnG503I0AV7Cje9x7d04xAoiDHvYie/g7onnKMNUkvTHGIFPhGFkC9H2WIQQAAqAMoyKK3a1Y+a6MxxQmCwKEqOr02mUB8gBMZALFm5bM2iKHj0Exwxpiv0J8QOFHZBharCzb4paxW75toggzifaH+gueWEni90uKviS8PzCmH6T3xkl8Ap1I2xvzN6F1HLd9QDAg53FRgBGtWFnu7ZuXIRnRLOgPpAIQyS7FS0+GlcfkU2JgWGGSxs7W2cmSzipNegnQAQ/aArTXLq/odFMIk00uQDiCk5yDFV820tEMxcDWTpn3pDDSh/xeb8RG5koy9oFp8XYmvewSEBXLZWcpGvohSAIwQdF4FpQreL8OUQ9W5I1bnd3bCRidwUVaMPRW2U/6iDeeY/7/qCk2S4H0dbKWToL017Kp7551QuPa+DnslWLH4NLbdM5pNmNPshELPvBMKCbMTCglH74TojHu68Ay+WIn7yMMBXRhydkKhZ94JhYTZCZOEx1XhHYeH5oPe8zh8ULHDVA99R0MP55Tet3zLQzds3QKZTCMyumPqHjAgIw3LD14Ei0kRQ7j9AAAAAElFTkSuQmCC" alt="">
            <!--<svg><use xlink:href="require('./keyboard-hide.svg')"></use></svg>-->
            <!--<svg viewBox="0 0 1024 1024" width="26" height="26"><path d="M945.230769 671.507692c21.661538 0 39.384615-17.723077 39.384616-39.384615v-512c0-21.661538-17.723077-39.384615-39.384616-39.384615H78.769231c-21.661538 0-39.384615 17.723077-39.384616 39.384615v512c0 21.661538 17.723077 39.384615 39.384616 39.384615h866.461538z m-827.076923-78.76923v-433.23077h787.692308v433.23077H118.153846z m151.630769-328.861539c0 15.753846-13.784615 29.538462-29.538461 29.538462h-19.692308c-15.753846 0-29.538462-13.784615-29.538461-29.538462v-19.692308c0-15.753846 13.784615-29.538462 29.538461-29.538461h19.692308c15.753846 0 29.538462 13.784615 29.538461 29.538461v19.692308z m112.246154-19.692308c0-15.753846-13.784615-29.538462-29.538461-29.538461h-19.692308c-15.753846 0-29.538462 13.784615-29.538462 29.538461v19.692308c0 15.753846 13.784615 29.538462 29.538462 29.538462h19.692308c15.753846 0 29.538462-13.784615 29.538461-29.538462v-19.692308z m226.461539 19.692308c0 15.753846-13.784615 29.538462-29.538462 29.538462h-19.692308c-15.753846 0-29.538462-13.784615-29.538461-29.538462v-19.692308c0-15.753846 13.784615-29.538462 29.538461-29.538461h19.692308c15.753846 0 29.538462 13.784615 29.538462 29.538461v19.692308z m-114.215385 0c0 15.753846-13.784615 29.538462-29.538461 29.538462h-19.692308c-15.753846 0-29.538462-13.784615-29.538462-29.538462v-19.692308c0-15.753846 13.784615-29.538462 29.538462-29.538461h19.692308c15.753846 0 29.538462 13.784615 29.538461 29.538461v19.692308z m340.676923-19.692308c0-15.753846-13.784615-29.538462-29.538461-29.538461h-19.692308c-15.753846 0-29.538462 13.784615-29.538462 29.538461v19.692308c0 15.753846 13.784615 29.538462 29.538462 29.538462h19.692308c15.753846 0 29.538462-13.784615 29.538461-29.538462v-19.692308z m-114.215384 0c0-15.753846-13.784615-29.538462-29.538462-29.538461h-19.692308c-15.753846 0-29.538462 13.784615-29.538461 29.538461v19.692308c0 15.753846 13.784615 29.538462 29.538461 29.538462h19.692308c15.753846 0 29.538462-13.784615 29.538462-29.538462v-19.692308z m-450.953847 137.846154c0 15.753846-13.784615 29.538462-29.538461 29.538462h-19.692308c-15.753846 0-29.538462-13.784615-29.538461-29.538462v-19.692307c0-15.753846 13.784615-29.538462 29.538461-29.538462h19.692308c15.753846 0 29.538462 13.784615 29.538461 29.538462v19.692307z m112.246154-19.692307c0-15.753846-13.784615-29.538462-29.538461-29.538462h-19.692308c-15.753846 0-29.538462 13.784615-29.538462 29.538462v19.692307c0 15.753846 13.784615 29.538462 29.538462 29.538462h19.692308c15.753846 0 29.538462-13.784615 29.538461-29.538462v-19.692307z m226.461539 19.692307c0 15.753846-13.784615 29.538462-29.538462 29.538462h-19.692308c-15.753846 0-29.538462-13.784615-29.538461-29.538462v-19.692307c0-15.753846 13.784615-29.538462 29.538461-29.538462h19.692308c15.753846 0 29.538462 13.784615 29.538462 29.538462v19.692307z m-114.215385 0c0 15.753846-13.784615 29.538462-29.538461 29.538462h-19.692308c-15.753846 0-29.538462-13.784615-29.538462-29.538462v-19.692307c0-15.753846 13.784615-29.538462 29.538462-29.538462h19.692308c15.753846 0 29.538462 13.784615 29.538461 29.538462v19.692307z m340.676923-19.692307c0-15.753846-13.784615-29.538462-29.538461-29.538462h-19.692308c-15.753846 0-29.538462 13.784615-29.538462 29.538462v19.692307c0 15.753846 13.784615 29.538462 29.538462 29.538462h19.692308c15.753846 0 29.538462-13.784615 29.538461-29.538462v-19.692307z m-114.215384 0c0-15.753846-13.784615-29.538462-29.538462-29.538462h-19.692308c-15.753846 0-29.538462 13.784615-29.538461 29.538462v19.692307c0 15.753846 13.784615 29.538462 29.538461 29.538462h19.692308c15.753846 0 29.538462-13.784615 29.538462-29.538462v-19.692307z m-450.953847 137.846153c0 15.753846-13.784615 29.538462-29.538461 29.538462h-19.692308c-15.753846 0-29.538462-13.784615-29.538461-29.538462v-19.692307c0-15.753846 13.784615-29.538462 29.538461-29.538462h19.692308c15.753846 0 29.538462 13.784615 29.538461 29.538462v19.692307z m450.953847-19.692307c0-15.753846-13.784615-29.538462-29.538462-29.538462H332.8c-15.753846 0-29.538462 13.784615-29.538462 29.538462v19.692307c0 15.753846 13.784615 29.538462 29.538462 29.538462h358.4c15.753846 0 29.538462-13.784615 29.538462-29.538462v-19.692307z m114.215384 0c0-15.753846-13.784615-29.538462-29.538461-29.538462h-19.692308c-15.753846 0-29.538462 13.784615-29.538462 29.538462v19.692307c0 15.753846 13.784615 29.538462 29.538462 29.538462h19.692308c15.753846 0 29.538462-13.784615 29.538461-29.538462v-19.692307zM356.430769 732.553846h311.138462c9.846154 0 15.753846 11.815385 7.876923 19.692308l-151.630769 187.076923c-5.907692 5.907692-17.723077 5.907692-21.661539 0l-153.6-187.076923c-5.907692-7.876923-1.969231-19.692308 7.876923-19.692308z" p-id="787" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#515151"></path></svg>-->
          </a>
        </div>
      </div>
      <div class="right flex-column">
        <a href="javascript:;" class="flex-center" @click.stop="cleanValue">
          <!--<div class="cha"></div>-->
          <!--<svg><use xlink:href="require('./keyboard-dismiss.svg')"></use></svg>-->
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAlCAYAAAGYKeE6AAAAAXNSR0IArs4c6QAAA+FJREFUWAnVWE2ITWEYvuNn/CSSv2g0YyEUJXdSykKmbMTCRixsxMZKs7EkWYmdjR2Ly4aFWSlsFDaKksyGJEP5yU9ohOt5jvue+573+75zv+/McMdbz3zv/8/5zvnOuVOrtWkYbFOh0Ta5XH2aq6s9Ep0Yt7UUNKwXo15nawF8vUcp2IxD+x0NFF+VMm+CurnKQLZg3GGMtelGMQCZum9Gr8W6Fm5qAbwup/k86KgJEJHOOoD6PIjCKmAlmQ5UCBLfY2D0Tlu+oXdBgry7IUasTkynAMYWfAqCymzZ3E9vuzjpq6b5LMjujwRx9V3yJm/k7dorhc/7VEG6Jc0XfAuCCras4+cobATkprNRVHoctarHF6QdhiDcAAa1MpG/Av87oZg5MLDLjSGHBD0fCu/EVJ4NJFoCvd4x60YbfTRlhWYozTPwvJRll/MN7DwspZgcnFaGi0tnoPKO5ro6Gh5zZUcdAwqXjmcji+2lJYI4gUxBdyvrFIVCYlgMhgU3iMKslffI5MnFTeBYcGGuqc5kE5VtPFMfAC4AgxQqUulzpHNysqoYQ2yfvrV1YuHHwYwAJ0SRuPbD/0VZDLsYLXOItPEqeInn0SevJV3pLXIeeX6l5wpGOEUOwdVRqnA+hPbcEnPoeSrk29Iq0CtRnpWJGGQLhfRMkRdZ3hK4diKb0Mo2PivCzslwkliSxGsR4JtM58mK8M9hrY3kpQDXMsqKnINHxpR5GlvyJIy/Cvw0iUKiFOBKsvIfbftvYYDb0Hd6KYUShvQsVShCxWPgPZkAlT0nSxFDuyWnCB1eAs+t5wRkbxHm+wA8nEBiHRosQqdx4Jb2rsg3y94ns5CUB+Vl4HTFAv2xcRy3KsYQ2xdbKOS3DwZOW7WJyYp7hx4qD8Nv9Y+tIe5itb/GofpntAeVeFG4O0m0CN5PAAa/AgaAbpN8HLOnKOKX+jWAAXxah4CpQknDHEfXHIIYBlKIrwOiCvGEj4mNGmYXkv0AOMQloAdIITbC1w3jy15LNmdqXOkwa5D9bauJB1jn22qJcmxzsX62vHcYNs3meSV51HX6yIJLEoWaDeljkxeG4e3TADgEb6vdwN8k3Tw/zVJvQ9tbPgz/23YK4MuPdBLgqfVfE3fnIsCrxDf6QWCySe+IPhBC+tj6+c7YgF4orgMc6juwE5goxTYb62f7CQ4jjgvA3Ac41GdgM5BKVZtLjes4jDS+AsxTgEO9BlYDKRT74vPljI2NHkaKrAPDf5NyqFFgGTBVKHkYaXwrmC8Ah7oHzAO6TZWHkcb52S2fOiPgZ4qhC2vlnwC21yNQcJe6jezH2W+WTmpKTxaqgQAAAABJRU5ErkJggg==" alt="">
        <!--<svg viewBox="0 0 1024 1024" width="30" height="30"><path d="M792.78975423 637.75006105c2.51806641 2.48840333 3.90893555 5.86999511 3.90893555 9.40979002 0 3.54473877-1.39086914 6.92633057-3.90893555 9.4048462l-35.9631958 36.09832763c-2.59552002 2.61364746-5.97381593 3.90728759-9.37847901 3.9072876-3.41290283 0-6.81921386-1.29364013-9.38507079-3.9072876l-125.62316895-126.00384521-125.62316895 126.00384521c-2.56750489 2.61364746-5.97381593 3.90728759-9.38507079 3.9072876-3.40466308 0-6.78460693-1.29364013-9.38012696-3.9072876l-35.96484375-36.09832763c-2.51641846-2.47851563-3.91058349-5.86010742-3.9105835-9.4048462 0-3.53979492 1.39416503-6.92138672 3.9105835-9.40979002L558.21407064 512l-126.46032715-125.73358154c-5.18444825-5.19598388-5.18444825-13.63348388 0-18.83111573l35.93682861-36.12139892c2.49829102-2.49005127 5.85351563-3.88421631 9.38671875-3.88421631 3.54638672 0 6.90325927 1.39581299 9.37847901 3.88421631l125.98242186 124.47454834 125.98077393-124.47454834c2.47851563-2.49005127 5.83538818-3.88421631 9.3817749-3.88421631 3.53155518 0 6.88677979 1.39581299 9.3850708 3.88421631l35.93682862 36.12139892c5.18444825 5.19598388 5.18444825 13.63348388 0 18.83111573L666.65901692 512 792.78975423 637.75006105z" p-id="961" fill="#515151"></path><path d="M997.882 187.118C980.074 169.308 957.392 160 931.75 160L336 160c-48.606 0-87.434 18.804-115.412 56.882L0 511.876l220.8 293.056 0.36 0.462 0.368 0.464c13.808 17.71 28.848 31.402 45.98 40.834C287.766 857.848 310.81 864 336 864l596 0c52.382 0 92-44.514 92-98L1024 254C1024 228.358 1015.692 204.926 997.882 187.118zM960 766c0 17.674-10.326 34-28 34L336 800c-30.334 0-48.666-13.332-64-33L80 512l192-256.876c19-26 42.334-31.124 64-31.124l595 0c17.674 0 29 12.326 29 30L960 766z" p-id="962" fill="#515151"></path></svg>-->
        </a>
        <a href="javascript:;" @click.stop="confirm">确定</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">


  export default {
    name: 'numKeyboard',
    data() {
      return {
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
    box-sizing: border-box;
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
  /*.cha{ display: inline-block; width: 26px;height:3px; background: #666;line-height: 0;font-size:0;vertical-align: middle;-webkit-transform: rotate(45deg);}*/
  /*.cha:after{content:'/';display:block;width: 26px;height:3px; background: #666;-webkit-transform: rotate(-90deg);}*/
  /*.sanjiao{*/
    /*width:0;*/
    /*height:0;*/
    /*border-width:12px 12px 0;*/
    /*border-style:solid;*/
    /*border-color:#666 transparent transparent;!*灰 透明 透明 *!*/
    /*position:relative;*/
  /*}*/
</style>
