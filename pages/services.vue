<template>
  <div class="content-area">
    <div class="container">
      <div class="service-wrapper">
        <h2>Book a Service</h2>

        <div class="service-outer-cont">
          <div class="service-inner-cont">
            <div class="service-img">
              <img src="/images/Home Support Services.png" />
            </div>

            <div class="services-avail">
              <h3>Home Support Services</h3>
              <p>
                Home Support Services include assistance with day-to-day
                activities sush as :
              </p>

              <div class="care-services-cont">
                  <a href="#" v-if='serviceList < Homeservices.length' v-for='(serviceList) in HomeserviceToShow'><i :class="[Homeservices[serviceList].icon]"></i> {{Homeservices[serviceList].name}}</a>
                <div v-if="HomeserviceToShow < Homeservices.length || Homeservices.length > HomeserviceToShow">
                  <button @click="HomeserviceToShow += 4">View more</button>
                </div>
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
                <div v-if='serviceList < Personalservices.length' v-for='(serviceList) in PersonalserviceToShow'>
                  <a href="#"><i :class="[Personalservices[serviceList].icon]"></i> {{Personalservices[serviceList].name}}</a>
                </div>
                <div v-if="PersonalserviceToShow < Personalservices.length || Personalservices.length > PersonalserviceToShow">
                  <button @click="PersonalserviceToShow += 4">View more</button>
                </div>
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
              <img src="/images/Complex Care Services.png" />
            </div>

            <div class="services-avail">
              <h3>Complex Care Services</h3>
              <p>
                Complex care refers to services that must be performed by a
                regulated health professional such as Registered Practical
                Nurse. These services incude :
              </p>
              
              <div class="care-services-cont">
                <div v-if='serviceList < Complexservices.length' v-for='(serviceList) in ComplexserviceToShow'>
                  <a href="#"><i :class="[Complexservices[serviceList].icon]"></i> {{Complexservices[serviceList].name}}</a>
                </div>
                <div v-if="ComplexserviceToShow < Complexservices.length || Complexservices.length > ComplexserviceToShow">
                  <button @click="ComplexserviceToShow += 4">View more</button>
                </div>
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
  data() {
    return {
      Homeservices: [
        {
          name: 'Light housekeeping & laundry',
          icon : 'icon-housekeeping'
        },
        {
          name: 'Meal preparation & planning',
          icon: 'icon-meal'
        },
        {
          name: 'Companionship and Community outings',
          icon: 'icon-companionship'
        },
        {
          name: 'Light yard work',
          icon: 'icon-yard'
        },
        {
          name: 'Grocery shopping',
          icon: 'icon-grocery'
        },
        {
          name: 'Errands',
          icon: 'icon-errand'
        },
        {
          name: 'Accompaniment to doctor or other health care appointments',
          icon: 'icon-appointments'
        },
        {
          name: 'Pet care',
          icon: 'icon-pet'
        },
        {
          name: 'Incidental Transportation',
          icon: 'icon-ambulance'
        },
        {
          name: 'Home Safety',
          icon: 'icon-home'
        },
        {
          name: 'Cleaning out cupboards',
          icon: 'icon-cupboard'
        },
        {
          name: 'Performing regular fridge cleaning to ensure food is fresh',
          icon: 'icon-ref'
        },
        {
          name: 'Coordination of home and yard repair or maintenance services',
          icon: ''
        },
        {
          name: 'Coordination for installation of in-home assistive devices',
          icon: ''
        },
        {
          name: 'Coordination of services and referrals to other community agencies if required',
          icon: ''
        },
      ],
      Personalservices: [
        {
          name: 'Medication administration',
          icon : 'icon-medical-admin'
        },
        {
          name: 'Vital signs monitoring',
          icon: 'icon-vital-sign'
        },
        {
          name: 'Wound care',
          icon: 'icon-wound-care'
        },
        {
          name: 'Catheter care',
          icon: 'icon-catheter'
        },
        {
          name: 'Foot care',
          icon: 'icon-foot-care'
        },
        {
          name: 'Ostomy care',
          icon: 'icon-ostomy'
        },
        {
          name: 'Palliative care',
          icon: 'icon-Palliative'
        },
      ],
      Complexservices: [
        {
          name: 'Dressing',
          icon : 'icon-Dressing'
        },
        {
          name: 'Bathing',
          icon: 'icon-bathing'
        },
        {
          name: 'Grooming',
          icon: 'icon-grooming'
        },
        {
          name: 'Mobitlity',
          icon: 'icon-mobility'
        },
        {
          name: 'Toileting',
          icon: 'icon-toileting'
        },
        {
          name: 'Continence assistance',
          icon: 'icon-continence'
        },
        {
          name: 'Medication Reminders',
          icon: 'icon-Medication'
        },
        {
          name: 'Alzheimer & Dementia support',
          icon: 'icon-alzheimer'
        },
        {
          name: 'Overnight Care',
          icon: 'icon-overnight'
        },
      ],
      HomeserviceToShow: 4,
      PersonalserviceToShow: 4,
      ComplexserviceToShow: 4,
    };
  },
}
</script>

<style lang="scss" scoped></style>
