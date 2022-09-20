<template>
    <div class="login-wrapper">
        <div class="login-col-1"> 
            <img class="login-logo" src="/images/login-logo.png">
            <div class="login-title">
                <h1>Care That Comes to You</h1>
                <p>Let us provide you with high-quality care!</p>
            </div>
            <div class="login-socmed">
                <a href="#"><img src="/images/icons/facebook.svg"> Care Connect</a>
                <a href="#"><img src="/images/icons/twitter.svg"> @careconnectca</a>
                <a href="#"><img src="/images/icons/instagram.svg"> Care Connect</a>
            </div>
        </div>

        <div class="login-col-2">
            <div class="login-menu">
                <a class="decoration-0" href="#">Help</a>
                <a href="#">Privacy</a>
                <a href="#">Terms & conditions</a>
            </div>

            <div class="login-cont">
                <h2>Welcome to Care Connect</h2>
                <p>Care That Comes to You</p>
                
                <a class="google-btn" href="#">Login with Google <img src="/images/icons/google-icon.svg"></a>

                <div class="divider">
                    <p>or</p>
                </div>

                <div class="login-form">
                    <div class="input-cont">
                        <label>Email Address</label>
                        <div class="for-input error-msg">
                            <input class="text-box" type="email" placeholder="@mail.com">
                            <span>Data Required</span>
                        </div>
                    </div>
                    <div class="input-cont">
                        <label>Password</label>
                        <div class="for-input error-msg">
                            <input class="text-box" type="password">
                            <span>Data Required</span>
                        </div>
                    </div>

                    <div class="forgot-pass">
                        <div>
                            <input class="login-form-checkinput" type="checkbox" value="" id="remember" />
                            <label class="login-form-checklabel" for="remember"> Remember me </label>
                        </div>
                        <div>
                            <p>Forgot Password</p>
                        </div>
                    </div>


                    <a class="login-btn" href="#">login</a>

                    <p class="no-account">Don’t have an account? <a href="#">Signup</a></p>
                </div>

                <div class="login-copyright">
                    <p>Copyright © 2022 Care Connect - All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {

    head: {
    bodyAttrs: {
      id: 'login-page'
    }
  }
  }
</script>
