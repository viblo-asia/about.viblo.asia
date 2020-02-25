<template>
  <section id="section-ability" class="text-center py-16 md:px-16 max-w-full md:max-w-screen-xl m-auto">
    <div class="section-head text-center">
      <h3 class="uppercase text-4xl">Chức năng <span class="font-black">chủ đạo</span></h3>
    </div>
    <div class="section-content flex flex-wrap justify-between px-8 md:px-16 m-auto">
      <div v-for="data in dataFeatures" :key="data.name" class="content-item text-left mb-8 w-full" v-bind:class="data.customClass">
        <div class="flex flex-wrap">
          <div class="w-full" v-for="itemData in data.item" :key="itemData.title" v-bind:class="data.item.length > 1 ? 'pr-4 pl-4 md:w-1/2' : ''">
            <h4 class="content-title uppercase flex items-center text-white text-xl">
              <span class="content-icon p-1 mr-2 inline-block bg-white border-4 border-solid rounded-full" v-html="itemData.icon"></span> {{ itemData.title }}
            </h4>
            <div class="content-text my-3 text-justify" v-html="itemData.desc"></div>
          </div>
        </div>
        <div class="content-image flex flex-wrap justify-between items-start">
            <span class="overflow-hidden w-full" v-for="imgItem in data.images" :key="imgItem.image" v-bind:class="imgItem.class"><img :src="imgItem.image" :alt="data.title" class="w-full" /></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      dataFeatures: [
        {
          item: [
            {
              title: 'viết bài',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M15 3l-4-2v1L6 8l-2 3-1 1v6l1 1 5-2 1-1 2-3 5-7c0-1 0-2-2-3zM9 15l-2 1-1-1-2-1v-2l1-1 3 1 2 3H9z"/></svg>',
              desc: '<p>Để viết bài, bạn chỉ cần nhấp chuột vào nút "Creat Post" trên trang chủ Viblo hoặc biểu tượng cây bút đầu trang. Nhập tiêu đề, gắn tag, viết nội dung vào các mục tương ứng và đừng quên lựa chọn ngôn ngữ!</p>'
            }
          ],
          images: [
            {
              image: require('../assets/write post.svg'),
              class: []
            }
          ],
          customClass: [
            'w-full'
          ]
        },
        {
          item: [
            {
              title: 'Đặt câu hỏi & trả câu hỏi',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M14 2l-4-1-4 1-2 4h4V5l2-1h2v3l-1 1-2 2-1 3h3v-1l1-1 1-1 2-2 1-2-2-4zm-4 13l-2 2c0 1 0 2 2 2l2-2-2-2z"/></svg>',
              desc: '<p>Là một trong những tính năng chủ đạo của Viblo, đây là nơi bạn có thể đặt câu hỏi cũng như tham gia trả lời câu hỏi của người dùng khác.</p>'
            }
          ],
          images: [
            {
              image: require('../assets/quest n answer.svg'),
              class: []
            }
          ],
          customClass: [
            'w-full'
          ]
        },
        {
          item: [
            {
              title: 'Follow users',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M8 2L6 5l1 2H6l1 2 1 3-3 3c-2 1-4 2-4 4v1h18v-1c0-2-2-3-4-4l-3-3 1-3 1-2h-1l1-2c0-1-1-3-3-3l1-2C9 0 9 1 8 2z"/></svg>',
              desc: '<p>Theo dõi một người dùng cụ thể mà bạn yêu thích để cập nhật những bài viết mới nhất từ họ, đặc biệt là những thành viên nổi bật (Hot Authors).</p>'
            }
          ],
          images: [
            {
              image: require('../assets/follow.png'),
              class: ['md:w-1/4']
            },
            {
              image: require('../assets/follow 1.png'),
              class: ['md:w-2/3']
            }
          ],
          customClass: [
            'w-full'
          ]
        },
        {
          item: [
            {
              title: 'tags',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M19 6L5 19l1-5-5 1L14 1h2l3 3v2z"/></svg>',
              desc: '<p>Danh sách Popular tags được đặt bên phải dưới các trang, giúp bạn lựa chọn và theo dõi chủ đề mình quan tâm dễ dàng.</p>'
            }
          ],
          images: [
            {
              image: require('../assets/tag.svg'),
              class: []
            }
          ],
          customClass: [
            'md:w-1/3'
          ]
        },
        {
          item: [
            {
              title: 'techical videos',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M15 10v1l-9 5-1-1V5l1-1 9 5v1z"/></svg>',
              desc: '<p>Viblo Team có tiến hành ghi hình nhiều bài thuyết trình ở những sự kiện công nghệ nổi tiếng, sau khi được biên tập, các videos sẽ được chia sẻ trên Viblo.</p>'
            }
          ],
          images: [
            {
              image: require('../assets/video.svg'),
              class: []
            }
          ],
          customClass: [
            'md:w-3/5'
          ]
        },
        {
          item: [
            {
              title: 'rate contents',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M14 7s3-3 1-6l-5 5c-1 1-4 2-4 4v6c0 2 5 3 9 3l3-10-4-2zM5 7c-1 0-3 1-3 4v4c0 3 2 3 3 3l-1-2v-6l1-3z"/></svg>',
              desc: '<p>Chấm điểm cho bài viết, câu hỏi, câu trả lời, comment bằng cách nhấn vote up hoặc vote down ở phía trên bên trái của bài viết đó.</p>'
            },
            {
              title: 'clip pots',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M6 20l-4-2c-1-1-2-4 0-7L12 1l4-1 2 3-1 3-9 10-2 1-2-1 1-3 6-7h1v1l-6 7-1 1h2l9-10 1-2-2-1h-2L3 12v5c1 2 3 2 5 0L18 7h1v1L9 18l-3 2z"/></svg>',
              desc: '<p>Clip một bài viết để xem lại khi cần thiết, bằng cách nhấn vào ô "Clip this post" phía trên bên phải của bài viết.</p>'
            }
          ],
          images: [
            {
              image: require('../assets/rate.svg'),
              class: []
            }
          ],
          customClass: [
            'w-full'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#section-ability {
  .content-title {
    .content-icon {
      border-color: #1B13DB;
      svg {
        height: 1rem;
        path {fill: #000}
      }
    }
  }
  .content-image {
    span {
      // max-height: 160px;
      overflow: hidden;
      border: 10px solid rgba(255,255,255,.1);
    }
  }
}
</style>
