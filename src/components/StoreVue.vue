<template>
  <div>7777 {{isShow}}
     数量： {{newNum}}
    <div> <button @click='update'>触发修改</button></div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  store,
  data () {
    return {}
  },
  computed: {
    isShow () {
      return this.$store.getters.isShow
    },
    newNum () {
      return this.$store.getters.getChangedNum
    }
  },
  methods: {
    update () {
      this.$store.dispatch('hideFooter')
      this.$store.dispatch('getNewNum', 6)
    }
  },
  components: {}
}
</script>

<style>
</style>
