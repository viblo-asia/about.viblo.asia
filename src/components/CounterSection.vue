<template>
 <Intersect @enter.once="startAnimation" :threshold="[0.6]">
  <section id="counter-section" class="py-12 lg:py-24">
    <div class="flex justify-center">
      <span class="p-2 md:p-5 bg-blue-600 text-white text-lg md:text-3xl uppercase">
        <span class="font-thin">Những con số</span> <strong>ấn tượng</strong>
      </span>
    </div>
    <div id="counter" class="flex flex-col mt-12 lg:mt-24">
      <div class="counter-item flex flex-1 flex-row" v-for="counter in counters" :key="counter.name">
        <div class="counter-chart hidden md:flex md:h-12 md:w-full md:border-r-2 md:border-blue-700 md:items-center md:justify-end md:overflow-hidden">
          <div :style="`width: ${800 * counter.widthPercent}px`" class="h-6 flex justify-end">
              <div class="h-full w-0 bg-blue-700 transition-all duration-1000 ease-in-out" :class="{'w-full':fullWidth}"></div>
          </div>
        </div>
        <div class="counter-detail mb-8 last:mb-0 md:mb-0 md:w-full md:border-blue-700 md:align-middle md:flex md:items-center">
          <div class="text-white ml-4">
            <span class="font-bold text-white mr-2" v-if="counter.count"><NumberCount :numberCount="counter.count" /></span>
            <span class="font-bold text-white mr-2" v-else>{{ counter.rate * 100 }}%</span>
            <span class="font-light text-blue-300 uppercase">{{ counter.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  </Intersect>
</template>

<script>
import counterItems from '@/data/counter-items'
import NumberCount from './NumberCount.vue'
import Intersect from 'vue-intersect'
import EventBus from '@/includes/event-bus'

export default {
  data () {
    return {
      dataCounters: counterItems,
      fullWidth: false
    }
  },

  components: {
    NumberCount,
    Intersect
  },

  computed: {
    counters () {
      const counts = this
        .dataCounters
        .filter(counter => counter.count)
        .map(counter => counter.count)
      const maxCount = Math.max(...counts)
      const minCount = Math.min(...counts)
      const aveCount = (maxCount + minCount) / 2
      return this.dataCounters.map(counter => {
        if (!counter.rate) {
          counter.widthPercent = counter.count / aveCount
        } else {
          counter.widthPercent = counter.rate
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
    .counter-item .counter-chart {
      // @media (max-width: 767px) {display: none}
    }
  }

  .duration-1000 {
    transition-duration: 1000ms;
  }
</style>
