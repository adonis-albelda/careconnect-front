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
          @submit.prevent="handleSubmit(handleForgotPassword)"
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
            <button :class="['login-btn', isRequesting ? 'uc-spinner' : '']">send instructions</button>
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
      },
      isRequesting: false,
    }
  },
  methods: {
    async handleForgotPassword() {
      try {
        if (this.isRequesting) return
        this.isRequesting = true

        const {data, status} = await this.$axios.post('password/send-link', this.user)

        setTimeout(() => {
          this.user.email = ''
          this.isRequesting = false
          this.showSuccess(data.message)
        }, 3000);
      } catch (e) {
        this.showError(e.response.data.message)
        this.isRequesting = false
      }
    },
  },
}
</script>
