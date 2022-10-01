<template>
  <div class="login-wrapper">
    <div class="login-col-1">
      <img
        class="login-logo"
        @click="goTo('index')"
        src="/images/login-logo.png"
      />
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
      <div class="login-header-logo">
        <img src="/images/login-logo.png" alt="" />
      </div>

      <div class="login-mobile-wrapper">
        <div class="login-cont">
          <h2>Welcome to Care Connect</h2>
          <p>Care That Comes to You</p>

          <div class="login-socmed">
            <a class="google-btn" href="#"
              >Login with Google <img src="/images/icons/google-icon.svg"
            /></a>
            <a class="facebook-btn" href="#"
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
                    <input class="text-box" type="email" placeholder="@mail.com" />
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
                  <div class="for-input error-msg">
                    <input class="text-box" type="password" />
                    <span>{{ errors[0] }}</span>
                  </div>
                </div>
              </ValidationProvider>
              <div class="forgot-pass">
                <div>
                  <input
                    class="login-form-checkinput"
                    type="checkbox"
                    value=""
                    id="remember"
                  />
                  <label class="login-form-checklabel" for="remember">
                    Remember me
                  </label>
                </div>
                <div>
                  <p>Forgot Password</p>
                </div>
              </div>

              <button class="login-btn">login</button>

              <p class="no-account">
                Don’t have an account?
                <a href="#" @click.prevent="goTo('register')">Signup</a>
              </p>
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
  head: {
    bodyAttrs: {
      id: 'login-page',
    },
  },
  methods: {
    handleLogin() {

    }
  }
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
  @media (max-width: 450px) {
    padding: 50px;
  }

  img {
    @media (max-width: 600px) {
      width: 250px;
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
  // @media (max-height: 900px) {
  //   height: auto;
  // }
  @media (max-width: 991px) {
    height: auto;
  }
  @media (max-width: 991px) and (max-height: 900px) {
    height: auto;
  }
  @media (max-width: 991px) and (min-height: 901px) {
    height: 100vh;
  }
}
.login-form {
  @media (max-height: 900px) {
    padding-bottom: 65px;
  }

  .login-btn {
    @media (max-width: 767px) {
      height: 45px;
      font-size: 18px;
    }
  }
}
.login-wrapper .login-col-1 {
  height: auto;
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
    @media (max-width: 1200px) {
      width: 80%;
    }
    @media (max-width: 991px) {
      width: 90%;
      max-width: 650px;
      padding: 30px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.6);
    }
    @media (max-width: 450px) {
      padding: 30px 0;
    }

    h2 {
      @media (max-width: 1300px) {
        line-height: 1.3;
      }
      @media (max-width: 500px) {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }
    p {
      @media (max-width: 450px) {
        font-size: 17px;
        line-height: 1.2;
      }
    }

    .login-socmed {
      @media (max-width: 991px) {
        display: flex;
        justify-content: space-between;
      }
      @media (max-width: 570px) {
        flex-direction: column;
      }

      a {
        @media (max-width: 991px) {
          width: 48%;
        }
        @media (max-width: 570px) {
          width: 100%;
        }
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
  @media (max-width: 991px) {
    display: flex;
    right: 0;
    left: 0;
    margin: 0 auto;
    bottom: 20px;
    justify-content: center;
    width: 90%;
    text-align: center;
  }
  p {
    @media (max-width: 520px) {
      text-align: center;
    }
    @media (max-width: 450px) {
      font-size: 0.75rem;
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

.login-form input {
  @media (max-width: 991px) {
    height: 50px;
    font-size: 17px;
  }
}

.login-form-checkinput{
  height: auto !important;
}
</style>
