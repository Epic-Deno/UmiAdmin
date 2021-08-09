/*
 * @Description: 工具类
 * @Author: Pony
 * @Date: 2021-08-09 23:07:02
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-09 23:07:21
 */
export const queryKeysByPath = (
  pathname: string,
): { openKey: string; selectKey: string } => {
  const reg = /(^\/*)|(\/*$)/g; // 匹配字符串首尾斜杠
  const path = pathname.replace(reg, '');
  const routes = path.split('/');
  return { openKey: routes[0], selectKey: routes[1] || routes[0] };
};
