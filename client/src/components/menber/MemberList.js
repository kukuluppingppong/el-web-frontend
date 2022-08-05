import React, { useEffect, useState } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function MemberList(props) {

    const list = props.memberList.map((data, index) => (
        <TableRow key={index}>
            <TableCell align='right'>{index}</TableCell>
            <TableCell align='right'><a href={`/api/memberView/${data.id}`}>{data.name}</a></TableCell>
            <TableCell align='right'>{data.age}</TableCell>
            <TableCell align='right'>{data.sex}</TableCell>
            <TableCell align='right'>{data.phone}</TableCell>
            <TableCell align='right'>{data.period}</TableCell>
            <TableCell align='right'>{data.regDate}</TableCell>
            <TableCell align='right'>{data.endDate}</TableCell>
            <TableCell align='right'><EditIcon /></TableCell>
            <TableCell align='right'><DeleteIcon /></TableCell>
        </TableRow>
    )
    )

    return (
        <div className='memberList'>
            <h3>회원목록</h3>
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
                        {list}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MemberList;