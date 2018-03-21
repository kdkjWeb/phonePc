/**
 * Created by kdkjPC on 2018/3/16.
 */
export default {
  data(){
    return {
      detail:{},
      queryId:"",
      hrefs:"",
      editorV:false,
      wid:""
    }
  },
  methods:{
    getDoc(){
      this.$g({
        url:"news/getNewsById",
        params:{
          id:this.queryId
        },
        callback:(res)=>{
          this.detail = res.data
          if(this.detail.picture == 1) {
            this.editorV = true;
          }else {
            this.editorV = false;
          }
        }
      });
    },
    editor(){
      this.$router.push({
        path:'/editor',
        query:{id:this.queryId}
      });
    },
  },
  watch:{
    $route(){
      this.queryId = this.$route.query.id;
      this.getDoc();
    }
  },
  mounted(){
    this.wid = this.$refs.contentBox.clientWidth;
    this.queryId = this.$route.query.id;
    this.hrefs = this.$baseU;
    this.getDoc();
  },
  updated(){

    var img = new Image();
    var len = this.$refs.contentBox.querySelectorAll("img");
    len.forEach((e)=>{
      img.src = e.src;
      if(img.width >= this.wid) {
        e.style.width = "100%";
      }
    });
  },
  deactivated(){
    this.$destroy();
  }
}
