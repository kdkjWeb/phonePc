/**
 * Created by kdkjPC on 2018/3/15.
 */
const myForm = new FormData();
export default {
  data(){
    return {
      queryId:"",
      title:"",
      content:"",
      fileArr:[],
      editorOption: {
        modules:{
          toolbar:[
            ['bold','italic',"image"],
            [{'size':['small',false,'large','huge']}],
            [{'align':[]}],
            [{'color':[]}]
          ]
        },
        placeholder:'请输入内容......'
      },
      radio: 'department',
      currentPage: 1,  //初始化当前页 为第几页
      pageSize:null,       //每一页显示的条数
      total:null,         //分页的总条数
      alert:false,
      tableData: [],
      detail:{},

      //  ---------------------message-------------------------
      searchV:"",
      allPData:[],
      selectPD:[],
      selectPData:[],
      removePD:[],
      sendArr:[],
    }

  },
  methods:{
    /**
     * 查看当前页
     */
    currentPagefun(val){
      this.currentPage = val;
      this.list();
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
      if(this.title == ""||this.content == "") {
        this.$message({
          message: '请输入标题和文章内容',
          type: 'warning',
          duration:1500
        });
        return ;
      }
      this.alert = true;
      this.allPerson();
    },
    /**
     * 上传附件
     */
    upload(e){
      for(var key in e.currentTarget.files) {
        if(key == "item"||key == "length") {
          break;
        }
        this.fileArr.push(e.currentTarget.files[key]);
      }
    },
    /**
     * 删除上传文件
     */
    removeFile(index){
      this.fileArr.splice(index,1);
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
      this.selectPData = this.selectPD;
    },
    sendM(){
      var arr = this.selectPData;
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
      for(var i=0;i<this.fileArr.length;i++) {
        myForm.append('receivefiles',this.fileArr[i]);
      }
      myForm.append('title',this.title);
      myForm.append('content',this.content);
      myForm.append('receivers',this.sendArr);
      this.$p({
        url:"news/addNews",
        params:myForm,
        callback:(res)=>{

        }
      });
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
  mounted() {
  }
}
