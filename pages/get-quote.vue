<template>
    <div class="get-quote-wrapper">
        <div class="container">
            <a class="back" href="#"><img src="/images/arrow-left.png"> View all services</a>
        
            <h1>Get a Quote</h1>

            <div class="quote-inner-cont">
                <div class="quote-service">
                    <h2>Service</h2>
                    <div class="selected-quote">
                        <h3>Personal Care Services</h3>
                        <p>Trained and certified Personeal Support Workers provide all personal support services</p>
                    </div>
                    <div>
                        <h3>Complex Care Services</h3>
                        <p>Medication administration, Vital signs monitoring, Wound care, Chatheter care, Foot care</p>
                    </div>
                    <div>
                        <h3>Home Support Services</h3>
                        <p>We offer the option of Live-In caregivers for short or long term placements.</p>
                    </div>
                </div>
                <div class="quote-date">
                    <h2>Date</h2>
                     <VDatePicker :inline="true" class="home-datepicker"  valueType="format">
                        <template v-slot:input="item">
                        <label class="date-lbl">Date</label>
                        <div class="selected-date"></div>
                        </template>
                    </VDatePicker>
                </div>
                <div class="quote-time">
                    <h2>Time</h2>
                    <VSelect class="time-picker" placeholder="Select Time"> 
                        <template v-slot:no-options="{ search, searching, loading }">
                            <div class="time-options-container">
                            <div>
                                <h4>Start Time</h4>
                                <ul class="time-options">
                                <li><button>9:00 am</button></li>
                                <li><button>9:30 AM</button></li>
                                <li><button>10:00 am</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
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
                    <VSelect class="time-picker" placeholder="Select Time"> 
                        <template v-slot:no-options="{ search, searching, loading }">
                            <div class="time-options-container">
                            <div>
                                <h4>Start Time</h4>
                                <ul class="time-options">
                                <li><button>9:00 am</button></li>
                                <li><button>9:30 AM</button></li>
                                <li><button>10:00 am</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
                                <li><button>10:30 AM</button></li>
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
                <a href="#">Get A Quote</a>
                <a href="#">cancel</a>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  layout: 'MainLayout',
  head: {
    bodyAttrs: {
      id: 'get-quote-page',
    },
  },

//   methods: {
//      dropdownShouldOpen(VueSelect) {
//       return false
//     },
//   }
}
</script>

<style lang="scss" scoped></style>