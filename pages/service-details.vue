<template>
  <div class="personal-care-wrapper service-details-wrapper">
    <VDrawer @close="open = !open" align="right" :closeable="true">
      <div v-if="open">
          <div style="padding-bottom: 20px;">
            <h3>{{ selectedService.title }}</h3>
            <p class="service-description">{{ selectedService.short_description }}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <h3>Preferred Dates</h3>
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
            <h3>Preferred Time</h3>
            <div class="quote-time-dropdown">
              <div @click="openTimeSelection()" class="custom-timepicker first-timepicker">
                <div style="display: flex; align-items: center; gap:1px;">
                  <i class="icon-stopwatch"></i>
                  <p style="padding-left: 0px;">Start Time</p>
                </div>
                <span>{{`${selectedTime.start.hour}:${selectedTime.start.minutes} ${selectedTime.start.time}`}}</span>
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
                <div style="display: flex; align-items: center; gap:1px;">
                  <i class="icon-stopwatch"></i>
                  <p style="padding-left: 0px;">End Time</p>
                </div>
                <span>{{`${selectedTime.end.hour}:${selectedTime.end.minutes} ${selectedTime.end.time}`}}</span>
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
          </div>
          <p style="padding: 10px 0px; font-size: 14px;">(GMT-05:00) Central Time (US & Canada)</p>
          <div class="book-btn">
            <button :class="[isRequesting ? 'uc-spinner' : '']" @click="createBookingQuote">Submit Request</button>
            <a href="#" @click.prevent="open = false">cancel</a>
          </div>
      </div>
    </VDrawer>
    <div class="container">
      <div class="personalcare-banner">
        <img :src="selectedService.banner" />
      </div>

      <div class="personal-inner-cont">
        <div class="p-col-1">
          <div>
            <h1>{{ selectedService.title }}</h1>
          </div>
        </div>

        <div class="p-col-2">
          <div class="service-desc">
            <p class="normal-text">
                {{ selectedService.short_description }}
            </p>
          </div>

          <div class="service-list">
            <p class="sub-title psubtitle" v-html="selectedService.description">
            </p>
            <p class="sub-title psubtitle">
              These services include:
            </p>

            <ul>
              <li v-for="(item, index) in selectedService.assistance" :key="index">
                {{ item }}
              </li>
            </ul>
            <a
              href="#"
              class="personal-care-btn"
              @click.prevent="open = true"
              >Request a Quote</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookingHelper from '../mixins/Booking.vue'

export default {
  layout: 'MainLayout',
  auth: false,
  head: {
    bodyAttrs: {
      id: 'personal-care-page',
      class: 'services-page',
    },
  },
  mixins: [BookingHelper],
  data() {
    return {
      open: false,
      selectedService: {},
      dateOptionstatus:false,
    }
  },
  created() {
    this.getServiceDetails()
  },
  methods: {
    async getServiceDetails() {
      const { data, status } = await this.$axios.get(`/services/${this.$route.query.type}`)
      this.selectedService = data
    }
  }
}
</script>

<style lang="scss">
  .personalcare-banner img {
    width: 100%;
  }

  .mx-datepicker {
    width: 100%;
  }

  .vue-simple-drawer .close-btn .leftright,
  .vue-simple-drawer .close-btn .rightleft {
    background-color: #51473e;
  }

  .quote-time-dropdown {
    display: flex;
    width: 100%;
    gap: 10px;
  }

  .quote-time-dropdown .custom-timepicker {
    width: 50%;
  }

  .quote-time-dropdown .custom-timepicker p {
    padding-left: 20px;
  }

  .service-details-wrapper .book-btn {
    display: flex;
    width: 100%;
    gap: 20px;
    padding-top: 20px;
  }

  .service-details-wrapper .book-btn button,
  .service-details-wrapper .book-btn a {
    width: 50%;
  }

  .service-details-wrapper .custom-timepicker {
    position: initial;
  }

  .service-details-wrapper .quote-time-dropdown {
    position: relative;
  }

  .service-details-wrapper .quote-time-dropdown .timepicker-dropdown {
    left: 60px;
  }

  .service-details-wrapper   .custom-timepicker i {
    position: initial;
  }
</style>