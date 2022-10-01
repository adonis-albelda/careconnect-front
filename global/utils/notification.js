import Vue from 'vue'
Vue.mixin({
  methods: {
    showSuccess(message) {
      this.$notify({
        group: 'notify',
        title: 'Success!',
        text: message,
        type:'success'
      })
    },
    showError(message) {
      this.$notify({
        group: 'notify',
        title: 'Error!',
        text: 'Something went wrong processing your request!',
        type:'success'
      })
    }
  },
})
