import React from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function MemberList(props) {
    const cellList = ["번호", "이름", "연령", "성별", "연락처", "운동기간", "등록일", "종료일", "수정", "삭제"]
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
            <TableCell align='right'>
                <Button variant="dark" type="button" className="rounded-pill" onClick={() => document.location.href = `/api/memberView/${data.id}`}>
                    <EditIcon />
                </Button>
            </TableCell>
            <TableCell align='right'>
                <Button variant="dark" type="button" className="rounded-pill" onClick={() => document.location.href = `/api/memberDelete/${data.id}`}>
                    <DeleteIcon />
                </Button>
            </TableCell>
        </TableRow>
    )
    )

    return (
        <div className='memberList'>
            <h3>회원목록</h3>
            <Button variant="dark" type="button" className="m-2 rounded-pill" onClick={() => document.location.href = './memberWrite'}>
                글쓰기<CreateIcon />
            </Button>
            <TableContainer component={Paper} aria-label="simple table">
                <Table>
                    <TableHead>
                        <TableRow>
                            {cellList.map(cell => {
                                return <TableCell align='right'>{cell}</TableCell>
                            })}
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