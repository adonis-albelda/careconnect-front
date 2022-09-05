<template>
  <div id="landing-page">
    <section class="top-banner">
      <nav class="main-nav">
        <div>
          <img src="" alt="careconnect logo" />
        </div>
        <ul>
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
      </nav>
      <div class="slogan">
        <h1>Care That Comes to You</h1>
        <p>Let us provide you with high-quality care!</p>
      </div>
      <div class="booking-options"></div>
    </section>
    <section class="services-page container">
      <h1>Our Services</h1>
      <div class="items">
        <div>
          <p class="price">C$50 / 1 hr</p>
          <h3 class="title">Home Support Services</h3>
          <p class="desc">
            Recovering from home after surgery can limit you with your daily
            activities. Whether you are recovering from major surgery,
            childbirth, or plastic surgery, our compassionate caregivers can
            assist you to a healthy and complete recovery.
          </p>
        </div>
        <div>
          <p class="price">C$50 / 1 hr</p>
          <h3 class="title">Personal Care Services</h3>
          <p class="desc">
            Arthritis, physical disabilities, and age-related conditions are
            some of the few circumstances that prevent patients from caring for
            themselves. Our caregivers can assist you with daily tasks such as
            mobility, eating, exercising, and grooming.
          </p>
        </div>
        <div>
          <p class="price">C$50 / 1 hr</p>
          <h3 class="title">Complex Care Services</h3>
          <p class="desc">
            Our experienced and highly trained caregivers provide the highest
            quality of care to both patients and their families. Our goal is to
            help individuals and their loved ones live happy and fulfilling
            lives.
          </p>
        </div>
      </div>
    </section>
    <section class="introducing-page">
      <div class="banner">
        <div class="container">
          <h1>Who we are</h1>
          <p>Let us provide you with high-quality care!</p>
        </div>
        <!-- <img src="images/who-img.webp" alt="groupie of nurses" /> -->
      </div>
      <div class="items container">
        <div>
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
        <div>
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
        <div>
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
    <section class="testimonial-page container">
      <div>
        <h1>What Our Clients Say</h1>
      </div>
      <div>
        <div class="testimonial">
          <p>John Doe</p>
          <small>60 y/o Veteran</small>
          <p>
            “ If you are looking for some awesome, knowledgeable people, these
            are the people I highly recommend. Their friendliness and
            result-driven approach is what I love about them. “
          </p>
        </div>
        <div class="testimonial">
          <p>John Doe</p>
          <small>60 y/o Veteran</small>
          <p>
            “ If you are looking for some awesome, knowledgeable people, these
            are the people I highly recommend. Their friendliness and
            result-driven approach is what I love about them. “
          </p>
        </div>
        <div class="testimonial">
          <p>John Doe</p>
          <small>60 y/o Veteran</small>
          <p>
            “ If you are looking for some awesome, knowledgeable people, these
            are the people I highly recommend. Their friendliness and
            result-driven approach is what I love about them. “
          </p>
        </div>
        <div class="testimonial">
          <p>John Doe</p>
          <small>60 y/o Veteran</small>
          <p>
            “ If you are looking for some awesome, knowledgeable people, these
            are the people I highly recommend. Their friendliness and
            result-driven approach is what I love about them. “
          </p>
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
        <div>
          <h3>Care Connect</h3>
          <p>Care That Comes to You</p>
        </div>
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
      </div>
      <div class="all-right-reserved">
        <p>Copyright © 2022 Care Connect - All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
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
