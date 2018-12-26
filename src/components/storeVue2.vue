  <template>
   <div>
      storeVue2
      footerISshow: {{isShow}}
      <br/>
      <!-- num: {{num}} -->
   </div>
  </template>

<script>
import store from '@/store'
import {mapState} from 'vuex'
export default {
  store,
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      isShow: state => state.footerStatus.showFooter
    })
    // isShow () {
    //   return this.$store.getters.isShow
    // },
    // num () {
    //   return this.$store.getters.getChangedNum
    // }
  },
  components: {

  }
}
</script>

  <style>

  </style>
