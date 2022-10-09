<template>
  <div class="login-mobile-wrapper">
    <div class="login-cont">
      <div class="auth-back" @click="goTo('index')">
        <span>
          <i class="icon-arrow-left"></i>
          Back
        </span>
      </div>
      <h2>Create new password</h2>
      <p>
        Your new password must be different from your previous used passwords.
      </p>
      <ValidationObserver v-slot="{ handleSubmit, reset }">
        <form
          @submit.prevent="handleSubmit(handleResetPassword)"
          @reset.prevent="reset"
        >
          <div class="login-form">
            <ValidationProvider
              v-slot="{ errors }"
              name="Password"
              rules="required"
            >
              <div class="input-cont">
                <label>Password</label>
                <div :class="['for-cont', errors[0] ? 'error-msgg' : '']">
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
              rules="required"
            >
              <div class="input-cont">
                <label>Confirm Password</label>
                <div :class="['for-cont', errors[0] ? 'error-msgg' : '']">
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
            <button :class="['login-btn', isRequesting ? 'uc-spinner' : '']">reset password</button>
            <button class="login-btn cancel" @click.prevent="goTo('index')">Cancel</button>
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
        password_confirmation: '',
        password: '',
        token:'',
        email:''
      },
      isRequesting: false,
    }
  },
  async created() {
    const token = this.$route.query.code
    const email = this.$route.query.email
    // if (!token || !email) this.goTo('index')
    
    this.user.email = email
    this.user.token = token

    // let isCodeValid = await this.isCodeValid(token)
    // if (!isCodeValid) this.goTo('index')
  },  
  methods: {
    async isCodeValid(code) {
      try {
        const {data} = await this.$axios.post('code/status', {code: code}) 
        return true
      } catch(e) {
        return false
      }
    },
    async handleResetPassword() {
      try {
        if (this.isRequesting) return
        this.isRequesting = true

        const {data} = await this.$axios.post('password/reset', this.user)

        this.showSuccess('Succesfully updated password!')

        setTimeout(() => {
          this.isRequesting = false
          this.goTo('login')
        }, 5000)
      } catch (e) {
        this.showError(e.response.data.message)
        this.isRequesting = false
      }
    },
  },
}
</script>
