<template>
  <div>
      <div class="left">
          <el-table class="table"
                    ref="singleTable"
                    :data="tableData"
                    border
                    highlight-current-row
                    height="height"
                    style="width: 100%">
            <el-table-column
              property="message"
              label="标题">
            </el-table-column>
            <el-table-column
              property="sendDate"
              label="发布日期">
            </el-table-column>
            <el-table-column
              property="receiveList"
              label="发送人员">
            </el-table-column>
          </el-table>
          <div class="pagation">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="pageSize"
              layout="total, prev, pager, next"
              :total="total">
            </el-pagination>
        </div>

    </div>
  </div>
</template>


<script>
export {default} from './historyCtr.js'
</script>


<style>
  .left {
    flex: 1;
    width:100px;
    height:100%;
    box-sizing: border-box;
    padding:20px;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .table {
    border-radius: 10px 10px 0 0;
    margin-top:20px;
  }
  .pagation {
    width:100%;
    text-align: center;
    padding:30px 0;
    border:1px solid #ebeef5;
    border-radius:0 0 10px 10px;
    box-sizing: border-box;
  }
</style>
