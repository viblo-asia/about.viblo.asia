<template>
  <Intersect @enter.once="startCounting">
  <span>
    {{ numberShow | formatNumber }}
  </span>
  </Intersect>
</template>

<script>
import Intersect from 'vue-intersect'

export default {
  data () {
    return {
      numberShow: 0,
      startTime: null,
      animateTime: 3000
    }
  },

  props: {
    numberCount: Number
  },

  components: {
    Intersect
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

  filters: {
    formatNumber (value) {
      return value.toLocaleString('en-US')
    }
  }
}
</script>
