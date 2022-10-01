<template>
  <div class="content-area">
    <div class="container">
      <div class="service-wrapper">
        <h2>Book a Service</h2>
        <div class="service-outer-cont">
          <div class="service-inner-cont">
            <div class="service-img">
              <img src="/images/Personal Care Services.png" />
            </div>

            <div class="services-avail">
              <h3>Personal Care Services</h3>
              <p>
                Personal care service includes assistance with the private
                activities of daily living such as:
              </p>
              <div class="care-services-cont">
                <a href="#"
                  ><img src="/images/icons/dress-icon.svg" />Dressing</a
                >
                <a href="#"
                  ><img src="/images/icons/bathtub-icon.svg" />Bathing</a
                >
                <a href="#"
                  ><img src="/images/icons/bathtub-icon.svg" />Grooming</a
                >
                <a href="#"
                  ><img src="/images/icons/bathtub-icon.svg" />Mobitlity</a
                >
                <a href="#">View more</a>
              </div>

              <div class="caregiver-cont">
                <div class="caregivers">
                  <img src="/images/caregiver-img1.png" />
                  <img src="/images/caregiver-img2.png" />
                  <img src="/images/caregiver-img3.png" />
                  <img src="/images/caregiver-img4.png" />
                  <img src="/images/caregiver-img5.png" />
                  <p>20+ Care givers</p>
                </div>
                <div class="book-btn">
                  <a
                    @click.prevent="
                      goTo('get-quote', {}, { service: 'personal-service' })
                    "
                    >Get A Quote</a
                  >
                  <a href="#">Know more</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="service-outer-cont">
          <div class="service-inner-cont">
            <div class="service-img">
              <img src="/images/Home Support Services.png" />
            </div>

            <div class="services-avail">
              <h3>Complex Care Services</h3>
              <p>
                Complex care refers to services that must be performed by a
                regulated health professional such as Registered Practical
                Nurse. These services incude :
              </p>
              <div class="care-services-cont">
                <a href="#"
                  ><img src="/images/icons/dress-icon.svg" />Medication
                  administration</a
                >
                <a href="#"
                  ><img src="/images/icons/bathtub-icon.svg" />Vital signs
                  monitoring</a
                >
                <a href="#"
                  ><img src="/images/icons/bathtub-icon.svg" />Wound care</a
                >
                <a href="#">View more</a>
              </div>

              <div class="caregiver-cont">
                <div class="caregivers">
                  <img src="/images/caregiver-img1.png" />
                  <img src="/images/caregiver-img2.png" />
                  <img src="/images/caregiver-img3.png" />
                  <img src="/images/caregiver-img4.png" />
                  <img src="/images/caregiver-img5.png" />
                  <p>20+ Practical Nurses</p>
                </div>
                <div class="book-btn">
                  <a
                    @click.prevent="
                      goTo('get-quote', {}, { service: 'complex-service' })
                    "
                    >Get A Quote</a
                  >
                  <a href="#">Know more</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="service-outer-cont">
          <div class="service-inner-cont">
            <div class="service-img">
              <img src="/images/Complex Care Services.png" />
            </div>

            <div class="services-avail">
              <h3>Home Support Services</h3>
              <p>
                Home Support Services include assistance with day-to-day
                activities sush as :
              </p>
              <div class="care-services-cont">
                <a href="#"
                  ><img src="/images/icons/dress-icon.svg" />Dressing</a
                >
                <a href="#"
                  ><img src="/images/icons/bathtub-icon.svg" />Bathing</a
                >
                <a href="#"
                  ><img src="/images/icons/bathtub-icon.svg" />Grooming</a
                >
                <a href="#"
                  ><img src="/images/icons/bathtub-icon.svg" />Mobitlity</a
                >
                <a href="#">View more</a>
              </div>

              <div class="service-option">
                <p>
                  We offer the option of Live-In caregivers for short or long
                  term placements.
                </p>
              </div>

              <div class="caregiver-cont">
                <div class="caregivers">
                  <img src="/images/caregiver-img1.png" />
                  <img src="/images/caregiver-img2.png" />
                  <img src="/images/caregiver-img3.png" />
                  <img src="/images/caregiver-img4.png" />
                  <img src="/images/caregiver-img5.png" />
                  <p>20+ Practical Nurses</p>
                </div>
                <div class="book-btn">
                  <a
                    @click.prevent="
                      goTo('get-quote', {}, { service: 'home-service' })
                    "
                    >Get A Quote</a
                  >
                  <a href="#">Know more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'MainLayout',
  head: {
    bodyAttrs: {
      id: 'service-page',
    },
  },
}
</script>

<style lang="scss" scoped></style>
