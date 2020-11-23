import React from 'react';
import { List } from 'antd';
import 'antd/lib/list/style/css'
import { ReloadOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import Post from './Post'
import { getNews } from '../store/actionCreators'


let timer = null
class Home extends React.Component {
  componentDidMount() {
    this.props.getNews()
    if (!timer) {
      timer = setInterval(this.props.getNews, 60000)
    }
  }

  render() {
    return (
      <div>
        <header className="w-full h-14 bg-blue-500 flex items-center">
          <span className={`ml-auto mr-14 ${this.props.loading ? 'animate-spin' : ''}`}>
            <ReloadOutlined
              className={`transform transition-all 
                          hover:scale-105 text-white p-2 cursor-pointer
                          rounded-full text-2xl leading-none
                          ${this.props.loading ? 'bg-transparent' : 'hover:bg-blue-400'}
                       `}
              onClick={() => !this.props.loading && this.props.getNews()}
            />
          </span>
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