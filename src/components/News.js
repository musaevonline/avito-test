import React from 'react'
import { Card, Space, Spin } from 'antd'
import 'antd/lib/card/style/css'
import 'antd/lib/space/style/css'
import 'antd/lib/spin/style/css'
import { StarOutlined, MessageOutlined, ReloadOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import axios from 'axios'
import CommentTree from './CommentTree'

let timer = null
class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            loading: true,
            newsId: this.props.location.pathname.slice(1)
        }
    }

    fetchNews() {
        this.setState({ loading: true })
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.state.newsId}.json`)
            .then(({ data }) => {
                this.setState({ data, loading: false })
            })
    }

    componentDidMount() {
        this.fetchNews()
        if (!timer) {
            timer = setInterval(this.fetchNews.bind(this), 60000)
        }
    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <header className="w-full h-14 bg-blue-500 flex items-center">
                        <ArrowLeftOutlined
                            className="transform transition-transform 
                            hover:scale-105 text-white ml-5 p-2 cursor-pointer
                            rounded-full hover:bg-blue-400 text-2xl leading-none
                            "
                            onClick={() => this.props.history.replace('/')}
                        />
                        <span className={`ml-auto mr-14 ${this.state.loading ? 'animate-spin' : ''}`}>
                            <ReloadOutlined
                                className={`transform transition-all 
                                            hover:scale-105 text-white p-2 cursor-pointer
                                            rounded-full text-2xl leading-none
                                            ${this.state.loading ? 'bg-transparent' : 'hover:bg-blue-400'}
                                         `}
                                onClick={() => !this.state.loading && this.fetchNews()}
                            />
                        </span>
                    </header>
                    <div className="sm:w-3/4 w-11/12 mx-auto">
                        <Card
                            className="my-10"
                            actions={[
                                <Space>
                                    <StarOutlined className="flex" />
                                    {this.state.data.score}
                                </Space>,
                                <Space>
                                    <MessageOutlined className="flex" />
                                    {this.state.data.descendants}
                                </Space>
                            ]}
                        >
                            <Card.Meta
                                title={<a href={this.state.data.url}>{this.state.data.title}</a>}
                                description={
                                    <div className="-mt-2">
                                        {new Date(this.state.data.time * 1000).toLocaleDateString('ru')} {this.state.data.by}
                                        <p>{this.state.data.url}</p>
                                    </div>
                                }
                            />
                        </Card>

                        {!this.state.loading && <CommentTree kids={this.state.data.kids} />}
                    </div>
                </div>
            )
        } else {
            return (
                <Spin className="block mx-auto my-20" />
            )
        }
    }
}

export default Home;
