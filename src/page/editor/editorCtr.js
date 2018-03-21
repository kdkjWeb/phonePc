/**
 * Created by kdkjPC on 2018/3/21.
 */
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
      detail:{}
    }

  },
  methods:{
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
      this.$p({
        url:"news/updateNews",
        params:{
          id:this.detail.id,
          title:this.title,
          content:this.content
        },
        callback:(res)=>{
          this.$message({
            message: '修改成功',
            type: 'success',
            duration:1500
          });
          setTimeout(()=>{
            this.$router.push({
              path:'/showDoc',
              query:{id:this.queryId}
            });
          },1500);
        }
      });
    },
    /**
     * 上传附件
     */
    upload(e){
      var id = this.detail.id;
      var myForm = new FormData();
      var name = e.currentTarget.files[0];
      myForm.append("file",e.currentTarget.files[0]);
      myForm.append("newsid",id);
      this.$p({
        url:"news/uploadFile",
        params:myForm,
        callback:(res)=>{
          this.$message({
            message: '上传成功',
            type: 'success',
            duration:1500
          });
          var d = this.fileArr;
          if(this.fileArr.length == 0) {
            d.push(name.name);
          }else {
            d.splice(0,0,name.name);
          }
          this.fileArr = JSON.parse(JSON.stringify(d));
        }
      });
    },
    /**
     * 删除上传文件
     */
    removeFile(index,item){
      this.$g({
        url:"news/deleteFile",
        params:{
          newsid:this.detail.id,
          filename:item
        },
        callback:(res)=>{
          this.$message({
            message: '删除成功',
            type: 'success',
            duration:1500
          });
          this.fileArr.splice(index,1);
        }
      });

    },
    getDoc(){
      this.$g({
        url:"news/getNewsById",
        params:{
          id:this.queryId
        },
        callback:(res)=>{
          this.detail = res.data;
          this.title = this.detail.title;
          this.content = this.detail.content;
          this.fileArr = this.detail.files;
        }
      });
    },
  },
  watch:{
    $route(){
      this.queryId = this.$route.query.id;
      this.getDoc();
    }
  },
  mounted() {
    this.queryId = this.$route.query.id;
    this.getDoc();
  },
  deactivated(){
    this.$destroy();
  }
}
