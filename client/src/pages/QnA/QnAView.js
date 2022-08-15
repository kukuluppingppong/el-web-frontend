import React from 'react'
import { Button, Form, Container } from "react-bootstrap";


const QnAView = (props) => {
    const params = window.location.pathname.split('/');

    const viewPost = []
    for (let i = 0; i < props.qnaList.length; i++) {
        if (props.qnaList[i].seq === Number(params[3])) {
            console.log(props.qnaList[i]);
            viewPost.push(props.qnaList[i])
        }
    }

    console.log(viewPost);

    const mapViewPost = viewPost.map(data => {
        return (
            <div key={data.seq} className="board_wrap">
                <div className="board_title">
                    <strong>QnA상세</strong>
                    <p>QnA를 확인하세요.</p>
                </div>

                <div className="board_write_wrap">
                    <div className="board_write">
                        <div class="info">
                            <dl>
                                <dt>번호</dt>
                                <dd>{data.seq}</dd>
                            </dl>
                            <dl>
                                <dt>제목</dt>
                                <dd>{data.title}</dd>
                            </dl>
                            <dl>
                                <dt>작성자</dt>
                                <dd><dd>{data.writer}</dd></dd>
                            </dl>
                            <dl>
                                <dt>등록일</dt>
                                <dd>{data.regDate}</dd>
                            </dl>
                            <dl>
                                <dt>답변</dt>
                                <dd>{data.answer}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <button className="on" onClick={() => document.location.href = "/QnAList"}>목록</button>
                    </div>
                </div>
            </div >
        )
    })

    return (
        <div className="QnAView">
            {mapViewPost}
        </div>
    )
}

export default QnAView;