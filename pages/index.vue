<template>
  <div id="landing-page">
    <section :class="[isShowMobile ? 'mobile-top-banner' : 'top-banner']">
      <div class="banner-content">
        <div class="slogan">
          <h1 data-aos="fade-in">Care That Comes to You</h1>
          <h3 data-aos="fade-up">Let us provide you with high-quality care!</h3>
        </div>
      </div>
    </section>
    <div class="booking-options">
      <VSelect :searchable="false" :clearable="false" v-model="selectedService" class="list-services"  :options="servicesTypes" placeholder="dsdadad">
        <template v-slot:selected-option-container="{option: {label, description}}">
          <div class="filter-selected">
            <p>{{label}}</p>
            <span>{{description}}</span>
          </div>
        </template>
        <template v-slot:option="option">
          <h4>{{option.label}}</h4>
          <p>{{option.description}}</p>
        </template>
        <template v-slot:no-options="{ search, searching }">
          <template v-if="searching">
            No results found for <em>{{ search }}</em
            >.
          </template>
          <em v-else style="opacity: 0.5"
            >Start typing to search for a service.</em
          >
        </template>
      </VSelect>
      <VDatePicker  :open="dateOptionstatus" format="MMM DD YYYY" range v-model="selectedDates" :editable="false" class="home-datepicker"  valueType="format">
        <template v-slot:header>
          <strong><h4>Please set your start date and end date. For one day only, just double tap the same day.</h4></strong>
        </template>
        <template v-slot:input="item">
          <div @click="dateOptionstatus=true">
            <label class="date-lbl">Date</label>
            <div class="selected-date">
              {{selectedDates.length ? `${selectedDates[0]}-${selectedDates[1]}` : 'Select Dates'}}
            </div>
          </div>
        </template>
        <template class="datepicker-btns" v-slot:footer="item">
          <button @click="dateOptionstatus=!dateOptionstatus">CLOSE</button>
          <button @click="dateOptionstatus=!dateOptionstatus">DONE</button>
        </template>
      </VDatePicker>
      <div @click="openTimeSelection()" class="custom-timepicker">
        <p>Start Time</p>
        <span>{{`${selectedTime.start.hour}:${selectedTime.start.minutes} ${selectedTime.start.time}`}}</span>
        <i class="icon-stopwatch"></i>
        <div v-if="isShowTime" class="timepicker-dropdown">
          <div class="time-options-container">
              <div>
                <h4>Start Time</h4>
                <div class="time-input">
                  <div>
                    <input v-model="selectedTime.start.hour" class="text-box" pattern="\d*" minlength="2" maxlength="2" type="text" @click.stop="">
                    <span>:</span>
                    <input v-model="selectedTime.start.minutes" class="text-box"  pattern="\d*" minlength="2" maxlength="2" type="text" @click.stop="">
                  </div>
                  <div>
                    <p @click.stop="selectedTime.start.time = 'AM'" :class="selectedTime.start.time == 'AM' ? 'period-selected' :'' ">AM</p>
                    <p @click.stop="selectedTime.start.time = 'PM'" :class="selectedTime.start.time == 'PM' ? 'period-selected' :'' ">PM</p>
                  </div>
                </div>
              </div>
              <p class="central-time">(GMT-05:00) Central Time (US & Canada)</p>
              <div class="time-footer">
                <button @click.stop="resetStartTime">Reset</button>
                <button>Done</button>
              </div>
            </div>
        </div>
      </div>
      <div @click="openTimeSelection2()" class="custom-timepicker">
        <p>End Time</p>
        <span>{{`${selectedTime.end.hour}:${selectedTime.end.minutes} ${selectedTime.end.time}`}}</span>
        <i class="icon-stopwatch"></i>
        <div v-if="isShowTime2" class="timepicker-dropdown">
          <div class="time-options-container">
              <div>
                <h4>End Time</h4>
                <div class="time-input">
                  <div>
                    <input v-model="selectedTime.end.hour" class="text-box" pattern="\d*" minlength="2" maxlength="2" type="text" @click.stop="">
                    <span>:</span>
                    <input v-model="selectedTime.end.minutes" class="text-box"  pattern="\d*" minlength="2" maxlength="2" type="text" @click.stop="">
                  </div>
                  <div>
                    <p @click.stop="selectedTime.end.time = 'AM'" :class="selectedTime.end.time == 'AM' ? 'period-selected' :'' ">AM</p>
                    <p @click.stop="selectedTime.end.time = 'PM'" :class="selectedTime.end.time == 'PM' ? 'period-selected' :'' ">PM</p>
                  </div>
                </div>
              </div>
              <p class="central-time">(GMT-05:00) Central Time (US & Canada)</p>
              <div class="time-footer">
                  <button @click.stop="resetEndTime">Reset</button>
                  <button>Done</button>
              </div>
            </div>
        </div>
      </div>
      <div>
        <button :class="['btn accent full', isRequesting ? 'uc-spinner' : '']" @click="createBookingQuote">Get A Quote</button>
      </div>
      <template v-if="isShowMobile">
        <div class="mobile-timepicker" v-show="showTimeMobileTimePicker">
          <div class="time-options-container">
            <div>
              <h4>Start Time</h4>
              <div class="time-input">
                <div>
                  <input v-model="selectedTime.start.hour" class="text-box" pattern="\d*" minlength="2" maxlength="2" type="text" @click.stop="">
                  <span>:</span>
                  <input v-model="selectedTime.start.minutes" class="text-box"  pattern="\d*" minlength="2" maxlength="2" type="text" @click.stop="">
                </div>
                <div>
                  <p @click.stop="selectedTime.start.time = 'AM'" :class="selectedTime.start.time == 'AM' ? 'period-selected' :'' ">AM</p>
                  <p @click.stop="selectedTime.start.time = 'PM'" :class="selectedTime.start.time == 'PM' ? 'period-selected' :'' ">PM</p>
                </div>
              </div>
            </div>
            <div>
              <h4>End Time</h4>
              <div class="time-input">
                <div>
                  <input v-model="selectedTime.end.hour" class="text-box" pattern="\d*" minlength="2" maxlength="2" type="text" @click.stop="">
                  <span>:</span>
                  <input v-model="selectedTime.end.minutes" class="text-box"  pattern="\d*" minlength="2" maxlength="2" type="text" @click.stop="">
                </div>
                <div>
                  <p @click.stop="selectedTime.end.time = 'AM'" :class="selectedTime.end.time == 'AM' ? 'period-selected' :'' ">AM</p>
                  <p @click.stop="selectedTime.end.time = 'PM'" :class="selectedTime.end.time == 'PM' ? 'period-selected' :'' ">PM</p>
                </div>
              </div>
            </div>
            <div class="time-btns">
              <p class="central-time">(GMT-05:00) Central Time (US & Canada)</p>
              <div class="time-footer">
                  <button @click.stop="resetStartTime();resetEndTime()">Reset</button>
                  <button @click="showTimeMobileTimePicker = false">Done</button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <section class="services-sec">
      <div class="container">
        <h1 data-aos="fade-up" data-aos-once="true">Our Services</h1>
        <div class="items" >
          <div class="service" v-for="(service, index) of services" :key="index">
            <img :src="service.image">
            <h3 class="title">{{service.title}}</h3>
            <p class="desc">
              {{service.description}}
            </p>
            <div class="actions">
              <button class="btn block accent" @click="goTo(service.url)">BOOK NOW</button>
              <button class="btn block plain">
                <img src="images/icons/info.svg" alt="">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="introducing-sec">
      <div :class="[isShowMobile ? 'mobile-banner' : 'banner' ]">
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
    <section class="testimonial-sec big-scrn-testimonial">
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
              ??? If you are looking for some awesome, knowledgeable people, these
              are the people I highly recommend. Their friendliness and
              result-driven approach is what I love about them. ???
            </p>
          </div>
          <div class="testimonial" data-aos="fade-down" data-aos-once="true" data-aos-delay="30">
            <h3>John Doe</h3>
            <small>60 y/o Veteran</small>
            <p>
              ??? If you are looking for some awesome, knowledgeable people, these
              are the people I highly recommend. Their friendliness and
              result-driven approach is what I love about them. ???
            </p>
          </div>
          <div class="testimonial" data-aos="fade-down" data-aos-once="true" data-aos-delay="50">
            <h3>John Doe</h3>
            <small>60 y/o Veteran</small>
            <p>
              ??? If you are looking for some awesome, knowledgeable people, these
              are the people I highly recommend. Their friendliness and
              result-driven approach is what I love about them. ???
            </p>
          </div>
          <div class="testimonial" data-aos="fade-down" data-aos-once="true" data-aos-delay="70">
            <h3>John Doe</h3>
            <small>60 y/o Veteran</small>
            <p>
              ??? If you are looking for some awesome, knowledgeable people, these
              are the people I highly recommend. Their friendliness and
              result-driven approach is what I love about them. ???
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial-sect2 small-scrn-testimonial">
      <div class="container">
        <div data-aos="fade" data-aos-once="true">
          <h1>
            What <br />
            Our Clients Say
          </h1>
        </div>
        <div>
          <client-only>
            <carousel
              :perPage="1"
            >
              <slide>
                <div class="testimonial" data-aos="fade-down" data-aos-once="true" data-aos-delay="10">
                  <h3>John Doe</h3>
                  <small>60 y/o Veteran</small>
                  <p>
                    ??? If you are looking for some awesome, knowledgeable people, these
                    are the people I highly recommend. Their friendliness and
                    result-driven approach is what I love about them. ???
                  </p>
                </div>
              </slide>
              <slide>
                <div class="testimonial" data-aos="fade-down" data-aos-once="true" data-aos-delay="30">
                  <h3>John Doe</h3>
                  <small>60 y/o Veteran</small>
                  <p>
                    ??? If you are looking for some awesome, knowledgeable people, these
                    are the people I highly recommend. Their friendliness and
                    result-driven approach is what I love about them. ???
                  </p>
                </div>
              </slide>
              <slide>
                <div class="testimonial" data-aos="fade-down" data-aos-once="true" data-aos-delay="50">
                  <h3>John Doe</h3>
                  <small>60 y/o Veteran</small>
                  <p>
                    ??? If you are looking for some awesome, knowledgeable people, these
                    are the people I highly recommend. Their friendliness and
                    result-driven approach is what I love about them. ???
                  </p>
                </div>
              </slide>
              <slide>
                <div class="testimonial" data-aos="fade-down" data-aos-once="true" data-aos-delay="70">
                  <h3>John Doe</h3>
                  <small>60 y/o Veteran</small>
                  <p>
                    ??? If you are looking for some awesome, knowledgeable people, these
                    are the people I highly recommend. Their friendliness and
                    result-driven approach is what I love about them. ???
                  </p>
                </div>
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import BookingHelper from '../mixins/Booking.vue'
import AOS from 'aos'
export default {
  auth:false,
  name: 'LandingPage',
  layout:'MainLayout',
  head: {
    bodyAttrs: {
      id: 'home-page',
    },

  },
  mixins:[BookingHelper],
  data() {
    return {
      selectedService: {
        label: 'Select Service',
        description: 'pleae select service',
        default:true
      },
      services: [
        {
          title: 'Home Support Services',
          image: '/images/Home Support Services.png',
          url:'home-care',
          description: 'Recovering from home after surgery can limit you with your daily activities. Whether you are recovering from major surgery, childbirth, or plastic surgery, our compassionate caregivers can assist you to a healthy and complete recovery.'
        },
        {
          title: 'Personal Care Services',
          url:'personal-care',
          image: '/images/Personal Care Services.png',
          description: 'Arthritis, physical disabilities, and age-related conditions are some of the few circumstances that prevent patients from caring for themselves. Our caregivers can assist you with daily tasks such as mobility, eating, exercising, and grooming.'
        },
        {
          title: 'Complex Care Services',
          url:'complex-care',
          image: '/images/Complex Care Services.png',
          description: 'Our experienced and highly trained caregivers provide the highest quality of care to both patients and their families. Our goal is to help individuals and their loved ones live happy and fulfilling lives.'
        }
      ],
      times:[],
      dateOptionstatus:false,
      isRequesting:false
    }
  },
  mounted() {
    AOS.init()
  },
  watch: {
    selectedService: {
      handler(val) {
        this.serviceId = val.id
      },
      deep:true
    }
  }
}
</script>
<style>