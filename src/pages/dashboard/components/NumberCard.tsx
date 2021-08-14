/*
 * @Description: 数字面板
 * @Author: Pony
 * @Date: 2021-08-14 22:45:16
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-14 23:08:51
 */
import React, { FC } from 'react';
import { Card } from 'antd';
import iconMap from '@/utils/iconMap'
import styles from './index.less';

interface NumberCardType {
  icon: string;
  color: string;
  title: string;
  numbers: number;
}

const NumberCard: FC<NumberCardType> = ({ icon, color, title, numbers }) => {
  return (
    <Card
      className={styles.numberCard}
      bordered={false}
      bodyStyle={{ padding: 10 }}
    >
      <span className={styles.iconWarp} style={{ color }}>
        {iconMap[icon as keyof typeof iconMap]}
      </span>
      <div className={styles.content}>
        <p className={styles.title}>{title || 'No Title'}</p>
        <p className={styles.number}>
          1222
        </p>
      </div>
    </Card>
  );
};
export default NumberCard;
