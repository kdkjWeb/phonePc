/**
 * Created by kdkjPC on 2018/3/15.
 */
export default {
  data(){
    return {
      currentPage1: 1,
      pageSize:2,
      total:10,
      tableData: [{
        date: '2016-05-03',
        title: '上海市普陀区金沙江路 1518 弄'
      }],
      detail:{
        title:"80年代的一万元相当于现在多少钱？",
        date:'2016-05-03',
        content:'<img src="http://f.hiphotos.baidu.com/image/pic/item/c75c10385343fbf2f7da8133bc7eca8065388f2f.jpg" alt=""><img src="http://f.hiphotos.baidu.com/image/pic/item/c75c10385343fbf2f7da8133bc7eca8065388f2f.jpg" alt="">八十年代的一辆永久牌和飞鸽牌自行车，凭票购买，一辆永久牌自行车不超过时价120元。我家在那时买过一辆这个牌子的自行车。所以，至今还清楚地记得它的价格。如果单从自行车销售价120元计算，那时1元钱，可以买凭票供应的0、65元的鲜猪肉约1斤5两，可以买凭粮票购买的馒头、包子20个，可以看一个感冒发烧之类的小病还有余。那时候的120元，大约相于现在的15000元左右。因为那时候的人均月薪不足四十元，大都三十多元。<br/> <br/> <br/>八十年代的一辆永久牌和飞鸽牌自行车，凭票购买，一辆永久牌自行车不超过时价120元。我家在那时买过一辆这个牌子的自行车。所以，至今还清楚地记得它的价格。如果单从自行车销售价120元计算，那时1元钱，可以买凭票供应的0、65元的鲜猪肉约1斤5两，可以买凭粮票购买的馒头、包子20个，可以看一个感冒发烧之类的小病还有余。那时候的120元，大约相于现在的15000元左右。因为那时候的人均月薪不足四十元，大都三十多元。'
      }
    }
  },
  methods:{
    handleCurrentChange(val) {
      this.currentRow = val;
      console.log(val);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // }
    newCreate(){
      this.$router.push({
        path:"/newCreate"
      });
      // this.detail={title:'新建',date:'',content:''};
    }
  },
  mounted() {
    var len = this.$refs.contentBox.querySelectorAll("img");
    len.forEach((e)=>{
      e.style.width="100%";
    });
  },
}
