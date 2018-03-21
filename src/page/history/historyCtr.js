export default{
    data(){
        return {
            height: 0,
            currentPage: 1,
            pageSize:null,
            total:null,
            tableData: []
        }
    },
    methods:{
        //	currentPage 改变时会触发  当前页currentPage
        handleCurrentChange(val) {
            this.currentPage = val;
            this.list();
          },
      /**
       * 获取消息历史列表
       */
      list(){
        this.$g({
          url:'message/selectMessage',
          params:{
            pageNum:1
          },
          callback:(res)=>{
            this.tableData = res.data.list;
            this.total = res.data.total;
            this.pageSize = res.data.pageSize;
          }
        });
      }

    },
    created() {
		this.height = (window.innerHeight - 160) + 'px';
    },
    mounted(){
      this.list();
        // 监听窗口改变重置高度
        window.addEventListener('resize', () => {
            this.height = (window.innerHeight - 160) + 'px';
        })
    }
}
