<template>
  <div class="quote-dialog">
    <div class="dialog-header">
      <h1>Thank you</h1>
      <p>Thank you for choosing Care Connect!</p>
    </div>
    <div class="dialog-body">
      <div class="quote-sent">
          <p>We will send the quote to your email shortly.</p>
          <button @click="$parent.close()">Okay</button>
      </div>
    </div>
  </div>
</template>
<script>
import { resolve } from 'path'

export default {
  name: 'LandingPage',
  data() {
    return {
      email:null
    }
  },
  methods: {
    registerAccount() {
      this.$parent.close()
      this.$parent.$options.propsData.options.context.$router.push({ name: 'register' })
    },
    handleBookingQRequest() {
      // this.$parent.$options.propsData.options.context.$axios.post('/inquiry', this.inquiry).then((res) => {
      //   console.log(res, 'test')
      // })
    }
  },
}
</script>
