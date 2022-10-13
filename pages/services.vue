<template>
  <div class="content-area">
    <div class="container">
      <div class="service-wrapper">
        <h2>Book a Service</h2>

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
                  ><i class="icon-housekeeping"></i>Light housekeeping & laundry
                </a>
                <a href="#"
                  ><i class="icon-meal"></i>Meal preparation & planning
                </a>
                <a href="#"
                  ><i class="icon-companionship"></i>Companionship and Community outings</a
                >
                <a href="#"
                  ><i class="icon-yard"></i>Light yard work
                </a>
                <a href="#"
                  ><i class="icon-grocery"></i>Grocery shopping
                </a>
                <a href="#"
                  ><i class="icon-errand"></i>Errands
                </a>
                <a href="#"
                  ><i class="icon-appointments"></i>Accompaniment to doctor or other health care appointments
                </a>
                <a href="#"
                  ><i class="icon-pet"></i>Pet care
                </a>
                <a href="#"
                  ><i class="icon-ambulance"></i>Incidental Transportation
                </a>
                <a href="#"
                  ><i class="icon-home"></i>Home Safety
                </a>
                <a href="#"
                  ><i class="icon-cupboard"></i>Cleaning out cupboards
                </a>
                <a href="#"
                  ><i class="icon-ref"></i>Performing regular fridge cleaning to ensure food is fresh
                </a>
                <a href="#"
                  >Coordination of home and yard repair or maintenance services
                </a>
                <a href="#"
                  >Coordination for installation of in-home assistive devices
                </a>
                <a href="#"
                  >Coordination of services and referrals to other community agencies if required
                </a>
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
                  ><i class="icon-Dressing"></i>Dressing</a
                >
                <a href="#"
                  ><i class="icon-bathing"></i>Bathing</a
                >
                <a href="#"
                  ><i class="icon-grooming"></i>Grooming</a
                >
                <a href="#"
                  ><i class="icon-mobility"></i>Mobitlity</a
                >
                <a href="#"
                  ><i class="icon-toileting"></i>Toileting</a
                >
                <a href="#"
                  ><i class="icon-continence"></i>Continence assistance
                </a>
                <a href="#"
                  ><i class="icon-Medication"></i>Medication Reminders
                </a>
                <a href="#"
                  ><i class="icon-alzheimer"></i>Alzheimer & Dementia support
                </a>
                <a href="#"
                  ><i class="icon-overnight"></i>Overnight Care
                </a>
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
                  ><i class="icon-medical-admin"></i>Medication
                  administration</a
                >
                <a href="#"
                  ><i class="icon-vital-sign"></i>Vital signs
                  monitoring</a
                >
                <a href="#"
                  ><i class="icon-wound-care"></i>Wound care</a
                >
                <a href="#"
                  ><i class="icon-catheter"></i>Catheter care
                </a>
                <a href="#"
                  ><i class="icon-foot-care"></i>Foot care
                </a>
                <a href="#"
                  ><i class="icon-ostomy"></i>Ostomy care
                </a>
                <a href="#"
                  ><i class="icon-Palliative"></i>Palliative care
                </a>
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
