<template>
  <div>
    <nav class="main-nav">
      <div class="logo-box" @click="goTo('index')">
        <img src="images/logo.png" alt="careconnect logo" />
        <p>Care Connect</p>
      </div>
      <ul class="nav-item">
        <li :class="{ active: isActive('index') }" @click="goTo('index')">
          <span>Home</span>
        </li>
        <li :class="{ active: isActive('services') }" @click="goTo('services')">
          <span>Services</span>
        </li>
        <li :class="{ active: isActive('contact') }" @click="goTo('contact')"><span>Contact us</span></li>
        <li class="nav-menu-icons">
          <span>
            <img src="images/icons/shopping.png" alt="" />
          </span>
        </li>
        <li class="guest-nav" :class="{ active: isActive('login') }" @click="goTo('login')">
          <span>
            <p>
              <img src="images/icons/profile.png" alt="" />
              Guest
            </p>
          </span>
        </li>
      </ul>
    </nav>
    <Nuxt></Nuxt>
    <subscriptionSection />
    <footer>
      <div class="container">
        <div class="link-items">
          <div class="footer-logo">
            <div class="content">
              <img src="images/logo.png" alt="careconnect logo" />
              <p class="company-title">Care Connect</p>
              <p>Care That Comes to You</p>
            </div>
          </div>
          <div class="footer-links">
            <div>
              <h3>Services</h3>
              <p><a href="">Home Support Services</a></p>
              <p><a href="">Personal Care Services</a></p>
              <p><a href="">Complex Care Services</a></p>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>
                <img src="images/icons/mail.svg" alt="for health" />
                admin@ucarecon.ca
              </p>
              <p>
                <img src="images/icons/smartphone.svg" alt="for health" />
                + 416-262-4071
              </p>
              <p>
                <img src="images/icons/location_pin.svg" alt="for health" />
                120 Shelborne North York On. Canada M6B 1M7
              </p>
            </div>
            <div>
              <h3>Social media accounts</h3>
              <p>
                <img src="images/icons/facebook.svg" alt="for health" /> Care
                Connect
              </p>
              <p>
                <img src="images/icons/twitter.svg" alt="for health" />
                @careconnectca
              </p>
              <p>
                <img src="images/icons/instagram.svg" alt="for health" /> Care
                Connect
              </p>
            </div>
          </div>
        </div>
        <div class="all-right-reserved">
          <p>Copyright © 2022 Care Connect - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    <div class="float-messenger">
      <img src="images/icons/vector.png" alt="live chat icon" />
    </div>
  </div>
</template>

<script>
import subscriptionSection from '@/pages/components/subscription-section.vue'

export default {
  components: {
    subscriptionSection,
  },
}
</script>
