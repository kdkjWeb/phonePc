export default{
  data(){
    return {
      currentPage:1,
      departId:null,
      disable:false,
      name:"",
      pageSize:null,
      total:null,
      tableData: []
    }
  },
  methods:{
    /**
     * 获取当前这条数据的内容
     */
    handleCurrentChange(val){
      console.log(val);
      if(val==null) {
        this.name="";
        this.departId = null;
        this.disable = false;
        return ;
      }
      this.disable = true;
      this.name = val.departName;
      this.departId = val.departId;
    },
    /**
     * 改变当前点击的那一页
     * @param val
     */
    changeCurrentChange(val) {
      this.currentPage = val;
      this.list();
    },
    /**
     * 获取列表
     */
    list(){
      this.$p({
        url:"dep/selectDep",
        params:{
          pageNum:this.currentPage
        },
        callback:(res)=>{
          this.pageSize = res.data.pageSize;
          this.total = res.data.total;
          this.tableData = res.data.list;
          var d = this.tableData;
          this.tableData = d;
        }
      });
    },
    /**
     * 点击顶部的修改按钮
     */
    modify(){
      var p = this.departId;
      if(p) {
        this.disable = false;
      }else {
        this.$message({
          message: '请选择要修改的部门',
          type: 'warning',
          duration:1500
        });
      }
    },
    /**
     * 用户点击新增按钮
     */
    add(){
      this.name="";
      this.departId = null;
      this.disable = false;
    },
    /**
     * 用户信息保存按钮
     */
    save(){
      if(this.name==="") {
        this.$message({
          message: '请填写部门名称',
          type: 'warning',
          duration:1500
        });
        return;
      }
      var urls = "";
      if(this.departId) {
        urls = "dep/updateDep"
      }else {
        urls = "dep/addDep"
      }
      this.$p({
        url:urls,
        params:{
          departId:this.departId,
          departName:this.name
        },
        callback:(res)=>{
          if(urls == "dep/updateDep") {
            this.$message({
              message: '修改数据成功',
              type: 'success',
              duration:1500
            });
          }else{
            this.$message({
              message: '新增数据成功',
              type: 'success',
              duration:1500
            });
            this.name= "";
          }
          this.list();
        }
      });
    },
    /**
     * 删除用户
     */
    remove(){
      var u = this.departId;
      if(u) {
        this.$g({
          url:'dep/deletDep',
          params:{
            depid:u
          },
          callback:(res)=>{
            this.$message({
              message: '删除成功',
              type: 'success',
              duration:1500
            });
            this.list();
          }
        });
      }else {
        this.$message({
          message: '请选择要删除的用户',
          type: 'warning',
          duration:1500
        });
      }
    },
  },
  mounted(){
    this.list();
  }
}
