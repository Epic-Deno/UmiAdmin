/*
 * @Description: browser 模块
 * @Author: Pony
 * @Date: 2021-08-15 00:32:10
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-15 01:12:39
 */
import { Table, Tag } from 'antd';
import theme from '@/utils/theme';
import styles from './browser.less';

const { Color } = theme

const status = {
  1: {
    color: Color.green,
  },
  2: {
    color: Color.red,
  },
  3: {
    color: Color.blue,
  },
  4: {
    color: Color.yellow,
  },
};

interface tableItem {
    name: string;
    percent: number;
    status: number
}

const Browser = ({ data }: { data: tableItem[] }) => {
    const columns = [
        {
          title: 'name',
          dataIndex: 'name',
          className: styles.name,
        },
        {
          title: 'percent',
          dataIndex: 'percent',
          className: styles.percent,
          render: (text: number | string, it: tableItem) => <Tag color={status[it.status as keyof typeof status].color}>{text}%</Tag>,
        },
      ]
      return (
        <Table
          pagination={false}
          showHeader={false}
          columns={columns}
          rowKey='name'
          dataSource={data}
        />
      )
};

export default Browser;
