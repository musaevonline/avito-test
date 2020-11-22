import React from 'react'
import { Card, Space } from 'antd'
import 'antd/lib/card/style/css'
import 'antd/lib/space/style/css'
import { StarOutlined, MessageOutlined } from '@ant-design/icons';
import axios from 'axios'


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
    }

    render() {
        if (this.state.data && !this.state.loading) {
            return (
                <div>
                    <Card
                        className="sm:w-3/4 w-11/12 mx-auto my-10"
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
                </div>
            )
        } else {
            return (
                <div>Загрузка...</div>
            )
        }
    }
}

export default Home;
