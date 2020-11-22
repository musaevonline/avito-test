import React from 'react'
import { List, Space } from 'antd';
import 'antd/lib/list/style/css'
import 'antd/lib/space/style/css'
import { StarOutlined, MessageOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import axios from 'axios'


class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true
        }
    }
    fetchNews() {
        this.setState({ loading: true })
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.newsId}.json`)
            .then(({ data }) => {
                this.setState({ data, loading: false })
            })
    }

    componentDidMount() {
        this.fetchNews()
    }

    componentDidUpdate(nextProps) {
        if (nextProps.newsId !== this.props.newsId) {
            this.fetchNews()
        }
    }

    render() {
        if (this.state.data && !this.state.loading) {
            return (
                <List.Item
                    key={this.props.newsId}
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
                    <List.Item.Meta
                        title={<Link to={`/${this.props.newsId}`}>{this.state.data.title}</Link>}
                        description={
                            <div className="-mt-3">
                                {new Date(this.state.data.time * 1000).toLocaleDateString('ru')} {this.state.data.by}
                            </div>
                        }
                    />
                </List.Item>
            )
        } else {
            return (
                <div>Загрузка...</div>
            )
        }

    }
}

export default Post