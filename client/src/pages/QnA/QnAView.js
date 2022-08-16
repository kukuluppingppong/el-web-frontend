import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const QnAView = () => {
    const { seq } = useParams();

    const [loadQnAView, setLoadQnAView] = useState([]);

    const resQnAView = async () => {
        const loadQnAView = await axios.post(`/api/QnAView/${seq}`);
        console.log(loadQnAView.data);
        setLoadQnAView(loadQnAView.data);
    }

    useEffect(() => {
        resQnAView()
    }, [])

    const mapViewPost = loadQnAView.map(data => {
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