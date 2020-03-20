<template>
  <section
    id="section-about"
    class="scrollspy text-center py-16 md:py-32 flex min-h-screen items-center flex-col md:flex-row relative"
  >
    <div class="about-image md:order-last w-full md:w-1/2 md:z-20 relative">
      <VueAos animation-class="zoomInRight animated" :threshold="0.5">
        <div class="max-w-3xl">
          <img src="../assets/viblo app.png" alt="section about" class="m-auto max-w-full" />
        </div>
      </VueAos>
    </div>
    <div
      class="about-content pt-16 md:order-first w-full md:w-1/2 text-center absolute md:relative z-10"
    >
      <div class="px-8 md:py-8 md:transform max-w-xl m-auto">
        <VueAos animation-class="fadeInLeft animated" :threshold="1">
          <h1 class="uppercase text-white text-5xl font-black">Viblo Platform</h1>
        </VueAos>
        <VueAos animation-class="fadeInLeft animated" :threshold="1">
          <div class="about-text text-justify">
            <p class="my-3">
              <strong>Viblo Platform</strong> là cộng đồng chia sẻ kiến thức
              và học tập về  công nghệ thông tin đang ngày một phát triển
              với hơn 40 nghìn thành viên đang hoạt động; Được quản lý và phát triển
              bởi Viblo Team (thuộc Công ty cổ phần Sun Asterisk).
            </p>

            <p class="my-3">
              Với nền móng là dịch vụ
              <a href="https://viblo.asia" class="underline" target="_blank" rel="noopener"><strong>Viblo</strong></a>
              được ra mắt ngày 03.04.2015, bạn có thể viết và chia sẻ nội dung liên quan đến các vấn đề kỹ thuật như:
              <strong>Development</strong> (chủ đề lập trình, infrastructure...),
              <strong>Design</strong> (thiết kế trong quá trình sản xuất phần mềm),
              <strong>QA</strong> (test, đảm bảo chất lượng dự án...),
              <strong>Management</strong> (quản lý dự án).
            </p>

            <p class="my-3">
              Từ năm 2019, Viblo mở rộng thêm những dịch vụ mới để trở thành
              Viblo Platform bao gồm:
              <a href="https://code.viblo.asia" class="underline" target="_blank" rel="noopener"><strong>Viblo Code</strong></a>
              (dịch vụ về luyện tập kỹ năng coding, giải thuật),
              <a href="https://ctf.viblo.asia" class="underline" target="_blank" rel="noopener"><strong>Viblo CTF</strong></a>
              (dịch vụ về luyện tập kỹ năng coding, an toàn thông tin) và
              <a href="https://cv.viblo.asia" class="underline" target="_blank" rel="noopener"><strong>Viblo CV</strong></a>
              (dịch vụ tạo các mẫu CV chuyên nghiệp dành cho lập trình viên)
              với mong muốn vươn mình trở thành một nền tảng mở, đóng góp cho sự phát triển
              của cộng đồng IT Việt Nam.
            </p>
          </div>
        </VueAos>
      </div>
    </div>
  </section>
</template>

<script>
import VueAos from 'vue-aos'

export default {
  components: {
    VueAos
  }
}
</script>
<style lang="scss">
@import '~animate.css/source/zooming_entrances/zoomInRight.css';
@import '~animate.css/source/fading_entrances/fadeInLeft.css';
@import "../scss/_variable.scss";

#section-about {
  background: url("../assets/Asset 17.png") no-repeat left center transparent;
  background-size: 100%;
  .about-content {
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 767px) {
    .about-image:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(2, 0, 46, 0.9);
    }
  }
  @media (min-width: 768px) {
    .about-content {
      top: auto;
      transform: none;
      background: none;
      > div {
        --transform-rotate: -10deg;
        background: $bg_color;
      }
    }
  }
}
</style>
