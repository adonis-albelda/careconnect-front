<script>
import Vue from 'vue';
import CustomView from '../components/ui/QuoteDialog.vue';
import SuccessView from '../components/ui/SuccessDialog.vue';
const QUOTE_EMAIL = 'quote-dialog-name';
const SUCCESS_EMAIL = 'success-dialog-name';
export default {
  data() {
    return {
      isShowMobile: false,
      showTimeMobileTimePicker:false,
      isShowTime: false,
      isShowTime2: false,
      serviceId:null,
      selectedDates:[],
      selectedTime: {
        start: {
          hour:'09',
          minutes:'00',
          time: 'AM'
        },
        end: {
          hour:'09',
          minutes:'00',
          time: 'AM'
        }
      },
      servicesTypes: [
        {
          label: 'Personal Care Services',
          id:1,
          key:'personal-service',
          description:'Personal care service includes assistance with the private activities of daily living such as: 1. Dressing 2. Bathing'
        },
        {
          label:'Complex Care Services',
          id:2,
          key:'complex-service',
          description:'Complex care refer to services that must be performed by a regulated health professionals.'
        },
        {
          id:3,
          label:'Home Support Service',
          key:'home-service',
          description:'Home support services include assistance in day-to-day activities such as: 1. Light housekeeping and laundry 2. Meal preparation and planning'
        }
      ],
    }
  },
  mounted() {
    window.addEventListener("resize", this.checkWindowSize);
    this.checkWindowSize()
    Vue.dialog.registerComponent(QUOTE_EMAIL, CustomView);
    Vue.dialog.registerComponent(SUCCESS_EMAIL, SuccessView);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkWindowSize);
  },
  methods: {
    checkWindowSize(e) {
      if (window.innerWidth <= 600) {
        this.isShowMobile = true
      } else {
        this.isShowMobile = false
      }
    },
    resetStartTime() {
      this.selectedTime.start.hour = '09'
      this.selectedTime.start.minutes = '00'
      this.selectedTime.start.time = 'AM'
    },
    resetEndTime() {
      this.selectedTime.end.hour = '09'
      this.selectedTime.end.minutes = '00'
      this.selectedTime.end.time = 'PM'
    },
    openTimeSelection() {
      if(this.isShowMobile) {
        this.showTimeMobileTimePicker = !this.showTimeMobileTimePicker
      } else {
        this.isShowTime2 = false
        this.isShowTime = !this.isShowTime
      }
    },
    openTimeSelection2() {
      if (this.isShowMobile) {
        this.showTimeMobileTimePicker = !this.showTimeMobileTimePicker
      } else {
        this.isShowTime = false
        this.isShowTime2 = !this.isShowTime2
      }
    },
    createBookingQuote() {
      if (this.selectedService.default || !this.isStartTimeValid || !this.isEndTimeValid ||
      this.selectedDates.length < 2)  {
        alert('Make sure you have selected already the type of service, dates and time!')
        return
      }
      
      if (this.isRequesting) return
      this.isRequesting = true

      if (this.$auth.user) {
        let payload = {
          start_date: this.selectedDates[0],
          end_date: this.selectedDates[1],
          service_id: this.serviceId,
          start_time: `${this.selectedTime.start.hour}:${this.selectedTime.start.minutes} ${this.selectedTime.start.time}`,
          end_time: `${this.selectedTime.end.hour}:${this.selectedTime.end.minutes} ${this.selectedTime.end.time}`
        }

        this.showSuccess('Please wait while we are proccessing your request')
        
        this.$axios.post('reservations', payload).then(() => {
          this.$dialog.alert('', {
            view: SUCCESS_EMAIL, // can be set globally too
            html: true,
            animation: 'fade',
            backdropClose: true
          })
        }).finally(()=> {
            setTimeout(() => {
              this.isRequesting = false
            }, 2000)
          });

      } else {
        this.goTo('login')
      }  
    },
  },
  computed: {
    isStartTimeValid() {
      if (!this.selectedTime.start.hour) return false
      if (!this.selectedTime.start.minutes) return false
      if (!this.selectedTime.start.time) return false

      return true
    },
    isEndTimeValid() {
      if (!this.selectedTime.end.hour) return false
      if (!this.selectedTime.end.minutes) return false
      if (!this.selectedTime.end.time) return false

      return true
    }
  },
}
</script>