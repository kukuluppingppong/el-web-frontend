import React, { useEffect, useState } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function MemberList(props) {

    const postList = props.currentPost.map((data, index) => (
        <TableRow key={index}>
            <TableCell align='right'>{data.number}</TableCell>
            <TableCell align='right'><a href={`/memberView/${memberId}`}>{data.name}</a></TableCell>
            <TableCell align='right'>{data.age}</TableCell>
            <TableCell align='right'>{data.sex}</TableCell>
            <TableCell align='right'>{data.phone}</TableCell>
            <TableCell align='right'>{data.period}</TableCell>
            <TableCell align='right'>{data.regDate}</TableCell>
            <TableCell align='right'>{data.endDate}</TableCell>
            <TableCell align='right'>수정</TableCell>
            <TableCell align='right'>삭제</TableCell>
        </TableRow>
    )
    )

    const spliceContent = () => {
        for (let i = 0; i < props.boardList.length; i++) {
            if (props.boardList[i].content.length > 5) {
                props.boardList[i].content = props.boardList[i].content.slice(0, 4) + '...';
            }
        }
    }

    useEffect(() => {
        spliceContent()
    }, [])

    return (
        <div className='mainList'>
            <TableContainer component={Paper} aria-label="simple table">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='right'>번호</TableCell>
                            <TableCell align='right'>이름</TableCell>
                            <TableCell align='right'>연령</TableCell>
                            <TableCell align='right'>성별</TableCell>
                            <TableCell align='right'>연락처</TableCell>
                            <TableCell align='right'>운동기간</TableCell>
                            <TableCell align='right'>등록일</TableCell>
                            <TableCell align='right'>종료일</TableCell>
                            <TableCell align='right'>수정</TableCell>
                            <TableCell align='right'>삭제</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {postList}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MainList;