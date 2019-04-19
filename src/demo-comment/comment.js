import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';


require('./comment.less');
let staticData = [
    { author: "a", text: "1" },
    { author: "b", text: "2" },
    { author: "c", text: "3" }
];

/** 组件结构：
 <CommentBox>
 <CommentList>
 <Comment />
 </CommentList>
 <CommentForm />
 </CommentBox>
 */

// http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js
// let converter = new Showdown.converter();//markdown

//评论内容组件
class Comment extends Component {
    render() {
        // let rawMarkup = converter.makeHtml(this.props.children.toString());
        let rawMarkup = this.props.children.join('');
        return (
            <div className="comment">
                <b className="commentAuthor"> {this.props.author}: </b>
                <span dangerouslySetInnerHTML={{ __html: rawMarkup }} />
            </div>
        );
    }
}

//评论列表组件
class CommentList extends Component {
    render() {
        let commentNodes = this.props.data.map(function (comment, i) {
            return (
                <Comment author={comment.author} key={i}> {comment.text} </Comment>
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}

//评论表单组件
class CommentForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let author = this.refs.author.value.trim();
        let text = this.refs.text.value.trim();
        if (!author || !text) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text });
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    }

    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author" /><br />
                <textarea type="text" placeholder="Say something..." ref="text"></textarea><br />
                <input type="submit" value="Post" />
            </form>
        );
    }
}


//评论块组件
export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    loadCommentsFromServer() {
        this.setState({ data: staticData });
        /* 方便起见，这里就不走服务端了，可以自己尝试
        $.ajax({ url: this.props.url + "?_t=" + new Date().valueOf(), dataType: 'json', success: function (data){ this.setState({data: data}); }.bind(this), error: function (xhr, status, err){ console.error(this.props.url, status, err.toString()); }.bind(this) });
        */
    }

    handleCommentSubmit(comment) {
        //TODO: submit to the server and refresh the list
        let comments = this.state.data;
        let newComments = comments.concat([comment]);

        //这里也不向后端提交了
        staticData = newComments;

        this.setState({ data: newComments });
    }

    //组件添加的时候运行
    componentDidMount() {
        this.loadCommentsFromServer();
        this.interval = setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }

    //组件删除的时候运行
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    //调用setState或者父级组件重新渲染不同的props时才会重新调用
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
};

//当前目录需要有comments.json文件
//这里定义属性，如url、pollInterval，包含在props属性中
// render(
//     <CommentBox url="comments.json" pollInterval="2000" />,
//     document.getElementById("root")
// );

