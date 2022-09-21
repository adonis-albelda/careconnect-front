<template>
    <div class="contact-wrapper">
        <div class="contact-banner">

        </div>
        <div class="container">
            <div class="contact-inner-cont">
                <div class="contact-col-1">
                    <h2>Contact Us</h2>
                    <p>Let us know about your questions or concerns. We will get back to you as soon as we can.</p>
                
                    <div class="contacts">
                        <a href="#"><img src="/images/icons/mail-white.svg"> admin@ucarecon.ca</a>
                        <a href="#"><img src="/images/icons/smartphone-white.svg"> 416-262-4071</a>
                        <a href="#"><img src="/images/icons/location-white.svg"> 120 Shelborne North York On. Canada M6B 1M7</a>
                    </div>
                    <div class="contact-img">
                        <img src="/images/paper-plane.png">
                    </div>
                </div>

                <div class="contact-col-2">
                    <div class="input-cont">
                        <label>Name <span>*</span></label>
                        <div class="input-inner-cont">
                            <div class="error-msg">
                                <input class="text-box" type="text" placeholder="First name">
                                <span>Field Required</span>
                            </div>
                            <div>
                                <input class="text-box" type="text" placeholder="Last name">
                            </div>
                        </div>
                    </div>
                    <div class="input-cont">
                        <label>Email Address <span>*</span></label>
                        <div>
                            <input class="text-box" type="email" placeholder="@mail.com">
                        </div>
                    </div>
                    <div class="input-cont">
                        <label>Phone number <span>*</span></label>
                        <div>
                            <input class="text-box" type="number" placeholder="0000 0000 000000">
                        </div>
                    </div>
                    <div class="input-cont">
                        <label>Message <span>*</span></label>
                        <div>
                            <textarea class="text-box" placeholder="Hello..."></textarea>
                        </div>
                    </div>
                    <a class="send-btn" href="#">send</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  head: {
    bodyAttrs: {
      id: 'contact-page',
    },
  },
}
</script>