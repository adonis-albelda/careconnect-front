<template>
  <div class="login-wrapper">
    <notifications group="notify" position="bottom left" width="500" :duration="4000"/>
    <div class="login-col-1">
      <img
        class="login-logo csr"
        @click="goTo('index')"
        src="/images/login-logo.png"
      />
      <!-- <a class="back" href="#" @click.prevent="goTo('index')"><i class="icon-arrow-left"></i> back</a> -->
      <div class="login-title">
        <h1>Care That Comes to You</h1>
        <p>Let us provide you with high-quality care!</p>
      </div>
      <div class="login-socmed">
        <a href="#" class="op-onhover"><i class="icon-facebook"></i> Care Connect</a>
        <a href="#" class="op-onhover"><i class="icon-twitter"></i> @careconnectca</a>
        <a href="#" class="op-onhover"><i class="icon-instagram"></i> Care Connect</a>
      </div>
    </div>
    <div class="login-col-2">
      <div class="login-menu">
        <a class="decoration-0 op-onhover" href="#" @click.prevent="goTo('help-faq')">Help</a>
        <a class="op-onhover" href="#">Privacy</a>
        <a class="op-onhover" href="#">Terms & conditions</a>
      </div>
      <div class="login-header-logo" @click="goTo('index')">
        <img src="/images/login-logo.png" alt="" />
        <a class="back csr" href="#" @click.prevent="goTo('login')"
          ><i class="icon-arrow-left"></i> Back</a
        >
      </div>
      <Nuxt></Nuxt>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
  @import '../assets/scss/authentication.scss';
</style>