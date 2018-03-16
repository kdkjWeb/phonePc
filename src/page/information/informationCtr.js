export default{
    data(){
        return {
            form:{
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                  }, {
                    value: '选项2',
                    label: '双皮奶'
                  }, {
                    value: '选项3',
                    label: '蚵仔煎'
                  }, {
                    value: '选项4',
                    label: '龙须面'
                  }, {
                    value: '选项5',
                    label: '北京烤鸭'
                  }],
                  value: '',
                  value1:'',
                  name: '张三',
                  phone: '15095982630',
                  password: '',
                  oldPas: '',
                  newPas: '',
                  successPas: ''
            },
      
            currentPage1: 1,
            pageSize:2,
            total:10,
            tableData: [{
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              },{
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              },{
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              },{
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }, {
                department: '传媒部',
                job: '部门管理员',
                name: '张三',
                phone: '13351897456'
              }]
        }
    },
    methods:{
        //	currentPage 改变时会触发  当前页currentPage
        handleCurrentChange(val) {
            this.currentRow = val;
            console.log(val);
          },
          //pageSize 改变时会触发  	每页条数size
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
        //用户信息的添加按钮
        add(){
            console.log('新增')
        },
        //用户信息的保存按钮
        save(){
            console.log('保存')
        },
        //修改密码的保存按钮
        save1(){
            console.log('保存1')
        },
        //点击顶部的修改按钮
        modify(){
            console.log('修改')
        },
        //点击顶部的删除按钮
        remove(){
            console.log('删除')
        }
    }
}