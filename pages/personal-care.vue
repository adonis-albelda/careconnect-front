<template>
  <div class="personal-care-wrapper">
    <div class="container">
      <a class="back" href="#" @click.prevent="goTo('index')"
        ><img src="/images/arrow-left.png" /> Back</a
      >

      <div class="personalcare-banner">
        <img src="/images/personal-care-banner.png" />
      </div>

      <div class="personal-inner-cont">
        <div class="p-col-1">
          <!-- <div class="pc-price">
                        <a href="#">1 hr</a>
                        <span>|</span>
                        <a href="#">C$50</a>
                    </div> -->
          <div>
            <h1>Personal Care Services</h1>
          </div>
        </div>

        <div class="p-col-2">
          <div class="service-desc">
            <p class="normal-text">
              Arthritis, physical disabilities, and age-related conditions are
              some of the few circumstances that prevent patients from caring
              for themselves. Our caregivers can assist you with daily tasks
              such as mobility, eating, exercising, and grooming.
            </p>
          </div>

          <div class="service-list">
            <p class="sub-title psubtitle">
              Personal care service includes assistance with the private
              activities of daily living such as:
            </p>
            <ul>
              <li>Dressing</li>
              <li>Bathing</li>
              <li>Grooming</li>
              <li>Mobility</li>
              <li>Toileting</li>
              <li>Continence assistance</li>
              <li>Medication Reminders</li>
              <li>Alzheimer & Dementia support</li>
              <li>Overnight Care</li>
            </ul>
            <p class="sub-title">
              Trained and certified Personeal Support Workers provide all
              personal support services
            </p>
            <a
              href="#"
              class="personal-care-btn"
              @click.prevent="
                goTo('get-quote', {}, { service: 'personal-service' })
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
