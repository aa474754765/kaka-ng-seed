/*
 * @Author: kaka
 * @Date: 2022-03-16 16:48:11
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-24 21:49:53
 */
export interface NavigationNode {
  title: string;
  url?: string;
  tooltip?: string;
  hidden?: boolean;
  children?: NavigationNode[];
}

export const APP_MENU_DATA: NavigationNode[] = [
  {
    title: '图表',
    url: 'dashboard',
    children: [
      {
        title: '一览',
        url: 'dashboard/overview'
      },
      {
        title: '新闻',
        url: 'dashboard/news'
      }
    ]
  },
  {
    title: '工具',
    url: 'tools',
    children: [
      {
        title: '实用工具',
        children: [
          {
            title: 'json转换工具',
            url: 'tools/json'
          },
          {
            title: 'UrlEncode编码/解码',
            url: 'tools/urlencode'
          }
        ]
      }
    ]
  }
];