/*
 * @Author: kaka
 * @Date: 2022-03-16 16:48:11
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-16 16:48:11
 */
export interface NavigationNode {
    title: string;
    url?: string;
    tooltip?: string;
    hidden?: boolean;
    children?: NavigationNode[];
  }