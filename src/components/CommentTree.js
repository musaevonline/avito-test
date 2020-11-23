import React from 'react'
import { Comment as AntComment, Spin } from 'antd';
import { RightOutlined, DownOutlined } from '@ant-design/icons'
import 'antd/lib/comment/style/css'
import 'antd/lib/avatar/style/css'
import 'antd/lib/spin/style/css'
import axios from 'axios'
import classNames from 'classnames'


class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            collapsed: true
        }
    }
    fetchComment() {
        this.setState({ loading: true, collapsed: true })
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.commentId}.json`)
            .then(({ data }) => {
                this.setState({ data })
            })
    }
    componentDidMount() {
        this.fetchComment()
    }

    render() {
        if (this.state.data) {
            return (
                <AntComment
                    className={classNames({
                        'cursor-pointer': this.state.data.kids && this.state.collapsed,
                        'cursor-auto': !this.state.data.kids
                    })}
                    onClick={() => this.setState({ collapsed: false })}
                    author={`${this.state.data.by} ${new Date(this.state.data.time * 1000).toLocaleDateString('ru')}`}
                    content={this.state.data.text}
                    avatar={
                        this.state.data.kids ?
                            (this.state.collapsed ? <RightOutlined /> : <DownOutlined />)
                            : null
                    }
                >
                    {!this.state.collapsed && <CommentTree kids={this.state.data.kids} />}
                </AntComment>
            )
        } else {
            return <div><Spin className="my-3" /></div>
        }
    }
}

class CommentTree extends React.Component {
    render() {
        return this.props.kids.map(kid => <Comment key={kid} commentId={kid} />
        )
    }
}
CommentTree.defaultProps = {
    kids: []
};

export default CommentTree