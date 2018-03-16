export default{
    data(){
        return {
            height: 0,
            currentPage1: 1,
            pageSize:2,
            total:10,
            tableData: [{
                title: '王小虎',
                date: '2016-05-04',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-04',
                title: '王小虎',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-01',
                title: '王小虎',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-03',
                title: '王小虎',
                member: '张三、李四、王五'
              },{
                title: '王小虎',
                date: '2016-05-04',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-04',
                title: '王小虎',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-01',
                title: '王小虎',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-03',
                title: '王小虎',
                member: '张三、李四、王五'
              },{
                title: '王小虎',
                date: '2016-05-04',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-04',
                title: '王小虎',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-01',
                title: '王小虎',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-03',
                title: '王小虎',
                member: '张三、李四、王五'
              },{
                title: '王小虎',
                date: '2016-05-04',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-04',
                title: '王小虎',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-01',
                title: '王小虎',
                member: '张三、李四、王五'
              }, {
                date: '2016-05-03',
                title: '王小虎',
                member: '张三、李四、王五'
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
          
    },
    created() {
		this.height = (window.innerHeight - 160) + 'px';
    },
    mounted(){
        // 监听窗口改变重置高度
        window.addEventListener('resize', () => {
            this.height = (window.innerHeight - 160) + 'px';
        })
    }
}