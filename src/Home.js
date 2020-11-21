import React from 'react';
import { List, Space } from 'antd';
import 'antd/lib/list/style/css'
import 'antd/lib/space/style/css'
import { StarOutlined } from '@ant-design/icons';

const news = [];
for (let i = 0; i < 23; i++) {
  news.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
class Home extends React.Component {
  render() {
    return (
      <List
        className="sm:mx-20 md:mx-42 lg:mx-52"
        itemLayout="vertical"
        size="large"
        dataSource={news}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[<IconText icon={StarOutlined} text="156" />]}
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={
                <div className="-mt-3">
                  13.03.2020 cpeterso
                </div>
              }
            />
          </List.Item>
        )}
      />
    )
  }
}

export default Home