<template>
  <div class="quote-dialog">
    <div class="dialog-header">
      <h1>Thank you</h1>
      <p>Thank you for choosing Care Connect!</p>
    </div>
    <div class="dialog-body">
      <div class="send-quote">
        <ValidationObserver v-slot="{ handleSubmit, reset }">
          <form
            @submit.prevent="handleSubmit(handleBookingQRequest)"
            @reset.prevent="reset"
          >
            <p>
              Please enter your email address and we will mail the quote to you,
              or
              <a href="#" @click.prevent="registerAccount"
                >Create an Account!</a
              >
            </p>
            <ValidationProvider
              v-slot="{ errors }"
              name="Email"
              rules="required|email"
            >
              <div :class="['email-cont', errors[0] ? 'error-msg': '']">
                <label>Email Address</label>
                <input v-model="email" class="text-box" />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <div class="book-btn">
              <button>Send</button>
              <a href="#" @click.prevent="registerAccount">Create an Account</a>
            </div>
          </form>
        </ValidationObserver>
      </div>
      <!-- <div class="quote-sent">
          <p>We sent the quote to you email!</p>
          <button>Okay</button>
      </div> -->
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
