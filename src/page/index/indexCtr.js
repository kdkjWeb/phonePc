/**
 * Created by kdkjPC on 2018/1/23.
 */
export default {
  data(){
    return {
      name:'',
      pwd:''
    }
  },
  methods:{
    login(){
      if(this.name==""||this.pwd=="") {
        this.$message({
          message: '请输入用户名或密码',
          type: 'warning',
          duration:1500
        });
        return false;
      }
      this.$p({
        url:"login",
        params:{
          username: this.name,
          password:this.pwd
        },
        callback:(res)=>{
          //this.$common.setStorage("token",res.data);
          this.$message({
            message: '登录成功,立马跳转页面',
            type: 'success',
            duration:500
          });
          localStorage.type = res.data.type;
          setTimeout(()=>{
            this.$router.push({
              path: '/doc',
            });
          },500);
        }
      });
    }
  },
  created(){

  }
}
