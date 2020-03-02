<template>
  <span>
    {{ numberShow | formatNumber }}
  </span>
</template>

<script>
import EventBus from '@/includes/event-bus'

export default {
  data () {
    return {
      numberShow: 0,
      startTime: null,
      animateTime: 1000
    }
  },

  props: {
    numberCount: Number
  },

  methods: {
    startCounting () {
      requestAnimationFrame(this.animateCounter)
    },

    animateCounter (timestamp) {
      if (this.startTime === null) {
        this.startTime = timestamp
      }

      const timeElapsed = timestamp - this.startTime

      if (timeElapsed < this.animateTime) {
        const rate = timeElapsed / this.animateTime
        this.numberShow = Math.round(rate * this.numberCount)

        requestAnimationFrame(this.animateCounter)
      } else {
        this.numberShow = this.numberCount
      }
    }
  },

  mounted () {
    EventBus.$on('start-counting', () => {
      this.startCounting()
    })
  },

  filters: {
    formatNumber (value) {
      return value.toLocaleString('en-US')
    }
  }
}
</script>
