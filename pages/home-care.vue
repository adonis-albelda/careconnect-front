<template>
  <div class="personal-care-wrapper">
    <div class="container">
      <a class="back" href="#"><img src="/images/arrow-left.png" /> Back</a>

      <div class="personalcare-banner">
        <img src="/images/hom_support_services_banner.jpg" />
      </div>

      <div class="personal-inner-cont">
        <div class="p-col-1">
          <div>
            <h1>Home Support Services</h1>
          </div>
        </div>

        <div class="p-col-2">
          <div class="service-desc">
            <p class="normal-text">
              Recovering from home after surgery can limit you with your daily activities. Whether you are recovering from major surgery, childbirth, or plastic surgery, our compassionate caregivers can assist you to a healthy and complete recovery.
            </p>
          </div>

          <div class="service-list">
            <p class="sub-title psubtitle">
              Home Support Services include assistance with day-to-day
              activities such as:
            </p>

            <ul>
              <li>Light housekeeping & laundry</li>
              <li>Meal preparation & planning</li>
              <li>Companionship and Community outings</li>
              <li>Light yard work</li>
              <li>Grocery shopping</li>
              <li>Errands</li>
              <li>Accompaniment to doctor or other health care appointments</li>
              <li>Pet care</li>
              <li>Incidental Transportation</li>
              <li>Home Safety</li>
              <li>Sorting mail</li>
              <li>Cleaning out cupboards</li>
              <li>
                Performing regular fridge cleaning to ensure food is fresh
              </li>
              <li>
                Coordination of home and yard repair or maintenance services
              </li>
              <li>
                Coordination for installation of in-home assistive devices
              </li>
              <li>
                Coordination of services and referrals to other community
                agencies if required
              </li>
            </ul>

            <p class="sub-title">
              We offer the option of Live-in caregivers for short or long term
              placements.
            </p>

            <a
              href="#"
              class="personal-care-btn"
              @click.prevent="
                goTo('get-quote', {}, { service: 'home-service' })
              "
              >Get a Quote</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  auth: false,
  head: {
    bodyAttrs: {
      id: 'personal-care-page',
      class: 'services-page',
    },
  },
}
</script>

<style lang="scss" scoped>
.personalcare-banner img {
  width: 100%;
}
</style>
