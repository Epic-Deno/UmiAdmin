/*
 * @Description: Created By Pony
 * @Author: Pony
 * @Date: 2021-08-09 21:40:11
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-09 23:14:28
 */
import { Layout } from 'antd';
import HeaderContent from './header';
import MenuContent from './menu';
import styles from './index.less';

const { Header, Content, Sider } = Layout;

export default (props: any) => {
  return (
    <Layout className={styles.container}>
      <Header className={styles.contentHeader}>
        <HeaderContent />
      </Header>
      <Layout style={{ padding: 0 }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <MenuContent />
        </Sider>
        <Content className={styles.content}>{props.children}</Content>
      </Layout>
      {/* <Footer className={styles.footerContent}>管理平台通用业务模版</Footer> */}
    </Layout>
  );
};
