<template>
  <div class="main">
    <div class="content">BLEND</div>

    <section class="one">
      <div class="wrapper"></div>
    </section>

    <section class="two">
      <div class="wrapper"></div>
    </section>

    <section class="three">
      <div class="wrapper"></div>
    </section>

    <section class="four">
      <div class="wrapper"></div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    //   onscroll(){
    //     let scrolled = Math.abs(this.$refs.homepage.getBoundingClientRect().top);
    //     blurVal = scrolled / 150
    //       return $(".photo-blur").css("opacity", blurVal);
    //   }
  },
};
</script>

<style lang="less" scoped>
.content,
.wrapper:before {
    box-sizing: border-box;
    display: block;
    font-size: 4em;
    padding: 1em;
    width: 6em;
    height: 3em;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
}
.content {
    font-weight: bold;
    text-align: center;
    z-index: 1000;
    background: #fff;
    color: #000;
}
.wrapper {
    clip: rect(auto auto auto auto);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.wrapper:before {
    content: " ";
    padding: 2em 3.5em;
    mix-blend-mode: darken;
}
.one {
    background-image: url(https://unsplash.it/1920/1080?image=737);
}
.one .wrapper:before {
    background: red;
}
.two {
    background-image: url(https://unsplash.it/1920/1080?image=812);
}
.two .wrapper:before {
    background: #faaa54;
    mix-blend-mode: difference;
}
.three {
    background-image: url(https://unsplash.it/1920/1080?image=810);
}
.three .wrapper:before {
    background: #6c320a;
    mix-blend-mode: screen;
}
.four {
    background-image: url(https://unsplash.it/1920/1080?image=634);
}
.four .wrapper:before {
    background: #e4135d;
}
</style>
