<template>
  <section id="intro-section" class="flex items-center justify-center bg-white">
    <div id="intro-text" class="max-w-lg md:text-lg text-md text-blue-600 lg:pt-32 pt-16 lg:pb-32 pb-16 pl-5 pr-5">
      <p><strong>Viblo</strong> (https://viblo.asia) là cộng đồng chia sẻ kiến thức về Công nghệ thông tin.</p>

      <p>Bạn có thể viết và chia sẻ nội dung liên quan đến các vấn đề
        kỹ thuật như: <strong>Development</strong> (chủ đề lập trình, infrastructure...),
        <strong>Design</strong> (thiết kế trong quá trình sản xuất phần mềm), <strong>QA</strong> (test,
        đảm bảo chất lượng dự án...), <strong>Management</strong> (quản lý dự án).</p>

      <p>Hiện tại Viblo hỗ trợ viết bài bằng ngôn ngữ Tiếng Việt, Tiếng
        Anh và Tiếng Nhật.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  #intro-section {
    #intro-text {
      & > * + *,  & li + li, & li > p + p {
        @apply mt-6;
      }
    }
  }
</style>
