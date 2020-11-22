import React from 'react';
import { List, Button } from 'antd';
import 'antd/lib/list/style/css'
import 'antd/lib/button/style/css'
import { ReloadOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import Post from './Post'
import { getNews } from '../store/actionCreators'

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


class Home extends React.Component {
  componentDidMount() {
    this.props.getNews()
  }

  render() {
    return (
      <div>
        <header className="w-full h-14 bg-blue-500 flex items-center">
          <Button
            className="ml-auto mr-14"
            onClick={() => !this.props.loading && this.props.getNews()}
            loading={this.props.loading}
            size="large"
            type="primary"
            shape="circle"
            icon={<ReloadOutlined style={{ fontSize: 18 }} className="mb-2" />}
          />
        </header>
        <List
          className="sm:mx-20 md:mx-42 lg:mx-52"
          itemLayout="vertical"
          size="large"
          rowKey={id => id}
          dataSource={this.props.news}
          renderItem={item => <Post newsId={item} />}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    news: state.news.news,
    loading: state.news.loading
  }
}

const mapDispatchToProps = {
  getNews
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)