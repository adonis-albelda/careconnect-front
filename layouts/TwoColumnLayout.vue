<template>
  <div class="login-wrapper">
    <notifications group="notify" position="bottom left" width="500" :duration="4000"/>
    <div class="login-col-1">
      <img
        class="login-logo csr"
        @click="goTo('index')"
        src="/images/login-logo.png"
      />
      <!-- <a class="back" href="#" @click.prevent="goTo('index')"><i class="icon-arrow-left"></i> back</a> -->
      <div class="login-title">
        <h1>Care That Comes to You</h1>
        <p>Let us provide you with high-quality care!</p>
      </div>
      <div class="login-socmed">
        <a href="#" class="op-onhover"><i class="icon-facebook"></i> Care Connect</a>
        <a href="#" class="op-onhover"><i class="icon-twitter"></i> @careconnectca</a>
        <a href="#" class="op-onhover"><i class="icon-instagram"></i> Care Connect</a>
      </div>
    </div>
    <div class="login-col-2">
      <div class="login-menu">
        <a class="decoration-0 op-onhover" href="#">Help</a>
        <a class="op-onhover" href="#">Privacy</a>
        <a class="op-onhover" href="#">Terms & conditions</a>
      </div>
      <div class="login-header-logo" @click="goTo('index')">
        <img src="/images/login-logo.png" alt="" />
        <a class="back csr" href="#" @click.prevent="goTo('login')"
          ><i class="icon-arrow-left"></i> Back</a
        >
      </div>
      <Nuxt></Nuxt>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
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
  
    @media (max-width: 480px) {
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
  
      @media (max-width: 480px) {
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
    
    @media (max-height: 900px) {
      padding-bottom: 65px;
    }
  
    .login-btn {
      @media (max-width: 767px) {
        height: 45px;
        font-size: 18px;
      }
  
      @media (max-width: 480px) {
        font-size: 0.875rem;
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
    // @media (max-height: 900px) {
    //   height: auto;
    // }
    @media (max-width: 991px) {
      width: 100%;
    }
  
    .login-cont {
      margin-top: auto !important;
      padding: 50px 0;
      @media (max-width: 1200px) {
        width: 80%;
      }
      @media (max-width: 991px) {
        width: 90%;
        max-width: 650px;
        padding: 30px;
        // padding-bottom: 0;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.6);
      }
      @media (max-width: 450px) {
        padding: 30px 0;
      }
  
      h2 {
        line-height: 1.7 !important;
        @media (max-width: 1300px) {
          line-height: 1.6 !important;
        }
        @media (max-width: 500px) {
          font-size: 20px;
          margin-bottom: 10px;
          // text-align: center;
        }
      }
      p {
        font-size: 17px !important;
        line-height: 1.5;
        @media (max-width: 480px) {
          font-size: 14px !important;
          line-height: 1.2;
          // text-align: center;
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
    // position: relative;
    position: fixed;
    bottom: 0px;
    right: 50px;
    padding: 10px 0 20px 0;
    width: 100%;
    text-align: right;
    background: rgba(255, 255, 255, 0.7);
    @media (max-width: 991px) {
      text-align: center;
      right: 0;
      left: 0;
    }
    @media (max-width: 350px) {
      padding: 10px;
    }
    p {
      font-size: 0.875rem !important;
      margin-bottom: 0 !important;
      @media (max-width: 480px) {
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
    width: fit-content;
    @media (max-width: 991px) {
      display: none;
    }

    span {
      font-size: 20px;
      color: #000;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .login-socmed a i {
    font-size: 23px !important;
  }
  </style>