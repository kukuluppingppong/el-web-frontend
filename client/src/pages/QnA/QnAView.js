import React from 'react'
import { Link } from 'react-router-dom';

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
            <div key={data.seq}>
                <p className='view_seq'>번호: {data.seq}</p>
                <p className='view_title'>제목: {data.title}</p>
                <p className='view_writer'>작성자: {data.writer}</p>
                <p className='view_regDate'>등록일: {data.regDate}</p>
                <p className='view_answer'>답변: {data.answer}</p>
            </div>
        )
    })
    return (
        <div className="QnAView">
            <h3>QnA 상세</h3>
            {mapViewPost}
            <Link to='/'>목록</Link>
        </div>
    )
}

export default QnAView;