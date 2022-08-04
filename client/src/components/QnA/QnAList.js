import React from 'react'
import { NavLink } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    no,
    title,
    writer,
    regDate,
    answer,
) {
    return { no, title, writer, regDate, answer };
}

const rows = [
    createData(1, '제목입니다.', '관리자', '2022-08-05', 'O'),
    createData(1, '제목입니다.', '관리자', '2022-08-05', 'O'),
    createData(1, '제목입니다.', '관리자', '2022-08-05', 'O'),
    createData(1, '제목입니다.', '관리자', '2022-08-05', 'O'),
    createData(1, '제목입니다.', '관리자', '2022-08-05', 'O'),
];

const QnAList = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell align="right">제목</TableCell>
                        <TableCell align="right">작성자</TableCell>
                        <TableCell align="right">등록일</TableCell>
                        <TableCell align="right">답변</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.no}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.no}
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.writer}</TableCell>
                            <TableCell align="right">{row.regDate}</TableCell>
                            <TableCell align="right">{row.answer}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default QnAList;