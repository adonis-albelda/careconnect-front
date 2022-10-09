<template>
  <div class="login-mobile-wrapper">
    <div class="login-cont">
        <img src="/images/check_your_email.png" alt="">
        <h2>
          Check your mail!</h2>
        <p class="normal-text-authen">
          We have sent a password recover instructions to your email.
        </p>
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

<style lang="scss" scoped>
.login-cont {
  img {
    width: 110px;
    margin: 0 auto;
    @media (max-width: 450px) {
        width: 70px;
    }
  }
  h2 {
    text-align: center;
    @media (max-width: 1300px) {
      margin: 10px 0;
    }
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  p {
    text-align: center;
  }
}
</style>