<template>
  <div class="login-cont">
    <h2>Sign Up to Care Connect</h2>
    <p>Create a new account</p>
    <div class="login-socmed">
      <a class="google-btn" href="#" @click.prevent="loginWithGoogle"
        >Sign up with Google <img src="/images/icons/google-icon.svg"
      /></a>
      <a class="google-btn" href="#" @click.prevent="loginWithFacebook"
        >Sign up with Facebook <img src="/images/icons/facebook-icon.svg"
      /></a>
    </div>
    <div class="divider">
      <p>or</p>
    </div>
    <ValidationObserver v-slot="{ handleSubmit, reset }">
      <form
        @submit.prevent="handleSubmit(handleRegistration)"
        @reset.prevent="reset"
      >
        <div class="login-form register-form">
          <div class="name-form">
            <ValidationProvider
              v-slot="{ errors }"
              name="first name"
              slim
              rules="required|min:2"
            >
              <div class="input-cont">
                <label><span>*</span> First name</label>
                <div :class="['for-cont', errors[0] ? 'error-msg' : '']">
                  <input
                    class="text-box"
                    type="text"
                    v-model="user.first_name"
                    placeholder="Type first name"
                  />
                  <span>{{ errors[0] }}</span>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="last name"
              slim
              rules="min:2"
            >
              <div class="input-cont">
                <label>Last name</label>
                <div :class="['for-cont', errors[0] ? 'error-msg' : '']">
                  <input
                    class="text-box"
                    type="text"
                    v-model="user.last_name"
                    placeholder="Type last name"
                  />
                  <span>{{ errors[0] }}</span>
                </div>
              </div>
            </ValidationProvider>
          </div>
          <ValidationProvider
            v-slot="{ errors }"
            name="phone number"
            slim
            rules="min:2"
          >
            <div class="input-cont">
              <label>Phone number</label>
              <div :class="['for-cont', errors[0] ? 'error-msg' : '']">
                <input
                  class="text-box"
                  type="text"
                  v-model="user.phone_number"
                  placeholder="Type phone number here"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            name="Email"
            rules="required|email"
          >
            <div class="input-cont">
              <label><span>*</span> Email Address</label>
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
              <label><span>*</span> Password</label>
              <div class="for-input">
                <input
                  class="text-box"
                  v-model="user.password"
                  type="password"
                  placeholder="Password"
                />
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
              <label><span>*</span> Confirm Password</label>
              <div class="for-input">
                <input
                  class="text-box"
                  v-model="user.password_confirmation"
                  type="password"
                  placeholder="Confirm Password"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <button :class="['login-btn', isRequesting ? 'uc-spinner' : '']">
            Sign up
          </button>
          <p class="no-account pb-50">
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
</template>
<script>
import SocialAuth from '@/mixins/socialAuth.vue'
export default {
  mixins: [SocialAuth],
  auth: 'guest',
  layout: 'TwoColumnLayout',
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
        password_confirmation: '',
        phone_number: '',
        first_name: '',
        last_name: '',
      },
      isRequesting: false,
    }
  },
  methods: {
    async handleRegistration() {
      try {
        if (this.isRequesting) return
        this.isRequesting = true
        await this.$axios.post('register', this.user)

        localStorage.setItem('email', this.user.email)

        this.isRequesting = false
        this.goTo('index')
      } catch (e) {
        this.isRequesting = false
        this.showError('Something went wrong processing your request!')
      }
    },
  },
}
</script>
