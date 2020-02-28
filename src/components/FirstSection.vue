<template>
  <section id="first-section"
    class="py-32 md:py-0 md:h-screen flex items-center justify-center relative">
    <div id="brand" class="flex flex-col items-center p-10 max-w-md md:max-w-lg z-10 relative">
      <div class="flex w-full mb-4 flex-col md:relative items-end">
        <img src="../assets/logo.svg" alt="Viblo Logo" id="logo">
        <span class="text-white uppercase text-xs font-bold tracking-wider md:absolute md:top-0 md:left-full">platform</span>
      </div>
      <div class="text-blue-300 text-center text-lg md:text-2xl md:whitespace-no-wrap"><h1><strong>Ultimate Platform</strong> for Learning and Sharing <strong>IT Knowledge</strong></h1></div>
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
  }

  @responsive {
    .left-full {
      left: 100%;
    }
  }
</style>
