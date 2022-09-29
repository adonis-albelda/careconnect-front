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
              <img class="big-screen" src="/images/icons/mail-white.svg" />
              <img class="small-screen" src="images/icons/mail.svg" alt="for health" />
              admin@ucarecon.ca
            </a>
            <a href="#">
              <img class="big-screen" src="/images/icons/smartphone-white.svg" />
              <img class="small-screen" src="images/icons/smartphone.svg" alt="for health" />
              416-262-4071
            </a>
            <a href="#">
              <img class="big-screen" src="/images/icons/location-white.svg" />
              <img class="small-screen" src="images/icons/location_pin.svg" alt="for health" />
              120 Shelborne
              North York On. Canada M6B 1M7
            </a>
          </div>
        </div>
        <ValidationObserver v-slot="{ handleSubmit, reset }">
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
                <div :class="['input-cont', errors[0] ? 'error-msg': '']">
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
                <div :class="['input-cont', errors[0] ? 'error-msg': '']">
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
              <ValidationProvider name="Phone number"  v-slot="{errors}">
                <div :class="['input-cont', errors[0] ? 'error-msg': '']">
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
              > <div>
                  <div :class="['input-cont', errors[0] ? 'error-msg': '']">
                    <label>Message <span>*</span></label>
                    <div>
                      <textarea
                        v-model="inquiry.message"
                        class="text-box"
                        placeholder="Type your inquiry here..."
                      ></textarea>
                    </div>
                    <span>{{ errors[0] }}</span>
                  </div>
                  <button class="send-btn btn block">Send</button>
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
    }
  },
  head: {
    bodyAttrs: {
      id: 'contact-page',
    },
  },
  created() {
  
  },
  methods: {
    handleIquiry() {
      this.$axios.post('/inquiry', this.inquiry).then((res) => {
        console.log(res, 'test')
      })
    },
  },
}
</script>

<style scooped lang="scss">
// .main-nav {
//   display: none;
// }
.contact-col-1 {
  // position: relative;
  @media (max-width: 1100px) {
    padding-right: 30px !important;
  }
  @media (max-width: 800px) {
    padding-right: 0 !important;
    width: 100% !important;
  }

  h2 {
    @media (max-width: 800px) {
      color: #000 !important;
    }
    @media (max-width: 500px) {
      font-size: 24px !important;
      margin-bottom: 0 !important;
    }
  }

  p {
    @media (max-width: 800px) {
      margin-bottom: 15px !important;
      color: #000 !important;
    }
    @media (max-width: 500px) {
      font-size: 17px;
    }
  }

  .contacts {
    flex-direction: column;
    @media (max-width: 800px) {
      align-items: flex-start;
    }
    @media (max-width: 767px) {
      gap: 7px !important;
    }

    a {
      @media (max-width: 800px) {
        justify-content: center;
        color: #000 !important;
      }
      @media (max-width: 500px) {
        font-size: 17px !important;
      }

      img.big-screen {
        @media (max-width: 800px) {
          display: none;
        }
      }
      img.small-screen {
        display: none;
        @media (max-width: 800px) {
          display: block;
        }
      }
    }
  }
}

form .contact-col-1 .input-cont {
  input {
    @media (max-width: 800px) {
      height: 45px;
    }
  }
}

.input-inner-cont {
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 10px !important;
  }
}

.input-inner-cont > div {
  @media (max-width: 500px) {
    width: 100% !important;
  }
}

.contact-wrapper {
  position: relative;
  @media (max-width: 800px) {
    background: #fff;
  }
}

.contact-wrapper .container {
  @media (max-width: 1350px) {
    max-width: 991px;
  }
  @media (max-width: 1100px) {
    max-width: 767px;
  }
  @media (max-width: 800px) {
    max-width: 550px;
  }
  @media (max-width: 600px) {
    max-width: 90%;
  }
}

.newsletter-sec .container {
  @media (max-width: 1350px) {
    max-width: 991px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  @media (max-width: 1100px) {
    max-width: 767px;
  }
  @media (max-width: 800px) {
    max-width: 550px;
  }
  @media (max-width: 600px) {
    max-width: 90%;
  }

  h2 {
    @media (max-width: 600px) {
      font-size: 20px;
      margin-bottom: 5px;
    }
  }
}

.newsletter-sec .btn {
  @media (max-width: 800px) {
   height: 50px; 
  }
}

.newsletter-sec .email-box input {
  @media (max-width: 800px) {
    height: 50px;
    font-size: 17px;
  }
}

.contact-inner-cont > span {
  @media (max-width: 1350px) {
    width: 50%;
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 50px;
  }
}

.contact-img {
  position: absolute;
  bottom: 0;
  left: 0;
  @media (max-width: 1440px) {
    width: 500px;
  }
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 1024px) {
    width: 300px;
  }
  @media (max-width: 800px) {
    display: none;
  }
}

.contact-wrapper .contact-inner-cont {
  @media (max-width: 800px) {
    flex-direction: column;
  }
}

.contact-col-2 .text-box {
  @media (max-width: 800px) {
   height: 50px !important;
   border: 1px solid #aaa;
   font-size: 18px;;
  }
  &::placeholder {
    @media (max-width: 800px) {
      color: #b9b4b4 !important;
    }
  }
  &:-ms-input-placeholder {
    @media (max-width: 800px) {
      color: #b9b4b4 !important;
    }
  }
  &::-ms-input-placeholder {
    @media (max-width: 800px) {
      color: #b9b4b4 !important;
    }
  }
}

.contact-col-2 {
  label {
    @media (max-width: 800px) {
      color: #000 !important;
    }
  }
  .send-btn {
    @media (max-width: 800px) {
      background: #183891;
      color: #fff;
      font-size: 18px;
      height: 45px;
    }
  }

  textarea {
    @media (max-width: 800px) {
      padding-top: 10px;
    }
  }
}

.newsletter-sec > div p {
    font-size: 14px;
}

</style>