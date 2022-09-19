import Vue from 'vue'
Vue.mixin({
  methods: {
    goTo(name, params, queries) {
      this.$router.push({name:name, params:params, query:queries})
    },
    isActive(routeName) {
      return this.$route.name === routeName
    }
  },
})
