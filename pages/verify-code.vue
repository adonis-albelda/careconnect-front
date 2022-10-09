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
          @submit.prevent="handleSubmit(handleVerification)"
          @reset.prevent="reset"
        >
          <div class="login-form">
            <ValidationProvider
              v-slot="{ errors }"
              name="Verification code"
              rules="required"
            >
              <div :class="['input-cont', errors[0] ? 'error-msg' : '']">
                <label>Please enter the verification code we sent to this email <span>{{setEmail}}</span></label>
                <div :class="['for-cont', errors[0] ? 'error-msg' : '']">
                  <input
                    class="text-box"
                    type="test"
                    v-model="user.code"
                    placeholder="Verification code"
                  />
                  <span>{{ errors[0] }}</span>
                </div>
              </div>
            </ValidationProvider>
            <button :class="['login-btn', isRequesting ? 'uc-spinner' :'']">
                verify
            </button>
            <button class="login-btn cancel" @click.prevent="goTo('register')">
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
        code: '',
      },
      isRequesting: false,
    }
  },
  mounted() {
    if (!localStorage.getItem('email')) {
      this.goTo('index')
    } else {
      this.user.email = localStorage.getItem('email')
    }
  },
  methods: {
    async handleVerification() {
      try {
        if (this.isRequesting) return
        this.isRequesting = true
        
        let {data, status} = await this.$axios.post('verify', this.user);
        if (status !== 200) return

        setTimeout(() => {
          localStorage.removeItem('email')
          this.$auth.setUserToken(data)
          this.isRequesting = false
          this.goTo('index')
        }, 5000)
      } catch (e) {
        this.showError(e.response.data.message)
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

<style lang="scss" scoped>
.login-cont {
  form {
    padding-top: 10px;
      @media (max-width: 400px) {
        padding-top: 20px;
      }
  }
}
</style>