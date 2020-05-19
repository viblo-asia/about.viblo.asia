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
                v-if="counter.count || counter.count == 0"
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
import axios from 'axios'
import NumberCount from './NumberCount.vue'
import Intersect from 'vue-intersect'
import EventBus from '@/includes/event-bus'
import TitleSection from './TitleSection'

axios.defaults.timeout = 5000

export default {
  data () {
    return {
      fullWidth: false,
      viblo: {},
      ctf: {},
      code: {}
    }
  },

  components: {
    NumberCount,
    Intersect,
    TitleSection
  },

  mounted () {
    axios
      .get(`${process.env.VUE_APP_VIBLO_API_URL}/api/about`)
      .then(res => {
        this.viblo = res.data
      })
      .catch(() => {
        this.viblo = {
          activeUsers: 40438,
          newUsersPerMonth: 1315,
          publishedPosts: 25753,
          tags: 9069,
          interactivesOfUsers: 313805,
          postsAreInteractive: 22672,
          videos: 64,
          pageviewsPerMonth: 1800000,
          averageNewPostsInMonth: 939,
          questionsHasAnswer: 87.11,
          questions: 1153,
          series: 577,
          organizations: 48
        }
      })

    axios
      .get(`${process.env.VUE_APP_CODE_API_URL}/api/about`)
      .then(res => {
        this.code = res.data
      })
      .catch(() => {
        this.code = {
          usersPassToChallenge: 7.09
        }
      })

    axios
      .get(`${process.env.VUE_APP_CTF_API_URL}/api/about`)
      .then(res => {
        this.ctf = res.data
      })
      .catch(() => {
        this.ctf = {
          usersPassToChallenge: 20.93
        }
      })
  },

  computed: {
    data () {
      return [
        {
          name: 'Người dùng active',
          count: this.viblo.activeUsers
        },
        {
          name: 'Người dùng mới hàng tháng',
          count: this.viblo.newUsersPerMonth
        },
        {
          name: 'Bài viết được public',
          count: this.viblo.publishedPosts
        },
        {
          name: 'Tổng số tag',
          count: this.viblo.tags
        },
        {
          name: 'Lượt tương tác người dùng',
          count: this.viblo.interactivesOfUsers
        },
        {
          name: 'Bài viết được tương tác',
          count: this.viblo.postsAreInteractive
        },
        {
          name: 'Seminar videos',
          count: this.viblo.videos
        },
        {
          name: 'Pageview trung bình hàng tháng',
          count: this.viblo.pageviewsPerMonth
        },
        {
          name: 'Bài viết mới mỗi tháng',
          count: this.viblo.averageNewPostsInMonth
        },
        {
          name: 'Tổng số series được public',
          count: this.viblo.series
        },
        {
          name: 'Tổng số organization',
          count: this.viblo.organizations
        },
        {
          name: 'Tổng số câu hỏi',
          count: this.viblo.questions
        },
        {
          name: 'Số câu hỏi được trả lời',
          rate: this.viblo.questionsHasAnswer
        },
        {
          name: 'Người dùng vượt qua được challenge trên Viblo Code',
          rate: this.code.usersPassToChallenge
        },
        {
          name: 'Người dùng tìm được flag trên Viblo CTF',
          rate: this.ctf.usersPassToChallenge
        }
      ]
    },

    counters () {
      const counts = this.data
        .filter(counter => counter.count)
        .map(counter => counter.count)
      const maxCount = Math.max(...counts)
      const minCount = Math.min(...counts)
      const aveCount = (maxCount + minCount) / 2
      return this.data.map(counter => {
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
