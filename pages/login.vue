<template>
  <div class="login-mobile-wrapper">
    <div class="login-cont">
      <div class="auth-back csr" @click="goTo('index')">
        <span>
          <i class="icon-arrow-left"></i>
          Back
        </span>
      </div>
      <h2>Welcome to Care Connect</h2>
      <p>Care That Comes to You</p>

      <div class="login-socmed">
        <a class="google-btn op-onhover" href="#" @click.prevent="loginWithGoogle"
          >Login with Google <img src="/images/icons/google-icon.svg"
        /></a>
        <a class="facebook-btn op-onhover" href="#" @click.prevent="loginWithFacebook"
          >Login with Facebook <img src="/images/icons/facebook-icon.svg"
        /></a>
      </div>

      <div class="divider">
        <p>or</p>
      </div>
      <ValidationObserver v-slot="{ handleSubmit, reset }">
        <form
          @submit.prevent="handleSubmit(handleLogin)"
          @reset.prevent="reset"
        >
          <div class="login-form">
            <ValidationProvider
              v-slot="{ errors }"
              name="Email"
              rules="required|email"
            >
              <div :class="['input-cont', errors[0] ? 'error-msg' : '']">
                <label>Email Address</label>
                <div :class="['for-cont', errors[0] ? 'error-msg' : '']">
                  <input
                    class="text-box"
                    v-model="user.email"
                    type="email"
                    placeholder="@mail.com"
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
                <div :class="['for-cont', errors[0] ? 'error-msgg' : '']">
                  <input
                    class="text-box"
                    v-model="user.password"
                    :type="showPassword ? 'password' : 'text'"
                    placeholder="Password"
                  />
                  <p
                    @click="toggleShow">
                    {{showPassword ? 'Show' : 'Hide'}}
                  </p>
                </div>
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <div class="forgot-pass">
              <div>
                <label class="checkbox-container">Remember me
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="csr" @click="goTo('forgot-password')">
                <p>Forgot Password ?</p>
              </div>
            </div>
            <button :class="['login-btn', isRequesting ? 'uc-spinner' : '']">
              login
            </button>
            <p class="no-account pb-50">
              Don???t have an account?
              <a href="#" @click.prevent="goTo('register')">Signup</a>
            </p>
          </div>
        </form>
      </ValidationObserver>
      <div class="login-copyright">
        <p>Copyright ?? 2022 Care Connect - All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>
<script>
import SocialAuth from '@/mixins/socialAuth.vue'
export default {
  mixins: [SocialAuth],
  layout: 'TwoColumnLayout',
  auth: 'guest',
  head: {
    bodyAttrs: {
      id: 'login-page',
    },
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isRequesting: false,
      showPassword: true,
    }
  },
  methods: {
    async handleLogin() {
      try {
        if (this.isRequesting) return
        this.isRequesting = true

        const res = await this.$auth.loginWith('local', {
          data: {
            email: this.user.email,
            password: this.user.password,
          },
        })

        if (res.data) {
          this.showSuccess('Succesfully logged in !')
        }

        setTimeout(() => {
          this.isRequesting = false
          this.goTo('index')
        }, 5000)
      } catch (e) {
        if (e.response.status === 404) {
          this.showError('Invalid credentials, please try again!')
        } if (e.response.status === 401) {
          this.showError('This user is not yet verified, verify it now!')
        } else {
          this.showError('Something went wrong while processing your request!')
        }
        this.isRequesting = false
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword
    },
  },
}
</script>

<style lang="scss" scoped>
.login-cont {
  padding: 30px 0 70px 0 !important;
}
</style>