import React from 'react'
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';

function MemberView(props) {
    const params = window.location.pathname.split('/');
    const viewPost = []
    for (let i = 0; i < props.boardList.length; i++) {
        if (props.boardList[i].number === Number(params[2])) {
            viewPost.push(props.boardList[i])
        }
    }
    console.log(viewPost);
    const mapViewPost = viewPost.map(data => {
        return (
            <div key={data.number}>
                <p className='view_name'>{data.name}</p>
                <p className='view_age'>{data.age}</p>
                <p className='view_sex'>{data.sex}</p>
                <p className='view_birth'>{data.birth}</p>
                <p className='view_height'>{data.height}</p>
                <p className='view_weight'>{data.weight}</p>
                <p className='view_period'>{data.period}</p>
                <p className='view_regDate'>{data.regDate}</p>
                <p className='view_endDate'>{data.endDate}</p>
                <p className='view_phone'>{data.phone}</p>
                <p className='view_email'>{data.email}</p>
            </div>
        )
    })

    // const updateHit = async () => {
    //     console.log(document.location.pathname)
    //     const docParams = document.location.pathname
    //     const req = await axios.post(docParams);
    // }

    // useEffect(() => {
    //     updateHit()
    // })

    return (
        <Box sx={{
            width: '700px',
            bgcolor: '#cfe8fc', height: '600px', backgroundColor: '#fff', margin: '0 auto',
            paddingTop: '10px', textAlign: 'center', marginTop: '70px', borderRadius: '20px',
            boxShadow: '4px 4px 4px 4px gray'
        }}>
            <div className='memberView'>
                <div className='view_left'>
                    <p>이름</p>
                    <p>연령</p>
                    <p>성별</p>
                    <p>생년월일</p>
                    <p>키</p>
                    <p>체중</p>
                    <p>운동기간</p>
                    <p>등록일</p>
                    <p>종료일</p>
                    <p>연락처</p>
                    <p>이메일</p>
                </div>
                <div className='view_right'>
                    {mapViewPost}
                </div>
            </div>
            <Link to='/'>수정</Link>
            <Link to='/'>삭제</Link>
            <Link to='/'>목록</Link>
        </Box>
    )
}

export default MemberView;