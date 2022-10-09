<script>
export default {
  methods: {
    async loginWithFirebase() {
      if (this.loggingIn) return false
      this.loggingIn = true

      this.$fire.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      ).then((response) => {
        this.loggingIn = false
        localStorage.setItem("user_email", this.user.email);
        this.login(response.user.Aa)
      }).catch((error) => {
        this.$root.$notify(this.$t('login.user_not_found'), 500)
      }).finally(() => {
        this.loggingIn = false
      })

    },
    loginWithGoogle() {
      if (this.loggingIn) return false
      this.loginThroughSocialmedia('google')
    },
    loginWithApple() {
      if (this.loggingIn) return false
      this.loginThroughSocialmedia('apple')
    },
    loginWithFacebook() {
      if (this.loggingIn) return false
      this.loginThroughSocialmedia('facebook')
    },
    async loginThroughSocialmedia(loginType = 'google') {
      let provider = null

      if (loginType == 'google') {
        provider = new this.$fireModule.auth.GoogleAuthProvider();
      } else if (loginType == 'apple') {
        provider = new this.$fireModule.auth.OAuthProvider('apple.com')
      } else {
        provider = new this.$fireModule.auth.FacebookAuthProvider();
      }

      this.$fire.auth.signInWithPopup(provider).then((data) => {
        if (!data.user._delegate.emailVerified) {
          alert('Only verified email is allowed to use this site, please verify your email!')
          return
        }

        this.login(data.user._delegate.accessToken)
      }).catch((error) => {
         alert('Error while proccessing your request')
      })
    },
    async login(token) {
      try {
        if (this.isRequesting) return
        this.isRequesting = true

        const res = await this.$auth.loginWith('local', {
          data: {
            firebase_token:token,
            fromOauth:true
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
        } else {
          this.showError('Something went wrong processing your request!')
        }
        this.isRequesting = false
      }
    },
  },
}
</script>
