import React from 'react'
import { NavLink } from 'react-router-dom';

const QnAView = (props) => {
    return (
        <div className="QnAView">
            제목: {props.notice['title']}<br />
            내용: {props.notice['content']}<br />
            날짜: {props.notice['date']}<br />
            <NavLink to="./QnAList">
                <strong>목록 보기</strong>
            </NavLink>
        </div>
    )
}

export default QnAView;