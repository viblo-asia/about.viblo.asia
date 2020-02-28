<template>
  <section id="section-milstone" class="text-center py-16 md:py-32 md:px-16">
    <div class="max-w-full md:max-w-screen-xl m-auto">
      <div class="`section-head text-center">
        <h3 class="uppercase text-4xl">Viblo <span class="font-black">milestone</span></h3>
      </div>
      <div class="section-content px-8 md:px-8 flex flex-wrap justify-between">
        <div class="content-item w-full md:w-1/2 inline-block relative" v-for="data in dataEvents" :key="data.date">
          <VueAos animation-class="spaceInDown magictime" :threshold="1">
            <div>
              <div class="item-title text-white text-4xl inline-block relative mb-6">{{ data.date }}</div>
              <div class="item-description">{{ data.mess }}</div>
            </div>
          </VueAos>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueAos from 'vue-aos'

export default {
  data () {
    return {
      dataEvents: [
        {
          date: '10.2014',
          mess: 'Dự án Viblo (Vietnam IT Blog) được khởi động với mục đích tạo ra một cộng đồng nơi thành viên có thể chia sẻ, học hỏi kiến thức Công nghệ thông tin bằng tiếng mẹ đẻ.'
        },
        {
          date: '03.11.2014',
          mess: 'Commit đầu tiên của dự án Viblo được thực hiện với nội dung "First commit: Add Laravel 4.2"'
        },
        {
          date: '03.04.2015',
          mess: 'Viblo chính thức được ra mắt.'
        },
        {
          date: '10.2016',
          mess: 'Viblo được tái tạo, sử dụng công nghệ, ngôn ngữ thiết kế mới hơn, hiện đại hơn, phục vụ tốt hơn cho quá trình mở rộng.'
        },
        {
          date: '29.12.2016',
          mess: 'Viblo Version 2 được ra mắt, thay thế hoàn toàn phiên bản cũ với logo, design được làm mới, và rất nhiều tính năng bổ sung.'
        },
        {
          date: '24.03.2017',
          mess: 'Ra mắt Chrome Extension, giúp người dùng dễ dàng tiếp cận nội dung, thông báo mới từ phía Viblo.'
        },
        {
          date: '15.05.2017',
          mess: 'Ra mắt Atom Editor, giúp người dùng dễ dàng tạo, chỉnh sửa, lưu trữ và publish bài viết trên Viblo thông qua Atom Editor.'
        },
        {
          date: '10.07.2017',
          mess: 'Ra mắt tính năng Video Podcad, nhằm thúc đẩy việc chia sẻ kiến thức đa dạng, giúp người dùng học tập dễ dàng hơn.'
        },
        {
          date: '08.08.2017',
          mess: 'Ra mắt tính năng Question & Answer, giúp người dùng đặt câu hỏi để nhận được trợ giúp từ thành viên khác.'
        },
        {
          date: '26.11.2017',
          mess: 'Viblo Deployment Day, sự kiện công nghệ đầu tiên của Viblo, do Viblo và vì cộng đồng người dùng Viblo.'
        },
        {
          date: '23.04.2018',
          mess: 'Ra mắt ứng dụng Smartphone trên 2 nền tảng Android & iOS, giúp người dùng có thể dễ dàng tiếp cận với nguồn kiến thức phong phú được chia sẻ trên Viblo hàng ngày.'
        },
        {
          date: '24.05.2018',
          mess: 'Thông báo về việc đồng hành cùng ngày hội công nghệ "Vietnam Mobile Day 2018" với tư cách đơn vị bảo trợ truyền thông của sự kiện. Các bài thuyết trình tại sự kiện được ghi hình và công bố trên Viblo sau đó.'
        },
        {
          date: '28.05.2018',
          mess: 'Open source nhiều services được sử dụng bởi Viblo tại địa chỉ https://github.com/viblo-asia'
        },
        {
          date: '31.05.2018',
          mess: 'Đạt cột mốc 1 triệu Pageview/tháng, đánh dấu sự phát triển lớn mạnh của Viblo.'
        },
        {
          date: '26.06.2018',
          mess: 'Thông báo về việc trở thành đơn vị bảo trợ truyền thông của sự kiện OpenDev. Các bài thuyết trình tại sự kiện được ghi hình và công bố trên Viblo sau đó.'
        },
        {
          date: '24.09.2018',
          mess: 'Ra mắt chuyên trang giới thiệu về các dịch vụ sử dụng Machine Learning của Viblo, tại địa chỉ https://machine-learning.viblo.asia, đồng thời thông báo về định hướng ứng dụng Machine Learning trong việc cải thiện trải nghiệm người dùng tại Viblo trong thời gian tới.'
        },
        {
          date: '25.09.2018',
          mess: 'Thông báo về việc trở thành đơn vị bảo trợ truyền thông của sự kiện Blockchain lớn bậc nhất tại Vietnam, tiêu điểm Hackathon & Meetup "State of Chain 2018"...'
        },
        {
          date: '2019',
          mess: 'Và còn nhiều, rất nhiều điều tuyệt vời khác đang chờ đón Viblo và các bạn trong năm 2019 sắp tới!'
        }
      ]
    }
  },

  components: {
    VueAos
  }
}
</script>

<style lang="scss">
@import '../scss/_variable.scss';
$border_color: rgba(36, 61, 255, 1);
$border_width: 3px;

  #section-milstone {
    .section-content {
      .content-item {
        .item-title:before {
          content: "";
          display: block;
          width: 40px;
          height: 40px;
          background: #FFF;
          border: 6px solid $border_color;
          border-radius: 1000px;
          position: absolute;
          bottom: 0;
          z-index: 1;
        }
        .item-title:after {
          content: "";
          display: block;
          width: calc(100% + 50px);
          height: $border_width;
          background-color: #243DFF;
        }
        .item-description {
          color: $text_primary;
        }
      }
      .content-item:nth-child(2n+1) {
        text-align: right;
        padding-right: 50px;
        margin-bottom: 100px;
        border-right: 6px solid $border_color;
        right: -$border_width;
        .item-title:before {
          right: -50px;
          transform: translate(calc(50% + 3px), 50%);
        }
      }
      .content-item:nth-child(2n) {
        text-align: left;
        padding-left: 50px;
        margin-top: 100px;
        border-left: 6px solid $border_color;
        left: -$border_width;
        .item-title:before {
          left: -50px;
          transform: translate(calc(-50% - 3px), 50%);
        }
        .item-title:after {
          margin-left: -50px;
        }
      }
      @media (max-width: 767px) {
        .content-item {
          padding: 15px 0 15px 30px;
          .item-title:after {width: calc(100% + 30px)}
        }
        .content-item:nth-child(2n+1) {
          margin: 0;
          padding-right: 0;
          border-right: none;
          border-left: 6px solid $border_color;
          right: auto;
          left: 0;
          text-align: left;
          .item-title:before {
            left: -30px;
            transform: translate(calc(-50% - 3px), 50%);
          }
          .item-title:after {
            margin-left: -30px;
          }
        }
        .content-item:nth-child(2n) {
          margin: 0;
          padding-left: 30px;
          left: 0;
          .item-title:before {
            left: -30px
          }
          .item-title:after {
            margin-left: -30px;
          }
        }
      }
    }
  }
</style>
