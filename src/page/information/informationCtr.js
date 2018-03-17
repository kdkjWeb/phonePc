export default{
    data(){
        return {
          currentPage:1,
          userid:null,
          disable:false,
            form:{
              department:[],
              type:[{
                label:"普通用户",
                value:0
              },{
                label:"部门管理员",
                value:1
              },{
                label:"管理员",
                value:2
              }],
              personDetail:'',
              departmentV: '',
              typeV:'',
              name: '',
              phone: '',
              password: '',
              oldPas: '',
              newPas: '',
              successPas: ''
            },
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
        this.personDetail = val;
        var p = this.personDetail;
        this.form['departmentV'] = p.department;
        this.form['typeV'] = p.type;
        this.form['name'] = p.username;
        this.form['phone'] = p.phone;
        this.disable = true;
      },
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
        this.$g({
          url:"user/selectMyUser",
          params:{
            pageNum:this.currentPage
          },
          callback:(res)=>{
            this.pageSize = res.data.pageSize;
            this.total = res.data.total;
            this.tableData = res.data.list;
            var d = this.tableData;
            d.forEach((e,index)=>{
              d[index].type = this.typeF(e.type);
            });
            this.tableData = d;
          }
        });
      },
      /**
       * 获取部门列表
       */
      depList(){
        this.$g({
          url:"dep/selectDep",
          params:{},
          callback:(res)=>{
            this.form['department'] = res.data.list;
          }
        });
      },
      /**
       * 点击顶部的修改按钮
       */
      modify(){
        var p = this.personDetail;
        if(p) {
          this.userid = p.id;
          this.disable = false;
        }else {
          this.$message({
            message: '请选择要修改的用户',
            type: 'warning',
            duration:1500
          });
        }
      },
      /**
       * 用户点击新增按钮
       */
      add(){
        this.form['departmentV'] = "";
        this.form['typeV'] = "";
        this.form['name'] = "";
        this.form['phone'] = "";
        this.userid = null;
        this.disable = false;
        },
      /**
       * 用户信息保存按钮
       */
      save(){
        var urls = "";
        if(this.userid) {
          urls = "user/updateUser"
        }else {
          urls = "user/addUser"
        }
        this.$p({
          url:urls,
          params:{
            department:this.form['departmentV'],
            username:this.form['name'],
            type:this.form['typeV'],
            phone:this.form['phone'],
            id:this.userid
          },
          callback:(res)=>{
            if(urls == "user/updateUser") {
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
            }
          }
        });
      },
        //修改密码的保存按钮
        save1(){
            console.log('保存1')
        },
      /**
       * 删除用户
       */
      remove(){
        var u = this.userid;
        if(u) {
          this.$p({
            url:'User/deletUser',
            params:{
              id:u
            },
            callback:(res)=>{
              this.$message({
              message: '删除成功',
              type: 'success',
              duration:1500
            });
            }
          });
        }else {
          this.$message({
            message: '请选择要删除的用户',
            type: 'warning',
            duration:1500
          });
        }
      }
    },
  mounted(){
    this.depList();
    this.list();
  }
}
