/**
 * Created by kdkjPC on 2018/3/15.
 */
export default {
  data(){
    return {
      radio: 'department',
      currentPage: 1,  //初始化当前页 为第几页
      pageSize:null,       //每一页显示的条数
      total:null,         //分页的总条数
      alert:false,
      tableData: [],
      detail:{},
      currentRow:null,
    //  ---------------------message-------------------------
      textVCount:70,
      textV:'',
      searchV:"",
      allPData:[],
      selectPD:[], //左边列表
      selectPData:[], //选择人员数组
      removePD:[],
      phoneV:"",
      sendArr:[],
    }

  },
  methods:{
    /**
     * 查看文章详情 跳转文章详情页面
     * @param val
     */
    showDoc(val) {
      this.detail = val;
        this.$router.push({
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
      if(localStorage.type == 0) {
        this.$message({
          message: '你没有权限新建消息',
          type: 'error',
          duration:1500
        });
        return ;
      }
      this.$refs.singleTable.setCurrentRow("");
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
    /**
     * 删除文件列表
     */
    remove(){
      if(localStorage.type == 0) {
        this.$message({
          message: '你没有权限删除消息',
          type: 'error',
          duration:1500
        });
        return ;
      }
      var id = this.detail.id;
      if(id) {
        this.$g({
          url:'news/deletNews',
          params:{
            newsids:id
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
    /**
     * 关闭弹窗
     */
    closeLayer(){
      this.alert = false;
    },
    /**
     * 打开消息页面
     */
    sendMessage(){
      if(localStorage.type == 0) {
        this.$message({
          message: '你没有权限发送消息',
          type: 'error',
          duration:1500
        });
       return ;
      }
      this.alert = true;
      this.allPerson();
    },
    /*-----------------message-------------------*/
    /**
     * 选中当前人员
     */
    handleSelectionChange(val) {
      this.selectPD = val;
    },
    removeSelectionChange(val) {
      this.removePD = val;
    },
    /**
     * 添加到左边
     */
    add(){
      if(this.selectPD.length == 0) {
        this.$message({
          message: '请选择人员',
          type: 'warning',
          duration:1500
        });
        return ;
      }
      this.selectPData = JSON.parse(JSON.stringify(this.selectPD));
    },
    /**
     * 添加手机号码
     */
    addPhone(){
      if(this.phoneV.length != 11) {
        this.$message({
          message: '请输入正确的电话号码',
          type: 'warning',
          duration:1500
        });
        return;
      }

      this.selectPData.unshift({
        phone:this.phoneV
      });

    },
    sendM(){
      var arr = JSON.parse(JSON.stringify(this.selectPData));
      this.sendArr = [];
      arr.forEach((e,index)=>{
        if(e.id) {
          this.sendArr.push(e.id);
        }else {
          this.sendArr.push(e.phone);
        }
      });
      if(this.sendArr.length == 0) {
        this.$message({
          message: '请选择需要发送的人员',
          type: 'warning',
          duration:1500
        });
        return false;
      }
      if(this.textV == "") {
        this.$message({
          message: '请输入要发送的内容',
          type: 'warning',
          duration:1500
        });
        return false;
      }
      this.$p({
        url:"message/sendMessage",
        params:{
          message:this.textV,
          receiveList:this.sendArr.join(",")
        },
        callback:(res)=>{
          this.$message({
            message: '发送成功',
            type: 'success',
            duration:1500
          });
        }
      });
      console.log(this.sendArr);
      console.log(this.textV);
    },
    /**
     * 删除右边
     */
    removeAdd(){
      var arr = this.removePD;
      var kArr = this.selectPData;
      arr.forEach((m,mIndex)=>{
        kArr.forEach((e,index)=>{
          if(e.id == m.id) {
            kArr.splice(index,1);
          }
        })
      });
      this.selectPData = kArr;
    },
    /**
     *按照需求查询
     */
    search(){
      // if(this.searchV == "") {
      //   this.$message({
      //     message: '请输入要查询的内容',
      //     type: 'warning',
      //     duration:1500
      //   });
      //   return ;
      // }
      let m;
      m = this.radio;
      this.$p({
        url:"user/selectMyUser",
        params:{
          pageNum:0,
          [m]:this.searchV
        },
        callback:(res)=>{
          this.allPData = res.data.list;
          var d = this.allPData;
          d.forEach((e,index)=>{
            d[index].typeName = this.typeF(e.type);
          });
          this.allPData = d;
        }
      });
    },
    /**
     * 将type  转换成汉字
     * @param val
     * @returns {*}
     */
    typeF(val) {
      switch(val){
        case 0:
          return "普通用户";
          break;
        case 1:
          return "部门管理员";
          break;
        case 2:
          return "管理员";
        case 4:
          return "外部人员";
          break;
      }
    },
    /**
     * 获取所有人员列表
     */
    allPerson(){
      this.$p({
        url:"user/selectMyUser",
        params:{
          pageNum:0
        },
        callback:(res)=>{
          this.allPData = res.data.list;
          var d = this.allPData;
          d.forEach((e,index)=>{
            d[index].typeName = this.typeF(e.type);
          });
          this.allPData = d;
        }
      });
    },
    selectPerson(){

    }
  },
  computed: {
    listen() {
      return this.$store.state.reload;
    }
  },
  watch: {
    listen: function(a, b) {
      this.$router.go(0);
    }
  },
  mounted() {
    this.list();
  }
}
