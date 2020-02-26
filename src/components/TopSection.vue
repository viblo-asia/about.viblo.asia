<template>
  <section id="top-section" class="py-12 lg:py-24">
    <div class="max-w-sm lg:max-w-screen-xl mx-auto">
      <div class="top-item" v-for="(item, index) in topItems" :key="index">
        <div class="item-container">
          <div class="hexagon">
            <div class="hexagon-content" v-html="item.title"></div>
          </div>
          <div class="belongs-container">
            <div class="connector"></div>
            <div class="belongs" v-html="item.belongs"></div>
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
      topItems: [
        {
          title: 'Người dùng có <span class="font-bold">reputation</span> cao nhất',
          belongs: 'Tran Duc Thang'
        },
        {
          title: 'Người dùng có nhiều <span class="font-bold">bài viết</span> nhất',
          belongs: 'Mona Media'
        },
        {
          title: 'Bài viết được <span class="font-bold">vote up</span> nhiều nhất',
          belongs: 'Docker: Chưa biết gì đến biết dùng (Phần 1- Lịch sử)'
        },
        {
          title: 'Bài viết <span class="font-bold">được xem</span> nhiều nhất',
          belongs: 'Những Plugin sublime text cần thiết cho web Developers'
        },
        {
          title: 'Bài viết <span class="font-bold">được clip</span> nhiều nhất',
          belongs: '19 Bí Kíp Bạn Có Thể Dùng Khi Phạm Sai Lầm Với Git'
        },
        {
          title: '<span class="font-bold">Tag</span> được nhiều người dùng <span class="font-bold">follow</span> nhất',
          belongs: 'Javascript'
        },
        {
          title: '<span class="font-bold">Tag</span> có nhiều bài viết nhất',
          belongs: 'Android'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-item {
    @apply flex flex-1 w-full justify-start my-0 px-2;

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
      @apply justify-center;

      .item-container {
        @apply relative mr-20;
      }

      .hexagon {
        @apply relative;
        width: 170px;
        height: 170px;

        .hexagon-content {
          @apply text-sm tracking-wider px-6;
        }
      }

      .belongs-container {
        @apply absolute;
        top: 50%;
        left: 50%;
        transform: translate(0%, -50%);

        .connector {
          @apply w-32;
        }

        .belongs {
          @apply text-sm w-64;
        }
      }

      &:nth-child(odd) {
        @apply justify-center;

        .belongs-container {
          @apply flex-row-reverse;
          left: auto;
          right: 50%;
          transform: translate(0%, -50%);
        }

        .item-container {
          @apply mr-0 ml-20;
        }
      }
    }
  }

  @screen lg {
    .top-item {
      .belongs-container {
        .connector {
          @apply w-64;
        }
      }
    }
  }
</style>
