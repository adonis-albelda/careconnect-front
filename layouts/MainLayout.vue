<template>
  <div>
    <notifications
      group="notify"
      position="bottom left"
      width="500"
      :duration="4000"
    />
    <nav class="main-nav">
      <div class="logo-box" @click="goTo('index')">
        <img src="/images/logo.png" alt="careconnect logo" />
        <p>Care Connect</p>
      </div>
      <ul class="nav-item">
        <li :class="{ active: isRouteSelected('index') }" @click="goTo('index')">
          <span>Home</span>
        </li>
        <li :class="{ active: isRouteSelected('services') }" @click="goTo('services')">
          <span>Services</span>
        </li>
        <li :class="{ active: isRouteSelected('contact') }" @click="goTo('contact')">
          <span>Contact us</span>
        </li>
        <li class="nav-menu-icons" v-if="!$auth.user">
          <span>
            <i class="icon-shopping"></i>
          </span>
        </li>
        <li
          class="guest-nav"
          :class="{ active: isRouteSelected('login') }"
          @click="goTo('login')"
        >
          <span>
            <p>
              <i class="icon-profile"></i>
              {{ $auth.user ? `${$auth.user.email}` : 'Guest' }}
            </p>
          </span>
        </li>
        <li class="logout-ds"
          @click="signOutUser" v-if="$auth.user">
          <span>
            SIGN OUT
            <i class="icon-close"></i>
          </span>
        </li>
      </ul>
    </nav>
    <div class="mobile-header">
      <nav>
        <div @click="goTo('index')">
          <img src="/images/logo.png" alt="careconnect logo" />
        </div>
        <div>
          <p>{{ $auth.user ? `${$auth.user.email}` : 'Guest' }}</p>
          <img @click="openSidebar()" src="/images/burger-menu.png" />
        </div>
      </nav>
    </div>

    <div v-if="isShow" class="sidebar-menu">
      <img
        @click="closeSidebar()"
        class="close-sidebar"
        src="/images/close-icon.png"
      />
      <ul class="login-row menus">
        <template v-if="!$auth.user">
          <li @click="goTo('login')">
            <p>Login</p>
          </li>
          <li @click="goTo('register')">
            <p>Register</p>
          </li>
        </template>
        <li v-else>
          <p>Cart</p>
        </li>
        <li
          :class="[$route.name == 'index' ? 'mobile-menu-active' : '']"
          @click="goTo('index')"
        >
          <p>home</p>
        </li>
        <li
          :class="[$route.name == 'services' ? 'mobile-menu-active' : '']"
          @click="goTo('services')"
        >
          <p>services</p>
        </li>
        <li
          :class="[$route.name == 'contact' ? 'mobile-menu-active' : '']"
          @click="goTo('contact')"
        >
          <p>contact us</p>
        </li>
        <li @click="signOutUser" v-if="$auth.user">
          <p>Sign out</p>
        </li>
      </ul>
    </div>

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
        <div class="footer-bottom-links">
          <div class="all-right-reserved">
            <p>Copyright ?? 2022 Care Connect - All Rights Reserved.</p>
          </div>
          <div class="hft-links">
            <li class="csr" @click="goTo('help')">Help</li>
            <li class="csr" @click="goTo('help-faq')">F.A.Q.</li>
            <li class="csr" @click="goTo('help-terms_and_condition')">Terms & Conditions</li>
          </div>
        </div>
      </div>
    </footer>
    <div class="float-messenger">
      <!-- <img src="images/icons/vector.png" alt="live chat icon" /> -->
      <i class="icon-chat_bubble"></i>
    </div>
  </div>
</template>

<script>
import subscriptionSection from '@/pages/components/subscription-section.vue'

export default {
  auth: false,
  components: {
    subscriptionSection,
  },
  data() {
    return {
      isShow: false,
      showLogout:false
    }
  },
  methods: {
    openSidebar() {
      this.isShow = !this.isShow
    },
    closeSidebar() {
      this.isShow = false
    },
    signOutUser() {
      this.$auth.logout()
      this.isShow = false
      this.showLogout=!this.showLogout
      this.goTo('login')
    },
  },
  watch: {
    $route() {
      if (this.isShow) this.isShow = false
    },
  },
}
</script>
