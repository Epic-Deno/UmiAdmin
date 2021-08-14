/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-07-02 23:04:10
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-14 23:28:41
 */
import React, { useState } from 'react';
import {  Row, Col, Card, Avatar, Skeleton } from 'antd';
import {
  NumberCard
} from './components';


const { Meta } = Card;
import './index.less';

function IndexPage() {
  const [numbers] = useState([
    {
      icon: 'pay-circle-o',
      title: 'Online Review',
      number: 2781
    },
    {
      icon: 'team',
      title: 'New Customers',
      number: 3241
    },
    {
      icon: 'message',
      title: 'Active Projects',
      number: 253
    },
    {
      icon: 'shopping-cart',
      title: 'Referrals',
      number: 4326
    },
  ])
  const numberCards = numbers.map((item, key) => (
    <Col key={key} lg={6} md={12}>
      <NumberCard {...item} />
    </Col>
  ))

  return (
    <>
      <Row gutter={24}>
          {numberCards}
      </Row>
    </>
  );
}


export default IndexPage