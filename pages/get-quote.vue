<template>
  <div class="get-quote-wrapper">
    <div class="container">
      <a class="back csr" @click.prevent="goTo('services')"
        ><img src="/images/arrow-left.png" /> View all services</a
      >

      <h1>Get a Quote</h1>

      <div class="quote-inner-cont">
        <div class="quote-service">
          <h2>Service</h2>
          <template  v-for="(service, index) of services" >
            <div
              :key="index"
              :class="[
                $route.query.service == service.key
                  ? 'selected-quote'
                  : '',
                  'csr'
              ]"
              @click="goTo('get-quote', {}, {service: service.key})"
            >
              <h3>{{service.label}}</h3>
              <p>
                {{service.description}}
              </p>
            </div>
          </template>
        </div>
        <div class="quote-date">
          <h2>Date</h2>
          <VDatePicker
            range
            :inline="true"
            class="home-datepicker"
            valueType="format"
            v-model="selectedDates"
          >
            <template v-slot:input="item">
              <label class="date-lbl">Date</label>
              <div class="selected-date"></div>
            </template>
          </VDatePicker>
        </div>
        <div class="quote-time">
          <h2>Time</h2>
          <VSelect
            class="time-picker"
            placeholder="Select Start Time"
            v-model="selectedTime.start"
            :clearable="false"
          >
            <template
              v-slot:selected-option-container="{
                option: { label, description },
              }"
            >
              <div class="filter-selected">
                <p>Start Time</p>
                <i class="icon-stopwatch"></i>
                <p>{{ selectedTime.start }}</p>
              </div>
            </template>
            <template v-slot:no-options="{ search, searching, loading }">
              <div class="time-options-container">
                <div>
                  <h4>Start Time</h4>

                  <ul class="time-options">
                    <li
                      v-for="(time, index) of startTimes"
                      :key="`end-${index}`"
                    >
                      <button
                        :class="{ active: selectedTime.start == time }"
                        @click="selectedTime.start = time"
                      >
                        {{ time }}
                      </button>
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
          <VSelect
            :clearable="false"
            class="time-picker"
            placeholder="Select EndTime"
            v-model="selectedTime.end"
          >
            <template
              v-slot:selected-option-container="{
                option: { label, description },
              }"
            >
              <div class="filter-selected">
                <p>End Time</p>
                <i class="icon-stopwatch"></i>
                <p>{{ selectedTime.end }}</p>
              </div>
            </template>
            <template v-slot:no-options="{ search, searching, loading }">
              <div class="time-options-container">
                <div>
                  <h4>Start Time</h4>
                  <ul class="time-options">
                    <li v-for="(time, index) of endTimes" :key="`end-${index}`">
                      <button
                        :class="{ active: selectedTime.end == time }"
                        @click="selectedTime.end = time"
                      >
                        {{ time }}
                      </button>
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
          <p class="central-time">(GMT-05:00) Central Time (US & Canada)</p>
        </div>
      </div>

      <div class="book-btn">
        <button @click="createBookingQuote">Get A Quote</button>
        <a href="#" @click.prevent="goTo('index')">cancel</a>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import CustomView from '../components/ui/QuoteDialog.vue';
import SuccessView from '../components/ui/SuccessDialog.vue';
const QUOTE_EMAIL = 'quote-dialog-name';
const SUCCESS_EMAIL = 'success-dialog-name';

export default {
  auth:false,
  layout: 'MainLayout',
  head: {
    bodyAttrs: {
      id: 'get-quote-page',
    },
  },
  data() {
    return {
      selectedService: {
        label: 'Select Service',
        description: 'pleae select service',
        default: true,
      },
      serviceId:null,
      selectedDates: [],
      selectedTime: {
        start:"9:00 AM",
        end:"9:00 AM"
      },
      services: [
        {
          label: 'Personal Care Services',
          key:'personal-service',
          description:'Personal care service includes assistance with the private activities of daily living such as: 1. Dressing 2. Bathing',
          id:1
        },
        {
          label:'Complex Care Services',
          key:'complex-service',
          description:'Complex care refer to services that must be performed by a regulated health professionals.',
          id:2
        },
        {
          label:'Home Support Service',
          key:'home-service',
          description:'Home support services include assistance in day-to-day activities such as: 1. Light housekeeping and laundry 2. Meal preparation and planning',
          id:3
        }
      ],
      startTimes: [
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '11:30 AM',
        '12:00 PM',
        '12:30 PM',
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM',
      ],
      endTimes: [
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '11:30 AM',
        '12:00 PM',
        '12:30 PM',
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM',
      ],
    }
  },
  mounted() {
    Vue.dialog.registerComponent(QUOTE_EMAIL, CustomView);
    Vue.dialog.registerComponent(SUCCESS_EMAIL, SuccessView);
  },
  created() {
    let selectedService = this.$route.query.service

    if (selectedService == 'personal-service') this.serviceId = 1
    else if (selectedService == 'complex-service') this.serviceId = 2
    else this.serviceId = 3
  },
  methods: {
    createBookingQuote() {
      if (
        !this.serviceId ||
        !this.selectedTime.end ||
        !this.selectedTime.start ||
        this.selectedDates.length < 2
      ) {
        alert('Please select all fields')
        return
      }

      if (this.$auth.user) {
        this.$dialog.alert('', {
          view: SUCCESS_EMAIL, // can be set globally too
          html: true,
          animation: 'fade',
          backdropClose: true
        });

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
    },
  },
}
</script>

<style lang="scss" scoped></style>
