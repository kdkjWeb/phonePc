/**
 * Created by kdkjPC on 2018/3/16.
 */
export default {
  data(){
    return {
      detail:{}
    }
  },
  methods:{
    getDoc(id){
      this.$g({
        url:"news/getNewsById",
        params:{
          id:id
        },
        callback:(res)=>{
          this.detail = res.data
        }
      });
    }
  },
  watch:{
    $route(){
      this.getDoc(this.$route.query.id)
    }
  },
  mounted(){
    var len = this.$refs.contentBox.querySelectorAll("img");
    len.forEach((e)=>{
      e.style.width="100%";
    });
    this.getDoc(this.$route.query.id);
  }
}
