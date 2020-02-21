<template>
    <footer class="relative">
      <div class="mx-auto max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-6 p-5 items-center py-12 md:py-32">
        <div class="col-span-2 md:col-auto md:row-span-2">
          <img class="m-auto w-16 md:w-auto" src="../assets/logo-footer.svg" alt="Viblo logo footer">
        </div>
        <div class="link-box">
          <div class="link-title">Website</div>
          <div><a href="https://viblo.asia" target="_blank" rel="noopener noreferrer">viblo.asia</a></div>
        </div>
        <div class="link-box">
          <div class="link-title">Facebook</div>
          <div><a href="https://facebook.com/viblo.asia" target="_blank" rel="noopener noreferrer">fb.com/viblo.asia</a></div>
        </div>
        <div class="link-box">
          <div class="link-title">Github</div>
          <div><a href="https://github.com/viblo-asia" target="_blank" rel="noopener noreferrer">github.com/viblo-asia</a></div>
        </div>
        <div class="link-box">
          <div class="link-title">Careers</div>
          <div><a href="https://viblo.asia/careers" target="_blank" rel="noopener noreferrer">viblo.asia/careers</a></div>
        </div>
        <div class="link-box col-span-2 md:col-auto">
          <div class="link-title">Machine Learning Services</div>
          <div><a href="http://machine-learning.viblo.asia" target="_blank" rel="noopener noreferrer">machine-learning.viblo.asia</a></div>
        </div>
      </div>
    </footer>
</template>

<style lang="scss" scoped>
  footer {
    &:before {
      content: "";
      background: url(../assets/v-pattern-footer.png) right bottom no-repeat;
      background-size: contain;
      mix-blend-mode: screen;
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
    }

    .link-box {
      @apply flex flex-col items-center col-span-2 z-10;

      @screen md {
        @apply items-start justify-center col-auto;
      }

      .link-title {
        @apply text-blue-200 font-bold;
      }
    }
  }
</style>
