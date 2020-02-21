<template>
  <section id="counter-section" class="pt-12 pb-12 lg:pt-24 lg:pb-24">
    <div class="flex justify-center">
      <span class="p-2 md:p-5 bg-blue-600 text-white text-lg md:text-3xl uppercase">
        <span class="font-thin">Những con số</span> <strong>ấn tượng</strong>
        </span>
    </div>
    <div id="counter" class="flex flex-col mt-12 lg:mt-24">
      <div class="counter-item flex flex-1 flex-row" v-for="counter in counters" :key="counter.name">
        <div class="counter-chart h-20 w-full border-r-2 border-blue-700 flex items-center justify-end overflow-hidden">
          <div :style="`width: ${800 * counter.widthPercent}px`" class="h-6 bg-blue-700"></div>
        </div>
        <div class="counter-detail w-full border-blue-700 align-middle flex items-center">
          <div class="text-white ml-4">
            <span class="font-bold text-white mr-2">{{ counter.count ? counter.count : `${counter.rate * 100}%` }}</span>
            <span class="font-light text-blue-300 uppercase">{{ counter.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      dataCounters: [
        {
          name: 'Người dùng active',
          count: 20937
        },
        {
          name: 'Bài viết được public',
          count: 15218
        },
        {
          name: 'Tag',
          count: 4145
        },
        {
          name: 'Lượt tương tác người dùng',
          count: 87264
        },
        {
          name: 'Bài viết được tương tác',
          count: 11842
        },
        {
          name: 'Seminar Videos',
          count: 58
        },
        {
          name: 'Lượt pageview hàng tháng',
          count: 1100000
        },
        {
          name: 'User mới hàng tháng',
          count: 600
        },
        {
          name: 'Bài viết mới hàng tháng',
          count: 600
        },
        {
          name: 'Câu hỏi được trả lời',
          rate: 0.8
        }
      ]
    }
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
  }
}
</script>

<style lang="scss" scoped>
  #counter-section {
    background: radial-gradient(#001748, #010013);
  }
</style>
