<template>
  <section id="section-code" class="text-center py-16 md:py-32 bg-cover bg-top bg-no-repeat">
    <div class="md:max-w-screen-xl m-auto text-white flex flex-col md:flex-row">
      <div class="code-images md:order-last md:w-2/5">
        <img src="../assets/code-image.png" alt="code image" />
      </div>
      <div class="code-content text-left md:order-first md:w-3/5 p-4 md:p-0 md:pr-20">
        <div class="logo block mb-8">
          <a href="javascript:void(0)" class="">
            <img src="../assets/code-logo.png" alt="code logo" />
          </a>
        </div>
        <div class="title mb-4 text-2xl md:text-4xl font-bold">
          <h3 class="uppercase">LEARNING TO CODE? PREPARING FOR AN INTERVIEW?</h3>
        </div>
        <div class="content text-lg md:text-2xl">
          <p class="mb-4">Or just want to have fun with challenging problems?</p>
          <div class="link">
            <a href="javascript:void(0)"
              class="button rounded-full py-2 px-16 inline-block">Go to Viblo Code</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#section-code {
  background-image: url('../assets/code-bg.svg');
  background-color: #3B39C0;
  .code-content {
    .logo {
      transition: all .2s ease-in-out;
      display: block;
      margin-bottom: 2rem;
    }
    .link .button {
      background-color: #3ec08d;
    }
  }
}
</style>
