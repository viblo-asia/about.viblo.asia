<template>
  <section
    id="section-about"
    class="scrollspy text-center py-16 md:py-32 flex min-h-screen items-center flex-col md:flex-row relative"
  >
    <div class="about-image md:order-last w-full md:w-1/2 md:z-20 relative">
      <VueAos animation-class="zoomInRight animated" :threshold="0.5">
        <div class="max-w-3xl">
          <img :src="getUrl()" alt="section about" class="m-auto max-w-full" />
        </div>
      </VueAos>
    </div>
    <div
      class="about-content pt-16 md:order-first w-full md:w-1/2 text-center absolute md:relative z-10"
    >
      <div class="px-8 md:py-8 md:transform max-w-xl m-auto">
        <VueAos animation-class="fadeInLeft animated" :threshold="1">
          <h1 class="uppercase text-white text-5xl font-black">{{ viblo.introduction.title }}</h1>
        </VueAos>
        <VueAos animation-class="fadeInLeft animated" :threshold="1">
          <div class="about-text text-justify" v-html="markdownToHtml">
          </div>
        </VueAos>
      </div>
    </div>
  </section>
</template>

<script>
import VueAos from 'vue-aos'
import { mapState } from 'vuex'
import dataIntroduction from '@/data/introduction'
import { marked } from 'marked'

export default {
  data: () => ({ dataIntroduction }),
  components: {
    VueAos
  },

  computed: {
    ...mapState(['viblo', 'i18n']),
    markdownToHtml () {
      if (this.i18n === 'en') {
        return marked(this.viblo.introduction.descriptionEn)
      }
      return marked(this.viblo.introduction.description)
    }
  },
  methods: {
    getUrl () {
      return process.env.VUE_APP_IMAGE_URL + '/' + this.viblo.introduction.image
    }
  }
}
</script>
<style lang="scss">
@import '~animate.css/source/zooming_entrances/zoomInRight.css';
@import '~animate.css/source/fading_entrances/fadeInLeft.css';
@import "../scss/_variable.scss";

#section-about {
  background: url("../assets/Asset 17.png") no-repeat left center transparent;
  background-size: 100%;
  .about-content {
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 767px) {
    .about-image:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(2, 0, 46, 0.9);
    }
  }
  @media (min-width: 768px) {
    .about-content {
      top: auto;
      transform: none;
      background: none;
      > div {
        --transform-rotate: -10deg;
        background: $bg_color;
      }
    }
  }
}
</style>
