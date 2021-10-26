<template>
  <section id="top-section" class="scrollspy py-16 md:py-32">
    <TitleSection section_title="Sảnh danh vọng" />

    <div class="max-w-sm lg:max-w-screen-xl mx-auto lg:grid lg:grid-cols-2 mt-24">
      <div class="top-item" v-for="(item, index) in topItems" :key="index">
        <VueAos animation-class="zoomInUp animated">
          <div class="item-container">
            <a :href="item.url" target="_blank" rel="noopener">
              <div class="hexagon">
                <div class="hexagon-content" v-html="item.title" />
              </div>
            </a>
            <div class="belongs-container">
              <div class="connector" />
              <a
                :href="item.url"
                rel="noopener"
                class="belongs transition duration-150 ease-in-out hover:text-white"
                v-html="item.belongs"
              />
            </div>
          </div>
        </VueAos>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import VueAos from 'vue-aos'
import topItems from '@/data/top-items'
import TitleSection from './TitleSection'

axios.defaults.timeout = 5000

const getVibloStats = () => axios.get(`${process.env.VUE_APP_VIBLO_API_URL}/api/about`).then(r => r.data)
const getCodeStats = () => axios.get(`${process.env.VUE_APP_CODE_API_URL}/api/about`).then(r => r.data)
const getCTFStats = () => axios.get(`${process.env.VUE_APP_CTF_API_URL}/api/about`).then(r => r.data)

export default {

  data () {
    return {
      topItems
    }
  },

  components: {
    VueAos,
    TitleSection
  },

  async beforeMount () {
    const [viblo, code, ctf] = await Promise.all([
      getVibloStats().catch(() => topItems),
      getCodeStats().catch(() => topItems),
      getCTFStats().catch(() => topItems)
    ])
    this.viblo = viblo
    this.code = code
    this.ctf = ctf
    this.topItems = [
      {
        title: 'Người dùng có <strong>reputation</strong> cao nhất',
        belongs: `${this.viblo.reputationMax.name} <small>@${this.viblo.reputationMax.username}<small/>`,
        url: `https://viblo.asia/u/${this.viblo.reputationMax.username}`
      },
      {
        title: 'Người dùng <strong>cao điểm nhất<strong> Viblo Code',
        belongs: `${this.code.userHaveMostScore.name} <small>@${this.code.userHaveMostScore.username}<small/>`,
        url: `https://code.viblo.asia/users/${this.code.userHaveMostScore.username}`
      },
      {
        title: 'Hacker <strong>"bá đạo"</strong> nhất Viblo CTF',
        belongs: `${this.ctf.userHasMostPoint.name} <small>@${this.ctf.userHasMostPoint.username}<small/>`,
        url: `https://ctf.viblo.asia/users/${this.ctf.userHasMostPoint.username}`
      },
      {
        title: 'Organization có nhiều <strong>bài viết</strong> nhất',
        belongs: this.viblo.organizationPostCountMax.name,
        url: `https://viblo.asia/o/${this.viblo.organizationPostCountMax.slug}`
      },
      {
        title: 'Người dùng có nhiều <strong>bài viết</strong> nhất',
        belongs: `${this.viblo.userPostCountMax.name} <small>@${this.viblo.userPostCountMax.username}</small>`,
        url: `https://viblo.asia/u/${this.viblo.userPostCountMax.username}`
      },
      {
        title: 'Bài viết được <strong>vote up</strong> nhiều nhất',
        belongs: this.viblo.postVotesCountMax.title,
        url: `https://viblo.asia/p/${this.viblo.postVotesCountMax.slug}`
      },
      {
        title: 'Bài viết <strong>được xem</strong> nhiều nhất',
        belongs: this.viblo.postViewsCountMax.title,
        url: `https://viblo.asia/p/${this.viblo.postViewsCountMax.slug}`
      },
      {
        title: 'Bài viết <strong>được clip</strong> nhiều nhất',
        belongs: this.viblo.postClipsCountMax.title,
        url: `https://viblo.asia/p/${this.viblo.postClipsCountMax.slug}`
      },
      {
        title: '<strong>Tag</strong> được nhiều người dùng <strong>follow</strong> nhất',
        belongs: this.viblo.tagFollowCountMax.name,
        url: `https://viblo.asia/tags/${this.viblo.tagFollowCountMax.slug}`
      },
      {
        title: '<strong>Tag</strong> có nhiều bài viết nhất',
        belongs: this.viblo.tagPostsCountMax.name,
        url: `https://viblo.asia/tags/${this.viblo.tagPostsCountMax.slug}`
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
  @import '~animate.css/source/zooming_entrances/zoomInUp.css';

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
        @apply uppercase text-xs flex-shrink;
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
        @apply mr-4 ml-0 justify-end;

        .item-container {
          @apply flex-row-reverse;

          .belongs-container {
            @apply flex-row-reverse;

            .connector {
              @apply ml-2 mr-0;
            }

            .belongs {
              @apply text-right;
            }
          }
        }
      }
    }
  }
</style>
