/**
 * Created by kdkjPC on 2018/3/15.
 */
export default {
  data(){
    return {
      radio: '1',
      currentPage: 1,  //初始化当前页 为第几页
      pageSize:null,       //每一页显示的条数
      total:null,         //分页的总条数
      alert1:false,
      textVCount:100,
      textV:'',
      dis:false,
      tableData: [],
      detail:{}
    }
  },
  methods:{
    /**
     * 查看文章详情 跳转文章详情页面
     * @param val
     */
    showDoc(val) {
      this.$router.replace({
        path:'/showDoc',
        query:{id:val.id}
      })
    },
    /**
     * 查看当前页
     */
    currentPagefun(val){
      this.currentPage = val;
      this.list();
    },
    /**
     * 跳转新建页面
     */
    newCreate(){
      this.$router.push({
        path:'/newCreate'
      });
    },
    /**
     * 获取列表数据
     */
    list(){
      this.$g({
        url:"news/selectMyNews",
        params:{
          pageNum:this.currentPage
        },
        callback:(res)=>{
          this.pageSize = res.data.pageSize;
          this.total = res.data.total;
          this.tableData = res.data.list;
          this.showDoc(this.tableData[0]);
        }
      });
    },
    closeLayer(){
      this.alert1 = false;
    },
    sendMessage(){
      this.alert1 = true;
    },
    textValue(){

    }
  },

  mounted() {
    this.list();
  },
}
