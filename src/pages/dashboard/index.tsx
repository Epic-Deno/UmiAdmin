/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-07-02 23:04:10
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-15 01:15:19
 */
import React, { useState } from 'react';
import {  Row, Col, Card, Avatar, Skeleton } from 'antd';
import {
  NumberCard,
  Browser
} from './components';

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

const { Meta } = Card;
import './index.less';

function IndexPage() {
  const [numbers] = useState([
    {
      icon: 'pay-circle-o',
      color: 'rgb(100, 234, 145)',
      title: 'Online Review',
      number: 2781
    },
    {
      icon: 'team',
      color: 'rgb(143, 201, 251)',
      title: 'New Customers',
      number: 3241
    },
    {
      icon: 'message',
      color: 'rgb(216, 151, 235)',
      title: 'Active Projects',
      number: 253
    },
    {
      icon: 'shopping-cart',
      color: 'rgb(246, 152, 153)',
      title: 'Referrals',
      number: 4326
    },
  ])
  const browser = [
    {
      name: 'Google Chrome',
      percent: 43.3,
      status: 1
    },
    {
      name: 'Mozilla Firefox',
      percent: 33.4,
      status: 2
    },
    {
      name: 'Apple Safari',
      percent: 43.3,
      status: 3
    },
    {
      name: 'Internet Explorer',
      percent: 12.3,
      status: 4
    },
    {
      name: 'Opera Mini',
      percent: 3.3,
      status: 1
    },
    {
      name: 'Chromium',
      percent: 2.53,
      status: 1
    },
  ]
  const numberCards = numbers.map((item, key) => (
    <Col key={key} lg={6} md={12}>
      <NumberCard {...item} />
    </Col>
  ))

  return (
    <div className="dashboard">
      <Row gutter={24}>
          {numberCards}
          <Col lg={8} md={24}>
            <Card bordered={false} {...bodyStyle}>
              <Browser data={browser} />
            </Card>
          </Col>
      </Row>
    </div>
  );
}


export default IndexPage