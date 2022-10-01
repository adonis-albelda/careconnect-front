<template>
  <div id="landing-page">
    <section class="top-banner">
      <div class="banner-content">
        <div class="slogan">
          <h1 data-aos="fade-in">Care That Comes to You</h1>
          <h3 data-aos="fade-up">Let us provide you with high-quality care!</h3>
        </div>
      </div>
    </section>
    <div class="booking-options">
      <VSelect :clearable="false" v-model="selectedService" class="list-services"  :options="options" placeholder="dsdadad">
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
      <VDatePicker range v-model="selectedDates" :editable="false" class="home-datepicker"  valueType="format">
        <template v-slot:input="item">
          <label class="date-lbl">Date</label>
          <div class="selected-date">
            {{selectedDates.length ? `${selectedDates[0]}-${selectedDates[1]}` : 'Select Dates'}}
          </div>
        </template>
        <template class="datepicker-btns" v-slot:footer="item">
          <button>CANCEL</button>
          <button>OKAY</button>
        </template>
      </VDatePicker>
      <VSelect :clearable="false" class="time-picker" :options="times" placeholder="Select Start Time" v-model="selectedTime.start"> 
        <template v-slot:selected-option-container="{option: {label, description}}">
          <div class="filter-selected">
            <i class="icon-stopwatch"></i>
            <p>Start Time</p>
            <p>{{selectedTime.start}}</p>
          </div>
        </template> 
        <template v-slot:no-options="{ search, searching, loading }">
            <div class="time-options-container">
              <div>
                <h4>Start Time</h4>
                <ul class="time-options">
                  <li v-for="(time,index) of startTimes" :key="`end-${index}`">
                    <button :class="{active: selectedTime.start == time}" @click="selectedTime.start = time">{{time}}</button>
                  </li>
                </ul>
              </div>
            </div>
        </template>
        <template v-slot:list-footer="footer">
            <p class="central-time">(GMT-05:00) Central Time (US & Canada)</p>
            <div class="time-footer">
                <button>Reset</button>
                <button>Done</button>
            </div>
        </template>
      </VSelect>
      <VSelect :clearable="false" class="time-picker" :options="times" placeholder="Select End Time" v-model="selectedTime.end">
        <template v-slot:selected-option-container="{option: {label, description}}">
          <div class="filter-selected">
            <i class="icon-stopwatch"></i>
            <p>End Time</p>
            <p>{{selectedTime.end}}</p>
          </div>
        </template> 
        <template v-slot:no-options="{ search, searching, loading }">
            <div class="time-options-container">
              <div>
                <h4>End Time</h4>
                <ul class="time-options">
                  <li v-for="(time,index) of endTimes" :key="`end-${index}`">
                    <button :class="{active: selectedTime.end == time}" @click="selectedTime.end = time">{{time}}</button>
                  </li>
                </ul>
              </div>
            </div>
        </template>
          <template v-slot:list-footer="footer">
              <p class="central-time">(GMT-05:00) Central Time (US & Canada)</p>
              <div class="time-footer">
                  <button>Reset</button>
                  <button>Done</button>
              </div>
        </template>
      </VSelect>
      <div>
        <button class="btn accent full uc-spinner" @click="createBookingQuote">Get A Quote</button>
      </div>
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
              <button class="btn block accent">BOOK NOW</button>
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
    <section class="testimonial-sec">
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
  </div>
</template>
<script>
import Vue from 'vue';
import CustomView from '../components/ui/QuoteDialog.vue';
const QUOTE_EMAIL = 'quote-dialog-name';

import AOS from 'aos'
export default {
  name: 'LandingPage',
  layout:'MainLayout',
  data() {
    return {
      selectedService: {
        label: 'Select Service',
        description: 'pleae select service',
        default:true
      },
      selectedDates:[],
      selectedTime: {
        start:null,
        end:null
      },
      options: [
        {
          label: 'Personal Care Services',
          description:'Personal care service includes assistance with the private activities of daily living such as: 1. Dressing 2. Bathing'
        },
        {
          label:'Complex Care Services',
          description:'Complex care refer to services that must be performed by a regulated health professionals.'
        },
        {
          label:'Home Support Service',
          description:'Home support services include assistance in day-to-day activities such as: 1. Light housekeeping and laundry 2. Meal preparation and planning'
        }
      ],
      services: [
        {
          title: 'Home Support Services',
          image: '/images/Home Support Services.png',
          description: 'Recovering from home after surgery can limit you with your daily activities. Whether you are recovering from major surgery, childbirth, or plastic surgery, our compassionate caregivers can assist you to a healthy and complete recovery.'
        },
        {
          title: 'Personal Care Services',
          image: '/images/Personal Care Services.png',
          description: 'Arthritis, physical disabilities, and age-related conditions are some of the few circumstances that prevent patients from caring for themselves. Our caregivers can assist you with daily tasks such as mobility, eating, exercising, and grooming.'
        },
        {
          title: 'Complex Care Services',
          image: '/images/Complex Care Services.png',
          description: 'Our experienced and highly trained caregivers provide the highest quality of care to both patients and their families. Our goal is to help individuals and their loved ones live happy and fulfilling lives.'
        }
      ],
      times:[],
      startTimes: [
       "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "3:30 PM",
      ],
      endTimes: [
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "3:30 PM",
      ],
      time : [
        {
          label: '9:00',
          period: 'AM',
        },
        {
          label: '9:30',
          period: 'AM',
        },
        {
          label: '10:00',
          period: 'AM',
        },
        {
          label: '10:30',
          period: 'PM',
        },
        {
          label: '11:00',
          period: 'AM',
        },
        {
          label: '11:30',
          period: 'AM',
        },
        {
          label: '12:00',
          period: 'PM',
        },
        {
          label: '12:30',
          period: 'PM',
        },
        {
          label: '2:00',
          period: 'PM',
        },
        {
          label: '2:30',
          period: 'PM',
        },
        {
          label: '3:00',
          period: 'PM',
        },
        {
          label: '3:30',
          period: 'PM',
        },
        {
          label: '4:00',
          period: 'PM',
        },
        
      ]
    }
  },
  mounted() {
    AOS.init()
    Vue.dialog.registerComponent(QUOTE_EMAIL, CustomView);

    // this.$dialog.alert('dsdsa', {
    //   view: QUOTE_EMAIL, // can be set globally too
    //   html: true,
    //   animation: 'fade',
    //   backdropClose: true
    // });
    
  },
  methods :  {
    createBookingQuote() {
      if (this.selectedService.default || !this.selectedTime.end || !this.selectedTime.start ||
        this.selectedDates.length < 2)  {
          alert('Please select all fields')
          return
        }

      if (this.$auth.user) {

      } else {
        this.$dialog.alert('', {
          view: QUOTE_EMAIL, // can be set globally too
          html: true,
          animation: 'fade',
          backdropClose: true,
          context: this
        }) .catch(function (e) {
          console.log(e)
          // This will be triggered when user clicks on cancel
        });
      }  
    }
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