/**
 * 请求类型
 * ① 匹配查找路径
 * ② 更新目标节点
 *
 * @export
 * @enum {number}
 */
export enum RequestType {
  // TEMPLATE
  TEMPLATE = 'TEMPLATE', // 匹配和更新 import or include

  // SCRIPT
  SCRIPT = 'SCRIPT', // 匹配和更新 import or request

  // STYLE
  STYLE = 'STYLE', // 匹配和更新 @import

  // STATIC
  STATIC = 'STATIC', // 匹配和更新 静态资源，比如 json | image

  // WXS
  WXS = 'WXS',

  // SFC
  WXA = 'WXA', // 匹配和更新 全局模板
  WXP = 'WXP', // 匹配和更新 using
  WXC = 'WXC' // 匹配和更新 using
}
