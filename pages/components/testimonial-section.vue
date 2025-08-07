<template>
  <div
    style="
      justify-content: center;
      display: flex;
      padding: 150px 0px;
      background-color: white;
    "
  >
    <div class="testimonial-box">
      <h2>Leave a Testimonial</h2>
      <textarea
        v-model="testimonial"
        placeholder="Write your thoughts here..."
      ></textarea>
      <button
        :class="['send-btn btn block', isRequesting ? 'uc-spinner black' : '']"
        @click="handleSubmitTestimonial"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<script>
export default {
  auth: true,
  data() {
    return {
      testimonial: '',
      isRequesting: false,
    }
  },
  created() {},
  methods: {
    async handleSubmitTestimonial() {
      try {
        if (this.isRequesting) return
        this.isRequesting = true
        const { data, status } = await this.$axios.post('/testimonial', {
          testimony: this.testimonial,
        })

        setTimeout(() => {
          if (status !== 200 && status !== 201) {
            this.showError(
              'Something went wrong while submitting your testimony!'
            )
          } else {
            this.showSuccess(
              'Successfully submitted your testimony, Thank you!'
            )
            this.testimonial = ''
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
<style scoped>
.testimonial-box {
  background: white;
  padding: 24px 32px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

.testimonial-box h2 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 24px;
  text-align: center;
}

.testimonial-box textarea {
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
  font-size: 14px;
  margin-bottom: 16px;
}

.testimonial-box button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.testimonial-box button:hover {
  background-color: #0056b3;
}
</style>
