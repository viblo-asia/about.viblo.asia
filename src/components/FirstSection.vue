<template>
  <section id="first-section"
    class="relative py-32 md:py-0 md:h-screen">
    <div id="brand" class="flex flex-col items-center p-10 max-w-md mx-auto md:max-w-lg md:absolute z-10">
      <img src="../assets/logo.svg" alt="Viblo Logo" id="logo" class="mb-3">
      <div class="text-blue-300 text-center select-auto text-lg md:text-2xl md:whitespace-no-wrap"><strong>Free</strong> service for technical knowledge <strong>sharing</strong></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  #first-section {
    background: radial-gradient(#003dbd, #01001e);

    &:after {
      content: "";
      background: url(../assets/v-pattern.png) left bottom no-repeat;
      mix-blend-mode: screen;
      opacity: 0.3;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
    }

    @screen md {
      #brand {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
