<template>
  <div class="contact-wrapper">
    <div class="contact-img">
      <img src="/images/paper-plane.png" />
    </div>
    <div class="contact-banner"></div>
    <div class="container">
      <div class="contact-inner-cont">
        <div class="contact-col-1">
          <h2>Contact Us</h2>
          <p>
            Let us know about your questions or concerns. We will get back to
            you as soon as we can.
          </p>

          <div class="contacts">
            <a href="#">
              <i class="icon-mail"></i>
              admin@ucarecon.ca
            </a>
            <a href="#">
              <i class="icon-smartphone"></i>
              416-262-4071
            </a>
            <a href="#">
              <i class="icon-location_pin"></i>
              120 Shelborne North York On. Canada M6B 1M7
            </a>
          </div>
        </div>
        <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }">
          <form
            @submit.prevent="handleSubmit(handleIquiry)"
            @reset.prevent="reset"
          >
            <div class="contact-col-2">
              <ValidationProvider
                v-slot="{ errors }"
                name="Name"
                rules="required"
              >
                <div :class="['input-cont', errors[0] ? 'error-msg' : '']">
                  <label>Name <span>*</span></label>
                  <div class="input-inner-cont">
                    <div>
                      <input
                        v-model="inquiry.first_name"
                        class="text-box"
                        type="text"
                        placeholder="First name"
                      />
                      <span>{{ errors[0] }}</span>
                    </div>
                    <div>
                      <input
                        v-model="inquiry.last_name"
                        class="text-box"
                        type="text"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="Email"
                rules="required|email"
              >
                <div :class="['input-cont', errors[0] ? 'error-msg' : '']">
                  <label>Email Address <span>*</span></label>
                  <div>
                    <input
                      v-model="inquiry.email_address"
                      class="text-box"
                      type="email"
                      placeholder="@mail.com"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </div>
              </ValidationProvider>
              <!-- rules="required|digits|max:12|min:12" -->
              <ValidationProvider name="Phone number" v-slot="{ errors }">
                <div :class="['input-cont', errors[0] ? 'error-msg' : '']">
                  <label>Phone number <span>*</span></label>
                  <div>
                    <input
                      v-model="inquiry.phone_number"
                      class="text-box"
                      type="number"
                      placeholder="0000 0000 000000"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </div>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="Message"
                rules="required"
              >
                <div>
                  <div :class="['input-cont', errors[0] ? 'error-msg' : '']">
                    <label>Message <span>*</span></label>
                    <div>
                      <textarea
                        v-model="inquiry.message"
                        class="text-box"
                        placeholder="Hello..."
                      ></textarea>
                    </div>
                    <span>{{ errors[0] }}</span>
                  </div>
                  <button
                    :class="[
                      'send-btn btn block',
                      isRequesting ? 'uc-spinner black' : '',
                    ]"
                  >
                    Send
                  </button>
                </div>
              </ValidationProvider>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  auth: false,
  layout: 'MainLayout',
  data() {
    return {
      inquiry: {
        first_name: '',
        last_name: '',
        email_address: '',
        phone_number: '',
        message: '',
      },
      isRequesting: false,
      defaultPayload: {},
    }
  },
  head: {
    bodyAttrs: {
      id: 'contact-page',
    },
  },
  created() {
    this.defaultPayload = this.clone(this.inquiry)
  },
  methods: {
    async handleIquiry() {
      try {
        if (this.isRequesting) return
        this.isRequesting = true
        const { data, status } = await this.$axios.post('/inquiry', this.inquiry)
  
        setTimeout(() => {
          if (status !== 200 && status !== 201) {
            this.showError('Something went wrong processing your request!')
          } else {
            this.showSuccess(
              'Successfully submitted your inquiry, will contact you soon!'
            )
            this.inquiry = this.clone(this.defaultPayload)
          }
  
          this.$nextTick(() => {
            this.$refs.form.reset()
          })
  
          this.isRequesting = false
        }, 3000)
      } catch (e) {
        this.isRequesting = false
        this.showError('Something went wrong processing your request!')
      }
    },
  },
}
</script>