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

      setTimeout(()=>{
        this.$router.push({
          path: '/doc',
        });
      },500);
    }
  },
  created(){

  }
}
