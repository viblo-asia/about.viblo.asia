<template>
  <section
    id="section-service"
    class="scrollspy text-center py-16 md:py-32 bg-cover bg-right-top bg-no-repeat"
  >
    <div class="md:max-w-screen-xl m-auto px-4">
      <VueAos animation-class="zoomIn animated" :threshold="1">
        <TitleSection section_title="Our <span class='font-black'>services</span>" />
      </VueAos>
      <div class="services-list text-white px-4">
        <div
          v-for="(service, index) in dataServices"
          :key="index"
          :class="service.code"
          class="service-item py-20 md:py-16 flex flex-row items-center relative"
          style="min-height: 70vh"
        >
          <VueAos
            :animation-class="index % 2 === 0 ? 'slideInLeft animated' : 'slideInRight animated'"
          >
            <div
              class="item-images absolute sm:relative overflow-hidden sm:block sm:w-1/3 md:w-1/2 inset-0 flex items-center justify-center"
              :class="index % 2 === 0 ? '' : 'md:order-last'"
            >
              <div class="images py-8 md:py-0 h-full">
                <!-- <div class="image"><img :src="service.logo" :alt="service.title" /></div> -->
                <div class="image h-full" v-for="image in service.images" :key="image">
                  <img :src="image" :alt="service.title" class="w-auto m-auto" />
                </div>
              </div>
            </div>
          </VueAos>
          <VueAos
            :animation-class="index % 2 !== 0 ? 'slideInLeft animated' : 'slideInRight animated'"
          >
            <div
              class="item-content w-full sm:w-2/3 md:w-1/2 text-center sm:text-left sm:pl-4 md:pl-0 z-10"
              :class="index % 2 !== 0 ? 'md:order-first' : 'md:text-right'"
            >
              <div class="logo">
                <img
                  class="inline-block max-w-full md:max-w-lg md:h-20"
                  :src="service.logo"
                  :alt="service.title"
                />
              </div>

              <div class="title text-2xl lg:text-4xl font-bold hidden">
                <h3 class="uppercase">{{ service.title }}</h3>
              </div>

              <div
                class="description text-lg my-8 lg:my-16"
                v-html="service.description"
              ></div>
              <div class="link">
                <a
                  :href="service.link"
                  class="button rounded-full py-2 px-4 sm:px-16 inline-block"
                  target="_blank"
                >Go to {{ service.title }}</a>
              </div>
            </div>
          </VueAos>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueAos from 'vue-aos'
import TitleSection from './TitleSection'
import dataServices from '@/data/services'

export default {
  data: () => ({ dataServices }),

  components: {
    VueAos,
    TitleSection
  }
}
</script>

<style lang="scss">
@import '~animate.css/source/sliding_entrances/slideInLeft.css';
@import '~animate.css/source/sliding_entrances/slideInRight.css';

#section-service {
  background: -moz-linear-gradient(
    top,
    rgba(2, 0, 46, 1) 0%,
    rgba(2, 0, 46, 0) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(2, 0, 46, 1) 0%,
    rgba(2, 0, 46, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(2, 0, 46, 1) 0%,
    rgba(2, 0, 46, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#02002e', endColorstr='#0002002e',GradientType=0 ); /* IE6-9 */

  .service-item {
    min-height: 100vh;
    @media screen and (min-width: 1600px) {
      min-heigth: 70vh;
    }
    .item-images {
      @media (max-width: 640px) {
        :after {
          content: "";
          width: 100%;
          height: 100%;
          background-color: rgba(1, 0, 45, 0.6);
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
      }
      .images {
        img {
          max-height: 25rem;
        }
      }
    }
    .item-content {
      .logo {
        img {
          max-height: 5rem;
        }
      }
      .link .button {
        background-color: #3ec08d;
      }
    }
  }
  .service-item.v-viblo .link .button {
    background-color: #3ec08d;
  }
  .service-item.v-code .link .button {
    background-color: #3e6f8d;
  }
  .service-item.v-ctf .link .button {
    background-color: #66a825;
  }
  .service-item.v-cv .link .button {
    background-color: #f5861e;
  }
}
</style>
