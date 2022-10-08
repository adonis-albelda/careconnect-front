<template>
  <div class="login-mobile-wrapper">
    <div class="login-cont">
      <div class="auth-back csr" @click.prevent="goTo('login')">
        <span>
          <i class="icon-arrow-left"></i>
          Back
        </span>
      </div>
      <h2>Forgot password?</h2>
      <p>
        Enter the email associated with your account and we’ll send an email
        with instructions to reset your password.
      </p>
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
            <button class="login-btn">send instructions</button>
            <button
              class="login-btn btn cancel"
              @click.prevent="goTo('index')"
            >
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
}
</script>
