<template>
  <div class="login-wrapper">
    <div class="login-col-1">
      <img
        class="login-logo"
        @click="goTo('index')"
        src="/images/login-logo.png"
      />
      <!-- <a class="back" href="#" @click.prevent="goTo('index')"><i class="icon-arrow-left"></i> back</a> -->
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
      <div class="login-header-logo" @click="goTo('index')">
        <img src="/images/login-logo.png" alt="" />
        <a class="back" href="#"><i class="icon-arrow-left"></i> Back</a>
      </div>

      <div class="login-mobile-wrapper">
        <div class="login-cont">
        <div class="auth-back">
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
                    <label>Please enter the verification code we sent to this email <span>robertoalbe@test.com</span></label>
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
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LandingLayout',
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
<style scoped lang="scss">
.login-header-logo {
  display: none;
  @media (max-width: 991px) {
    display: block;
    padding: 70px 50px;
    background-image: url(/images/login-img.png);
    background-position: center;
    background-size: cover;
    background-color: rgba(24, 56, 145, 0.9);
  }

  @media(max-width: 480px) {
    padding-left: 20px;
  }

  @media (max-width: 450px) {
    padding: 50px;
    padding-left: 20px;
  }

  img {
    @media (max-width: 600px) {
      width: 250px;
    }

    @media(max-width: 480px) {
      width: 200px;
    }

    @media (max-width: 450px) {
      width: 180px;
    }
    @media (max-width: 350px) {
      width: 150px;
    }
  }
}
.login-wrapper {
  height: 100vh;
  max-height: auto;
}
.login-form {
  // @media (max-height: 900px) {
  //   padding-bottom: 65px;
  // }

  .login-btn {
    @media (max-width: 767px) {
      height: 45px;
      font-size: 18px;
    }

    @media(max-width: 480px) {
      font-size: 0.875rem
    }

    &.cancel {
        background: #F5F5F5;
        color: #000;
    }
  }
}
.login-wrapper .login-col-1 {
  height: auto;
  z-index: 6;
  @media (max-width: 1500px) {
    width: 50%;
  }
  @media (max-width: 991px) {
    display: none;
  }
}
.login-wrapper .login-col-2 {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  @media (max-width: 1500px) {
    width: 50%;
  }
  @media (max-height: 900px) {
    height: auto;
  }
  @media (max-width: 991px) {
    width: 100%;
  }

  .login-cont {
    margin-top: auto !important;
    padding: 50px;
    @media (max-width: 1200px) {
      width: 80%;
    }
    @media (max-width: 991px) {
      width: 90%;
      max-width: 650px;
      padding: 30px;
    //   padding-bottom: 0;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.6);
    }
    @media (max-width: 450px) {
      padding: 30px 0;
    }

    h2 {
      @media (max-width: 1300px) {
        line-height: 1.3;
        margin-bottom: 10px;
      }
      @media (max-width: 500px) {
        font-size: 20px;
        margin-bottom: 0px;
        text-align: center;
      }
    }
    p {
        font-size: 18px;
        margin-bottom: 20px;
        line-height: 1.4;
      @media (max-width: 480px) {
        font-size: 14px;
        line-height: 1.2;
        text-align: center;
      }
    }

    .login-socmed {
      @media (max-width: 991px) {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

.login-wrapper .login-col-1 .login-title {
  @media (max-width: 1300px) {
    width: 450px;
  }
}

.login-wrapper .login-col-2 .login-menu {
  @media (max-width: 991px) {
    display: none;
  }
}

.login-wrapper .login-col-2 .login-cont .login-copyright {
  position: relative;
  position: fixed;
  bottom: 0;
  right: 50px;
  padding: 10px 0;
  width: 100%;
  text-align: right;
  background: rgba(255, 255, 255, 0.7);
  @media (max-width: 991px) {
    text-align: center;
    right: 0;
    left: 0;
  }
  p {
    font-size: 12px !important;
    margin-bottom: 0 !important;
      @media(max-width: 480px) {
        font-size: 12px !important;
        text-align: center;
        margin-bottom: 0 !important;
      }
  }
}

.login-mobile-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
}

.login-form input {
  border: 1px solid #aaa;
}

.login-wrapper .login-col-2 .login-menu {
  margin-top: 0 !important;
  padding: 30px 0;
}

.login-form-checkinput {
  height: auto !important;
}

.pb-50 {
  padding-bottom: 50px;
}

.login-form input::-webkit-input-placeholder {
  color: #cacaca;
}

.login-form input:-ms-input-placeholder {
  color: #cacaca;
}

.login-form input::placeholder {
  color: #cacaca;
}

.auth-back {
    margin-bottom: 50px;
    @media (max-width: 991px) {
      display: none;
    }
}

label span {
    color: #183891;
}
</style>
