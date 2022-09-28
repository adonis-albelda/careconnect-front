<template>
  <div class="login-wrapper">
    <div class="login-col-1">
      <img
        class="login-logo"
        @click="goTo('index')"
        src="/images/login-logo.png"
      />
      <div class="login-title">
        <h1>Care That Comes to You</h1>
        <p>Let us provide you with high-quality care!</p>
      </div>
      <div class="login-socmed">
        <a href="#"><img src="/images/icons/facebook.svg" /> Care Connect</a>
        <a href="#"><img src="/images/icons/twitter.svg" /> @careconnectca</a>
        <a href="#"><img src="/images/icons/instagram.svg" /> Care Connect</a>
      </div>
    </div>

    <div class="login-col-2">
      <div class="login-menu">
        <a class="decoration-0" href="#">Help</a>
        <a href="#">Privacy</a>
        <a href="#">Terms & conditions</a>
      </div>

      <div class="login-cont">
        <h2>Sign Up to Care Connect</h2>
        <!-- <p>Create a new account</p> -->

        <!-- to do next update -->
        <!-- <div class="login-socmed">
                    <a class="google-btn" href="#">Sign up with Google <img src="/images/icons/google-icon.svg"></a>
                    <a class="google-btn" href="#">Sign up with Facebook <img src="/images/icons/facebook-icon.svg"></a>
                </div> -->
        <!-- <div class="divider">
                    <p>or</p>
                </div> -->
        <ValidationObserver v-slot="{ handleSubmit, reset }">
          <form
            @submit.prevent="handleSubmit(handleRegistration)"
            @reset.prevent="reset"
          >
            <div class="login-form">
              <ValidationProvider
                v-slot="{ errors }"
                name="Email"
                rules="required|email"
              >
                <div class="input-cont">
                  <label>Email Address</label>
                  <div :class="['for-cont', errors[0] ? 'error-msg' : '']">
                    <input
                      class="text-box"
                      type="email"
                      v-model="user.email"
                      placeholder="Type email here"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </div>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="Password"
                rules="required"
              >
                <div :class="['input-cont', errors[0] ? 'error-msg' : '']">
                  <label>Password</label>
                  <div class="for-input">
                    <input class="text-box" v-model="user.password" type="password" />
                    <span>{{ errors[0] }}</span>
                  </div>
                </div>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="Password Confirmation"
                rules="required|confirmed:Password"
              >
                <div :class="['input-cont', errors[0] ? 'error-msg' : '']">
                  <label>Confirm Password</label>
                  <div class="for-input">
                    <input class="text-box" v-model="user.confirmation_password" type="password" />
                    <span>{{ errors[0] }}</span>
                  </div>
                </div>
              </ValidationProvider>
              <button class="login-btn">Sign up</button>
              <p class="no-account">
                Already a member?
                <a href="#" @click.prevent="goTo('login')">Login</a>
              </p>
            </div>
          </form>
        </ValidationObserver>

        <div class="login-copyright">
          <p>Copyright © 2022 Care Connect - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      id: 'register-page',
    },
  },
  data() {
    return {
      user: {
        email: null,
        password: '',
        confirmation_password: '',
      },
    }
  },
  methods: {
    handleRegistration() {},
  },
}
</script>
