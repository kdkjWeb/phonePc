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
        this.$mint.Toast({
          message: '请输入用户名或密码',
          position: 'center',
          duration: 1500
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
          this.$mint.Toast({
            message: '登录成功',
            position: 'bottom',
            duration: 500
          });
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
