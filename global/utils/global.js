import Vue from 'vue'
Vue.mixin({
  methods: {
    clone(data) {
      return JSON.parse(JSON.stringify(data))
    },
  },
})
