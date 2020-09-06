import { request } from "./request";

//数据请求  登录/主页列表/用户列表/  后边发现请求方式还有别的所以加了一个参数type默认值为post
export function newData(str, obj, type = "get") {
  return request({
    url: str,
    method: type,
    params: obj,
  });
}
