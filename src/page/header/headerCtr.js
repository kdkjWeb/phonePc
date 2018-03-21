/**
 * Created by kdkjPC on 2018/3/15.
 */
export default {
  data(){
    return {
      thisIndex:0,
      leftList:[{
        text:"文件列表",
        icon:"icon-wenjianliebiao-copy"
      },
        {
          text:"信息管理",
          icon:"icon-guanliyuan-copy"
        },
        {
          text:"消息历史",
          icon:"icon-lishihangcheng-copy"
        },
        {
          text:"安全退出",
          icon:"icon-icon-copy"
        }]
    }
  },
  methods:{
    bar(index){
      this.thisIndex = index;
      switch (index) {
        case 0:
          this.$router.push({
            path:"/doc"
          });
              break;
        case 1:
          if(localStorage.type != 2) {
            this.$message({
              message: '你没有该权限',
              type: 'error',
              duration:1500
            });
            break;
          }
          this.$router.push({
            path:"/information"
          });
          break;
        case 2:
          this.$router.push({
            path:"/history"
          });
          break;
        case 3:
          this.$g({
            url:"logout",
            params:{},
            callback:(res)=>{
              this.$message({
                message: '退出成功',
                type: 'success',
                duration:1500
              });
              setTimeout(()=>{
                this.$router.push({
                  path:"/"
                });
              },1500);
            }
          });

          break;
      }

    }
  }
}
