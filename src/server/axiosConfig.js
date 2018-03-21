/**
 * Created by kdkjPC on 2018/3/1.
 */
import Vue from 'vue'
import Axios from 'axios';
var baseU = 'http://192.168.20.3:8886/';
var axiosConfig = Axios.create({
  baseURL: baseU,    //zxc
  timeout: 3000, //所有请求30s后过期
  withCredentials: true, //跨域凭证
});
export default {"axiosConfig":axiosConfig,"baseU":baseU};
