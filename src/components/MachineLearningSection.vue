<template>
  <section id="machine-learning" class="scrollspy py-16 md:py-32 lg:h-screen">
    <div id="ml-container"
      class="relative max-w-screen-xl mx-auto h-full flex items-center justify-center md:justify-end">
      <VueAos animation-class="zoomInLeft animated">
        <div class="skull-background lg:flex-1"></div>
      </VueAos>
      <div class="flex flex-col items-end p-2 md:p-5 z-10 lg:flex-1">
        <VueAos animation-class="zoomInRight animated">
          <TitleSection section_title='Viblo <span class="text-red-600">♥</span> <span class="font-black">Machine Learning</span>' />
        </VueAos>

        <VueAos animation-class="zoomInRight animated">
          <div id="ml-intro" class="md:mt-12 mt-8 text-blue-100 max-w-lg text-justify">
            <p>Viblo ứng dụng các kỹ thuật trong Machine Learning, Deep Learning và đặc biệt là
              Natural Language Processing để giải quyết các vấn đề nhằm cải thiện trải nghiệm
              người dùng, cũng như thúc đẩy hơn nữa sự phát triển của Viblo trong tương lai.</p>

            <p>Các ứng dụng sử dụng kỹ thuật Machine Learning của Viblo được publish tại
              <a class="text-blue-400" href="https://ai.viblo.asia" target="blank">
                https://ai.viblo.asia
              </a>.
            </p>
          </div>
        </VueAos>
      </div>
    </div>
  </section>
</template>

<script>
import VueAos from 'vue-aos'
import TitleSection from './TitleSection'

export default {
  components: {
    VueAos,
    TitleSection
  }
}
</script>

<style lang="scss" scoped>
  @import '~animate.css/source/zooming_entrances/zoomInLeft.css';
  @import '~animate.css/source/zooming_entrances/zoomInRight.css';

  #machine-learning {
    background: linear-gradient(90deg, rgba(1,0,30,1) 0%, rgba(0,61,189,1) 100%);
    background-size: contain;

    #ml-container {
      padding: 4rem 0;

      .skull-background {
        content: "";
        background: url(../assets/skull.png) left bottom no-repeat;
        background-size: contain;
        mix-blend-mode: screen;
        opacity: 0.35;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
      }
    }

    #ml-intro {
      @apply leading-relaxed tracking-wide;

      & > * + *,  & li + li, & li > p + p {
        @apply mt-6;
      }
    }

    @screen lg {
      #ml-container {
        padding: 0;

        .skull-background {
          width: 100%;
          height: 100%;
          opacity: 1;
          top: auto;
          left: auto;
          bottom: auto;
          right: auto;
          position: static;
        }
      }
    }
  }
</style>
