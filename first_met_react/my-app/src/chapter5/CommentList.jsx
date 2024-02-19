import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name: "김혜나",
        comment: "안녕하세요! 리액트는 처음이네요"
    },
    {
        name: "유인나",
        comment: "안녕하세요! 리액트는 재미있네요"
    },
    {
        name: "강민경",
        comment: "리액트 배우기 완료"
    },
    {
        name: "강민경",
        comment: "리액트 배우기 완료"
    },
    {
        name: "강민경",
        comment: "리액트 배우기 완료"
    },
    {
        name: "강민경",
        comment: "리액트 배우기 완료"
    },
    {
        name: "강민경",
        comment: "리액트 배우기 완료"
    },
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name= {comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;