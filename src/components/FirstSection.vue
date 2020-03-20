<template>
  <Intersect @change="headerShow" :threshold="[0, 0.7, 1]" rootMargin="0px 0px 1000px 0px">
    <section
      id="first-section"
      class="scrollspy relative py-32 md:py-0 min-h-screen flex items-center"
    >
      <div id="brand" class="flex flex-col items-center p-10 max-w-md mx-auto md:max-w-lg md:absolute z-10">
        <img src="../assets/logo.svg" alt="Viblo Logo" id="logo" class="mb-3 zoomInUp animated">
        <div class="my-4 text-blue-300 text-center select-auto text-lg md:text-2xl md:whitespace-no-wrap zoomInUp animated">
          <h1>Ultimate platform for learning and sharing IT Knowledge</h1>
        </div>
      </div>
    </section>
  </Intersect>
</template>

<script>
import EventBus from '@/includes/event-bus'
import Intersect from 'vue-intersect'

export default {
  components: {
    Intersect
  },

  methods: {
    headerShow (status) {
      if (status[0].intersectionRatio > 0.7) {
        EventBus.$emit('header-show', true)
      } else {
        EventBus.$emit('header-show', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~animate.css/source/zooming_entrances/zoomInUp.css';

  #first-section {
    background: radial-gradient(#003dbd, #01001e);

    &:after {
      content: "";
      background: url(../assets/v-pattern.png) left bottom no-repeat;
      mix-blend-mode: screen;
      opacity: 0.3;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
    }

    @screen md {
      #brand {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
