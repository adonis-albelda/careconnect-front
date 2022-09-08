<template>
  <div id="landing-page">
    <nav class="main-nav">
      <div class="logo-box">
        <img src="images/logo.svg" alt="careconnect logo" />
        <p>Care Connect</p>
      </div>
      <ul class="nav-item">
        <li class="active"><span>Home</span></li>
        <li><span>Services</span></li>
        <li><span>Contact us</span></li>
        <li class="nav-menu-icons">
          <span>
            <img src="images/icons/shopping.png" alt="" />
          </span>
          <span>
            <img src="images/icons/profile.png" alt="" />
          </span>
        </li>
      </ul>
    </nav>
    <section class="top-banner">
      <div class="banner-content">
        <div class="slogan">
          <h1 data-aos="fade-in">Care That Comes to You</h1>
          <h3 data-aos="fade-up">Let us provide you with high-quality care!</h3>
        </div>
        <div class="booking-options container">
          <VSelect :options="options" placeholder="dsdadad">
            <template v-slot:option="option">
              <h4>{{option.title}}</h4><br/>
              <p>{{option.description}}</p>
            </template>
            <template v-slot:no-options="{ search, searching }">
              <template v-if="searching">
                No results found for <em>{{ search }}</em
                >.
              </template>
              <em v-else style="opacity: 0.5"
                >Start typing to search for a country.</em
              >
            </template>
          </VSelect>
          <VDatePicker valueType="format"></VDatePicker>
          <VSelect placeholder="dsdadad"> </VSelect>
          <div>
            <button class="book-now-btn">BOOK NOW</button>
          </div>
        </div>
      </div>
    </section>
    <section class="services-page container">
      <h1 data-aos="fade-up" data-aos-once="true">Our Services</h1>
      <div class="items">
        <div class="service" data-aos="slide-right" data-aos-once="true">
          <h3 class="title">Home Support Services</h3>
          <p class="desc">
            Recovering from home after surgery can limit you with your daily
            activities. Whether you are recovering from major surgery,
            childbirth, or plastic surgery, our compassionate caregivers can
            assist you to a healthy and complete recovery.
          </p>
          <button class="btn block accent">BOOK NOW</button>
          <button class="btn block plain">
            <img src="images/icons/info.svg" alt="">
            Learn More
          </button>
        </div>
        <div class="service" data-aos="slide-up" data-aos-once="true" data-aos-delay="300">
          <h3 class="title">Personal Care Services</h3>
          <p class="desc">
            Arthritis, physical disabilities, and age-related conditions are
            some of the few circumstances that prevent patients from caring for
            themselves. Our caregivers can assist you with daily tasks such as
            mobility, eating, exercising, and grooming.
          </p>
          <button class="btn block accent">BOOK NOW</button>
          <button class="btn block plain">
            <img src="images/icons/info.svg" alt="">
            Learn More
          </button>
        </div>
        <div class="service" data-aos="slide-left" data-aos-once="true">
          <h3 class="title">Complex Care Services</h3>
          <p class="desc">
            Our experienced and highly trained caregivers provide the highest
            quality of care to both patients and their families. Our goal is to
            help individuals and their loved ones live happy and fulfilling
            lives.
          </p>
          <button class="btn block accent">BOOK NOW</button>
          <button class="btn block plain">
            <img src="images/icons/info.svg" alt="">
            Learn More
          </button>
        </div>
      </div>
    </section>
    <section class="introducing-page">
      <div class="banner">
        <div class="content">
          <div class="container">
            <h1 data-aos="fade" data-aos-once="true">Who we are</h1>
            <p data-aos="fade-up" data-aos-once="true">Let us provide you with high-quality care!</p>
          </div>
        </div>
        <!-- <img src="images/who-img.webp" alt="groupie of nurses" /> -->
      </div>
      <div class="items container">
        <div data-aos="slide-right" data-aos-once="true">
          <h3>
            <img src="images/icons/trust.svg" alt="for trust" />
            Caregivers You Can Trust
          </h3>
          <p>
            Feel better in the comfort of your own home. We specialize in care
            and daily living assistance to an array of individuals. Whether you
            need daily or weekly assistance due to aging, illness, recovery, or
            rehabilitation, our care givers will provide an individualized
            service that you can trust.
          </p>
        </div>
        <div data-aos="slide-up" data-aos-once="true" data-aos-delay="300">
          <h3>
            <img src="images/icons/supportive.svg" alt="for support" />
            Experienced and Supportive
          </h3>
          <p>
            We understand that not one care plan fits all. Daily services can
            include anything from meal preparation, hygiene, cleaning, and
            supervision. We will take the time to get to know you and develop an
            individualized care plan that fits your specific needs.
          </p>
        </div>
        <div data-aos="slide-left" data-aos-once="true">
          <h3>
            <img src="images/icons/health.svg" alt="for health" />
            Experienced Home Health Aids
          </h3>
          <p>
            Companionship is key to a trusted relationship with our caregivers.
            We not only strive to help you with everyday tasks but want to
            develop a caring relationship with you. We provide one-on-one
            attention and care that cannot compare in other settings.
          </p>
        </div>
      </div>
    </section>
    <section class="testimonial-page">
      <div class="container">
        <div data-aos="fade" data-aos-once="true">
          <h1>
            What <br />
            Our Clients Say
          </h1>
        </div>
        <div>
          <div class="testimonial" data-aos="fade-down" data-aos-once="true" data-aos-delay="10">
            <h3>John Doe</h3>
            <small>60 y/o Veteran</small>
            <p>
              “ If you are looking for some awesome, knowledgeable people, these
              are the people I highly recommend. Their friendliness and
              result-driven approach is what I love about them. “
            </p>
          </div>
          <div class="testimonial" data-aos="fade-down" data-aos-once="true" data-aos-delay="30">
            <h3>John Doe</h3>
            <small>60 y/o Veteran</small>
            <p>
              “ If you are looking for some awesome, knowledgeable people, these
              are the people I highly recommend. Their friendliness and
              result-driven approach is what I love about them. “
            </p>
          </div>
          <div class="testimonial" data-aos="fade-down" data-aos-once="true" data-aos-delay="50">
            <h3>John Doe</h3>
            <small>60 y/o Veteran</small>
            <p>
              “ If you are looking for some awesome, knowledgeable people, these
              are the people I highly recommend. Their friendliness and
              result-driven approach is what I love about them. “
            </p>
          </div>
          <div class="testimonial" data-aos="fade-down" data-aos-once="true" data-aos-delay="70">
            <h3>John Doe</h3>
            <small>60 y/o Veteran</small>
            <p>
              “ If you are looking for some awesome, knowledgeable people, these
              are the people I highly recommend. Their friendliness and
              result-driven approach is what I love about them. “
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="newsletter-page">
      <div class="container">
        <div>
          <h2>Subscribe to our News letter</h2>
          <p>Sign up to hear from us about specials, sales, and events.</p>
        </div>
        <div class="email-box">
          <input type="text" placeholder="Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
    <footer class="container">
      <div class="link-items">
        <div class="footer-logo">
          <img src="images/logo.svg" alt="careconnect logo" />
          <p class="company-title">Care Connect</p>
          <p>Care That Comes to You</p>
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
              contact@careconnect.com
            </p>
            <p>
              <img src="images/icons/smartphone.svg" alt="for health" />
              + 1 819 555 5555
            </p>
            <p>
              <img src="images/icons/location_pin.svg" alt="for health" />
              1154 Albert Street Stratford, Ontario(ON), N5A 3K5
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
        <!-- <di class="footer-links">
          <div>
            <h3>Social media accounts</h3>
            <p>
              <img src="images/icons/facebook.svg" alt="for health" /> Care Connect
            </p>
            <p>
              <img src="images/icons/twitter.svg" alt="for health" /> @careconnectca
            </p>
            <p>
              <img src="images/icons/instagram.svg" alt="for health" /> Care Connect
            </p>
          </div>
        </di> -->
      </div>
      <div class="all-right-reserved">
        <p>Copyright © 2022 Care Connect - All Rights Reserved.</p>
        <a href="">Terms & Conditions</a>
        <a href="">Help and Support</a>
      </div>
    </footer>
    <div class="float-messenger">
      <img src="images/icons/vector.png" alt="live chat icon" />
    </div>
  </div>
</template>
<script>
import AOS from 'aos'
export default {
  name: 'LandingPage',
  data() {
    return {
      options: [
        {
          title: 'Personal Care Services',
          description:'Personal care service includes assistance with the private activities of daily living such as: 1. Dressing 2. Bathing'
        },
        {
          title:'Complex Care Services',
          description:'Complex care refer to services that must be performed by a regulated health professionals.'
        },
        {
          title:'Home Support Service',
          description:'Home support services include assistance in day-to-day activities such as: 1. Light housekeeping and laundry 2. Meal preparation and planning'
        }
      ],
    }
  },
  mounted() {
    AOS.init()
  }
}
</script>
<style>
/* .introducing-page {
  width: 100%;
  background-repeat: no-repeat;
  height: 50vh;
  background-image: url(/images/who-img.webp);
  background-size: contain;
} */
</style>
