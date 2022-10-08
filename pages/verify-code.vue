<template>
  <div class="login-mobile-wrapper">
    <div class="login-cont">
    <div class="auth-back csr" @click="goTo('index')">
        <span>
            <i class="icon-arrow-left"></i>
            Back
        </span>
    </div>
      <h2>Verification</h2>
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
                <label>Please enter the verification code we sent to this email <span>{{setEmail}}</span></label>
                <div :class="['for-cont', errors[0] ? 'error-msg' : '']">
                  <input
                    class="text-box"
                    type="test"
                    placeholder="Verification code"
                  />
                  <span>{{ errors[0] }}</span>
                </div>
              </div>
            </ValidationProvider>
            <button class="login-btn">
                verify
            </button>
            <button class="login-btn cancel">
              Cancel
            </button>
          </div>
        </form>
      </ValidationObserver>
      <div class="login-copyright">
        <p>Copyright © 2022 Care Connect - All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    }
  },
  mounted() {
    if (!localStorage.getItem('email')) {
      // this.goTo('index')
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

        console.log(res, 'res')

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
        } else {
          this.showError('Something went wrong processing your request!')
        }
        this.isRequesting = false
      }
    },
  },
  computed: {
    setEmail() {
      return localStorage.getItem('email')
    }
  }
}
</script>
