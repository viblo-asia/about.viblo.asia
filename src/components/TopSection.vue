<template>
  <section id="top-section" class="py-12 lg:py-24">
    <div class="max-w-sm lg:max-w-screen-xl mx-auto lg:grid lg:grid-cols-2">
      <div class="top-item" v-for="(item, index) in topItems" :key="index">
        <VueAos animation-class="spaceInDown magictime" :threshold="1">
          <div class="item-container">
            <div class="hexagon">
              <div class="hexagon-content" v-html="item.title"></div>
            </div>
            <div class="belongs-container">
              <div class="connector"></div>
              <div class="belongs" v-html="item.belongs"></div>
            </div>
          </div>
        </VueAos>
      </div>
    </div>
  </section>
</template>

<script>
import VueAos from 'vue-aos'
import topItems from '@/data/top-items'

export default {
  data () {
    return {
      topItems: topItems
    }
  },

  components: {
    VueAos
  }
}
</script>

<style lang="scss" scoped>
  .top-item {
    @apply flex flex-1 w-full my-0 px-2;

    .item-container {
      @apply flex items-center;
    }

    .hexagon {
      @apply z-10 bg-blue-600 flex flex-none justify-center items-center;
      width: 100px;
      height: 100px;
      clip-path: polygon(98.66025% 45%, 99.39693% 46.5798%, 99.84808% 48.26352%, 100% 50%, 99.84808% 51.73648%, 99.39693% 53.4202%, 98.66025% 55%, 78.66025% 89.64102%, 77.66044% 91.06889%, 76.42788% 92.30146%, 75% 93.30127%, 73.4202% 94.03794%, 71.73648% 94.48909%, 70% 94.64102%, 30% 94.64102%, 28.26352% 94.48909%, 26.5798% 94.03794%, 25% 93.30127%, 23.57212% 92.30146%, 22.33956% 91.06889%, 21.33975% 89.64102%, 1.33975% 55%, 0.60307% 53.4202%, 0.15192% 51.73648%, 0% 50%, 0.15192% 48.26352%, 0.60307% 46.5798%, 1.33975% 45%, 21.33975% 10.35898%, 22.33956% 8.93111%, 23.57212% 7.69854%, 25% 6.69873%, 26.5798% 5.96206%, 28.26352% 5.51091%, 30% 5.35898%, 70% 5.35898%, 71.73648% 5.51091%, 73.4202% 5.96206%, 75% 6.69873%, 76.42788% 7.69854%, 77.66044% 8.93111%, 78.66025% 10.35898%);

      .hexagon-content {
        @apply text-center text-white tracking-wide uppercase px-2;
        font-size: 0.6rem;
        width: 100%;
      }
    }

    .belongs-container {
      @apply flex items-center;

      .connector {
        @apply border-t-4 border-dotted border-blue-600 mr-2 w-full w-16 flex-shrink-0;
      }

      .belongs {
        @apply uppercase text-xs text-blue-600 flex-shrink;
      }
    }

    &:nth-child(odd) {
      @apply justify-end;

      .item-container {
        @apply flex-row-reverse;

        .belongs-container {
          @apply flex-row-reverse;

          .connector {
            @apply mr-0 ml-2;
          }

          .belongs {
            @apply text-right;
          }
        }
      }
    }
  }

  @screen md {
    .top-item {

      .hexagon {
        width: 120px;
        height: 120px;

        .hexagon-content {
          @apply text-xs tracking-wider px-2;
        }
      }

      .belongs-container {

        .connector {
          @apply w-24;
        }

        .belongs {
          @apply text-xs;
        }
      }

      &:nth-child(odd) {

        .belongs-container {
          @apply flex-row-reverse;
        }
      }
    }
  }

  @screen lg {
    .top-item {
      @apply ml-4 mb-4;

      .hexagon {
        width: 170px;
        height: 170px;

        .hexagon-content {
          @apply text-sm;
        }
      }

      .belongs-container {
        .connector {
          @apply w-32;
        }

        .belongs {
          @apply text-sm;
        }
      }

      &:nth-child(odd) {
        @apply mr-4 ml-0;
      }
    }
  }
</style>
