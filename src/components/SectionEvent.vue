<template>
  <section id="section-event" class="text-center py-16 md:py-32">
    <div class="md:max-w-screen-xl m-auto">
      <div class="about-images">
        <carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="5" :controls-visible="true" :perspective="0" :space="300" :height="heightString">
          <slide v-for="(image, imageIndex) in dataImages" :key="image" :index="imageIndex">
            <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
              <div class="item" ref="itemBox" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :data-index="imageIndex">
                <img :src="image" alt="slider" />
                <div class="reflection h-56 overflow-hidden relative"><img :src="image" alt="slider" @load="onLoad" /></div>
              </div>
            </template>
          </slide>
        </carousel-3d>
      </div>
      <div class="about-content md:max-w-screen-md m-auto">
        <div class="content-contact">
          <p>TRONG NĂM 2018, VIBLO HÂN HẠNH ĐƯỢC ĐỒNG HÀNH VỚI VAI TRÒ ĐƠN VỊ BẢO VỆ TRUYỀN THÔNG CÙNG CÁC SỰ KIỆN IT HÀNG ĐẦU VIỆT NAM, THU HÚT HÀNG NGÀN LẬP TRÌNH VIÊN THAM DỰ.</p>
          <br/>
          <div class="contact">
            State of Chain 2018 <br>
            Vietnam Mobile Day 2018 <br>
            Tech Invasion 2018 <br>
            OpenDev: <br/>
            "Inferring the Future of Mobile Application Development with AI/ML" <br/>
            & "From Zero to Dapp PROgrammer"
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  components: {
    Carousel3d,
    Slide
  },
  methods: {
    onLoad () {
      this.heightString = this.$refs.itemBox[0].clientHeight
    }
  },
  data () {
    return {
      dataImages: [
        require('../assets/slide01.jpg'),
        require('../assets/slide02.jpg'),
        require('../assets/slide03.jpg'),
        require('../assets/slide04.jpg'),
        require('../assets/slide05.jpg'),
        require('../assets/slide06.jpg'),
        require('../assets/slide07.jpg')
      ],
      heightString: '320'
    }
  }
}
</script>

<style lang="scss">
@import '../scss/_variable.scss';

#section-event {
  .carousel-3d-slide {
    background: none;
    border: none;
    border-radius: 0;
    padding: 30px
  }
  .item {
    > img {box-shadow: 0px 0px 20px 10px #000}
    .reflection {
      img {
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
      }
    }
    .reflection::before {
      content:"";
      width:100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(to bottom, rgba(2, 0, 46,0.75), rgba(2, 0, 46, .93), rgba(2, 0, 46, 1));
      z-index: 1;
    }
  }
  .carousel-3d-controls {
    .prev, .next {color: #FFF}
  }
}
</style>
