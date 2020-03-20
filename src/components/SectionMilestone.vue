<template>
  <section id="section-milestone" class="scrollspy text-center py-16 md:pb-32 md:px-16">
    <div class="max-w-full md:max-w-screen-xl m-auto">
      <TitleSection section_title='Viblo <span class="font-black">milestone</span>' />
      <div class="section-content pt-24 px-8 md:px-8 flex flex-wrap justify-between">
        <div class="content-item w-full md:w-1/2 inline-block relative" v-for="(data, index) in dataEvents" :key="index">
          <div class="item-title text-white text-4xl inline-block relative mb-6">{{ data.date }}
            <template v-if="index % 2 === 0">
              <VueAos animation-class="tinLeftIn magictime" :threshold="1"><span class="under-ruler"></span></VueAos>
            </template>
            <template v-else>
              <VueAos animation-class="tinRightIn magictime" :threshold="1"><span class="under-ruler"></span></VueAos>
            </template>
          </div>
          <VueAos animation-class="spaceInDown magictime" :threshold="1">
            <div class="item-description">{{ data.mess }}</div>
          </VueAos>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueAos from 'vue-aos'
import milestoneItems from '@/data/milestone-items'
import TitleSection from './TitleSection'

export default {
  data () {
    return {
      dataEvents: milestoneItems
    }
  },

  components: {
    VueAos,
    TitleSection
  }
}
</script>

<style lang="scss">
@import '../scss/_variable.scss';
$border_color: rgba(36, 61, 255, 1);
$border_width: 3px;

  #section-milestone {
    .section-content {
      .content-item {
        .item-title:before {
          content: "";
          display: block;
          width: 40px;
          height: 40px;
          background: #FFF;
          border: 6px solid $border_color;
          border-radius: 1000px;
          position: absolute;
          bottom: 0;
          z-index: 1;
        }
        .under-ruler {
          content: "";
          display: block;
          width: calc(100% + 50px);
          height: $border_width;
          background-color: #243DFF;
        }
        .item-description {
          color: $text_primary;
        }
      }
      .content-item:nth-child(2n+1) {
        text-align: right;
        padding-right: 50px;
        margin-bottom: 100px;
        border-right: 6px solid $border_color;
        right: -$border_width;
        .item-title:before {
          right: -50px;
          transform: translate(calc(50% + 3px), 50%);
        }
      }
      .content-item:nth-child(2n) {
        text-align: left;
        padding-left: 50px;
        margin-top: 100px;
        border-left: 6px solid $border_color;
        left: -$border_width;
        .item-title:before {
          left: -50px;
          transform: translate(calc(-50% - 3px), 50%);
        }
        .under-ruler {
          margin-left: -50px;
        }
      }
      @media (max-width: 767px) {
        .content-item {
          padding: 15px 0 15px 30px;
          .item-title:after {width: calc(100% + 30px)}
        }
        .content-item:nth-child(2n+1) {
          margin: 0;
          padding-right: 0;
          border-right: none;
          border-left: 6px solid $border_color;
          right: auto;
          left: 0;
          text-align: left;
          .item-title:before {
            left: -30px;
            transform: translate(calc(-50% - 3px), 50%);
          }
          .under-ruler {
            margin-left: -30px;
          }
        }
        .content-item:nth-child(2n) {
          margin: 0;
          padding-left: 30px;
          left: 0;
          .item-title:before {
            left: -30px
          }
          .under-ruler {
            margin-left: -30px;
          }
        }
      }
    }
  }
</style>
