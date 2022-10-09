import Vue from 'vue'
Vue.mixin({
  methods: {
    goTo(name, params, queries) {
      this.$router.push({name:name, params:params, query:queries})
    },
    isRouteSelected(routeName) {
      return this.$route.name === routeName
    }
  },
})
