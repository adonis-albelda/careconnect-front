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
          <template  v-for="(service, index) of servicesTypes" >
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
          <template v-slot:header>
            <strong><h4>Please set your start date and end date. For one day only, just double tap the same day.</h4></strong>
          </template>
            <template v-slot:input="item">
              <label class="date-lbl">Date</label>
              <div class="selected-date"></div>
            </template>
          </VDatePicker>
        </div>
        <div class="quote-time">
          <h2>Time</h2>
          <div @click="openTimeSelection()" class="custom-timepicker first-timepicker">
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
            <p>Start Time</p>
            <span>{{`${selectedTime.end.hour}:${selectedTime.end.minutes} ${selectedTime.end.time}`}}</span>
            <i class="icon-stopwatch"></i>
            <div v-if="isShowTime2" class="timepicker-dropdown">
              <div class="time-options-container">
                  <div>
                    <h4>Start Time</h4>
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
import BookingHelper from '../mixins/Booking.vue'
export default {
  auth:false,
  layout: 'MainLayout',
  head: {
    bodyAttrs: {
      id: 'get-quote-page',
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
    }
  },
  created() {
    let selectedService = this.$route.query.service

    if (selectedService) this.selectedService.default = false

    if (selectedService == 'personal-service') this.serviceId = 1
    else if (selectedService == 'complex-service') this.serviceId = 2
    else this.serviceId = 3
  },
}
</script>

<style lang="scss" scoped></style>
