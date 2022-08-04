import React, { useEffect, useState } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function createData(
    no,
    name,
    age,
    sex,
    phone,
    period,
    regDate,
    endDate,
) {
    return { no, name, age, sex, phone, period, regDate, endDate };
}

const rows = [
    createData(1, '김동양.', 27, '남', '010-0000-0000', '1개월', '2022-08-05', '2022-08-05'),
    createData(1, '김동양.', 27, '남', '010-0000-0000', '1개월', '2022-08-05', '2022-08-05'),
    createData(1, '김동양.', 27, '남', '010-0000-0000', '1개월', '2022-08-05', '2022-08-05'),
    createData(1, '김동양.', 27, '남', '010-0000-0000', '1개월', '2022-08-05', '2022-08-05'),
    createData(1, '김동양.', 27, '남', '010-0000-0000', '1개월', '2022-08-05', '2022-08-05'),
];

function MemberList(props) {

    // const list = props.memberList.map((data, index) => (
    //     <TableRow key={index}>
    //         <TableCell align='right'>{index}</TableCell>
    //         <TableCell align='right'><a href={`/memberView/${data.id}`}>{data.name}</a></TableCell>
    //         <TableCell align='right'>{data.age}</TableCell>
    //         <TableCell align='right'>{data.sex}</TableCell>
    //         <TableCell align='right'>{data.phone}</TableCell>
    //         <TableCell align='right'>{data.period}</TableCell>
    //         <TableCell align='right'>{data.regDate}</TableCell>
    //         <TableCell align='right'>{data.endDate}</TableCell>
    //         <TableCell align='right'>수정</TableCell>
    //         <TableCell align='right'>삭제</TableCell>
    //     </TableRow>
    // )
    // )

    const list = rows.map((data, index) => (
        <TableRow key={index}>
            <TableCell align='right'>{data.no}</TableCell>
            <TableCell align='right'>{data.name}</TableCell>
            <TableCell align='right'>{data.age}</TableCell>
            <TableCell align='right'>{data.sex}</TableCell>
            <TableCell align='right'>{data.phone}</TableCell>
            <TableCell align='right'>{data.period}</TableCell>
            <TableCell align='right'>{data.regDate}</TableCell>
            <TableCell align='right'>{data.endDate}</TableCell>
            <TableCell align='right'>수정</TableCell>
            <TableCell align='right'>삭제</TableCell>
        </TableRow>
    ))

    return (
        <div className='memberList'>
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