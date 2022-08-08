import React from 'react'
import { Button } from "react-bootstrap";

function MemberView(props) {
    const params = window.location.pathname.split('/');
    const viewPost = []
    for (let i = 0; i < props.memberList.length; i++) {
        if (props.memberList[i].id === Number(params[3])) {
            console.log(props.memberList[i]);
            viewPost.push(props.memberList[i])
        }
    }
    console.log(viewPost);
    const mapViewPost = viewPost.map(data => {
        return (
            <div key={data.id}>
                <p className='view_name'>이름: {data.name}</p>
                <p className='view_age'>연령: {data.age}</p>
                <p className='view_sex'>성별: {data.sex}</p>
                <p className='view_birth'>생년월일: {data.birth}</p>
                <p className='view_height'>키: {data.height}</p>
                <p className='view_weight'>체중: {data.weight}</p>
                <p className='view_period'>운동기간: {data.period}</p>
                <p className='view_regDate'>등록일: {data.regDate}</p>
                <p className='view_endDate'>종료일: {data.endDate}</p>
                <p className='view_phone'>연락처: {data.phone}</p>
                <p className='view_email'>이메일: {data.email}</p>
            </div>
        )
    })

    return (
        <div className='memberView'>
            <h3>회원상세</h3>
            {mapViewPost}
            <div>
                <Button variant="outline-dark" type="button" className="my-3 rounded-pill" onClick={() => document.location.href = '/'} >
                    목록
                </Button>
                <Button variant="dark" type="submit" className="my-3 rounded-pill" onClick={() => document.location.href = '/'}>
                    수정
                </Button>
                <Button variant="dark" type="submit" className="my-3 rounded-pill" onClick={() => document.location.href = '/'}>
                    삭제
                </Button>
            </div>
        </div>
    )
}

export default MemberView;