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
    img(){
      var img = new Image();
      var len = this.$refs.contentBox.querySelectorAll("img");
      len.forEach((e)=>{
        img.src = e.src;
        var k = setInterval(()=>{
          if(img.width != 0 ) {
            if(img.width >= this.wid) {
              e.style.width = "100%";
            }else {
              e.style.width = img.width +"px";
            }
            clearInterval(k);
          }
        },0);

      });
    }
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
    this.img();
  },
  updated(){
    this.img();
  },
  deactivated(){
    this.$destroy();
  }
}
