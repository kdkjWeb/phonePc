export default{
    data(){
        return {
          currentPage:1,
          userid:null,
          radio:"department",
          searchV:"",
          disable:false,
            form:{
              department:[],
              type:[{
                label:"普通用户",
                value:0
              },{
                label:"部门管理员",
                value:1
              }
              // ,{
              //   label:"管理员",
              //   value:2
              // }
              ],
              personDetail:'',
              departmentV: '',
              typeV:'',
              name: '',
              phone: '',
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

        console.log(val);
        this.personDetail = val;
        if(val==null) {
          this.form['departmentV'] = "";
          this.form['typeV'] = "";
          this.form['name'] = "";
          this.form['phone'] = "";
          this.disable = false;
          this.userid = null;
          return ;
        }

        var p = this.personDetail;
        this.form['departmentV'] = p.department;
        this.form['typeV'] = p.type;
        this.form['name'] = p.username;
        this.form['phone'] = p.phone;
        this.disable = true;
        this.userid = p.id;
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
          case 4:
            return "外部人员";
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
       * 查询
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
            this.tableData = d;
          }
        });
      },
      /**
       * 获取列表
       */
      list(){
        this.$p({
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
              d[index].typeName = this.typeF(e.type);
            });
            this.tableData = d;
          }
        });
      },
      /**
       * 获取部门列表
       */
      depList(){
        this.$p({
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
        console.log(this.form['departmentV'],this.form['name'],this.form['typeV'],this.form['phone'])
        if(this.form['departmentV']===''||this.form['name']===''||this.form['typeV']==="") {
          this.$message({
            message: '请填写完整信息',
            type: 'warning',
            duration:1500
          });
          return;
        }
        var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if(!reg.test(this.form['phone'])) {
          this.$message({
            message: '请输入正确的手机号',
            type: 'warning',
            duration:1500
          });
          return;
        }
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
              this.form['departmentV'] = "";
              this.form['name'] = "";
              this.form['typeV'] = "";
              this.form['phone'] = "";
            }
            this.list();
          }
        });
      },
      /**
       * 删除用户
       */
      remove(){
        var u = this.userid;

        if(u) {
          this.$g({
            url:'user/deletUser',
            params:{
              userid:u,
              department:this.personDetail.department
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
       * 重置密码
       */
      rePwd(){
        var u = this.userid;
        if(u) {
          this.$confirm('是否重置密码,重置后密码为111111?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$g({
              url:'user/resetPwd',
              params:{
                id:u
              },
              callback:(res)=>{
                this.$message({
                  message: '重置成功',
                  type: 'success',
                  duration:1500
                });
              }
            });
          }).catch(() => {

          });

        }else {
          this.$message({
            message: '请选择要重置的用户',
            type: 'warning',
            duration:1500
          });
        }
      },
      /**
       * 管理员修改密码
       */
      adminUpPwd(){
        var old = this.form.oldPas;
        var newP = this.form.newPas;
        var sucP = this.form.successPas;

        if(old === "" ||newP ==="" || sucP === "") {
          this.$message({
            message: '请输入完整密码信息',
            type: 'warning',
            duration:1500
          });
          return;
        }
        if(newP != sucP) {
          this.$message({
            message: '确认密码与新密码不相同',
            type: 'warning',
            duration:1500
          });
          return;
        }
        this.$g({
          url:'user/updatePwd',
          params:{
            newpwd:newP,
            pwd:old
          },
          callback:(res)=>{
            this.$message({
              message: '修改管理员密码成功',
              type: 'success',
              duration:1500
            });
            this.form.oldPas = "";
            this.form.newPas = "";
            this.form.successPas = "";
          }
        });
      }
    },
  mounted(){
    this.depList();
    this.list();
  }
}
