<template>
    <section id="counter-section" class="scrollspy py-16 md:py-32">
      <TitleSection section_title="Những con số <span class='font-black'>ấn tượng</span>" />
      <div id="counter" class="flex flex-col pt-24">
        <div
          class="counter-item flex flex-1 flex-row"
          v-for="(counter, index) in counters"
          :key="counter.name"
        >
          <Intersect v-if="index > 4" @enter.once="startAnimation" :threshold="[0, 1]">
            <div></div>
          </Intersect>

          <div
            class="counter-chart hidden md:flex md:h-12 md:w-full md:border-r-2 md:border-blue-700 md:items-center md:justify-end md:overflow-hidden"
          >
            <div :style="`width: ${800 * counter.widthPercent}px`" class="h-6 flex justify-end">
              <div
                class="h-full w-0 bg-blue-700 transition-all duration-1000 ease-in-out"
                :class="{'w-full':fullWidth}"
              ></div>
            </div>
          </div>

          <div
            class="counter-detail mb-8 last:mb-0 md:mb-0 md:w-full md:border-blue-700 md:align-middle md:flex md:items-center"
          >
            <div class="text-white ml-4 flex items-center">
              <div
                class="font-bold text-white mr-2 inline-block w-20 text-center flex-shrink-0"
                v-if="counter.count"
              >
                <NumberCount :numberCount="counter.count" />
              </div>
              <div
                class="font-bold text-white mr-2 inline-block w-20 text-center flex-shrink-0"
                v-else
              >
                <NumberCount :numberCount="counter.rate" />%
              </div>
              <div class="font-light text-blue-300 uppercase">{{ counter.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import counterItems from '@/data/counter-items'
import NumberCount from './NumberCount.vue'
import Intersect from 'vue-intersect'
import EventBus from '@/includes/event-bus'
import TitleSection from './TitleSection'

export default {
  data () {
    return {
      dataCounters: counterItems,
      fullWidth: false
    }
  },

  components: {
    NumberCount,
    Intersect,
    TitleSection
  },

  computed: {
    counters () {
      const counts = this.dataCounters
        .filter(counter => counter.count)
        .map(counter => counter.count)
      const maxCount = Math.max(...counts)
      const minCount = Math.min(...counts)
      const aveCount = (maxCount + minCount) / 2
      return this.dataCounters.map(counter => {
        if (!counter.rate) {
          counter.widthPercent = counter.count / aveCount
        } else {
          counter.widthPercent = counter.rate / 100
        }
        return counter
      })
    }
  },

  methods: {
    startAnimation () {
      this.fullWidth = true
      EventBus.$emit('start-counting')
    }
  }
}
</script>

<style lang="scss" scoped>
#counter-section {
  background: radial-gradient(#001748, #010013);
  min-height: 100vh;
}

.duration-1000 {
  transition-duration: 1000ms;
}
</style>
