/*
 * @Description: 数字面板
 * @Author: Pony
 * @Date: 2021-08-14 22:45:16
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-14 23:36:35
 */
import React, { FC } from 'react';
import { Card } from 'antd';
import iconMap from '@/utils/iconMap'
import styles from './NumberCard.less';

interface NumberCardType {
  icon: string;
  color: string;
  title: string;
  number: number;
}

const NumberCard: FC<NumberCardType> = ({ icon, color, title, number }) => {
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
          {number && number.toLocaleString()}
        </p>
      </div>
    </Card>
  );
};
export default NumberCard;
