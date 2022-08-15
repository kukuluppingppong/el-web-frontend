import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';


const QnAList = (props) => {
    const cellList = ["번호", "제목", "작성자", "등록일", "답변"]

    const list = props.qnaList.map((data, index) => (
        <TableRow key={index}>
            <TableCell align='right'>{index}</TableCell>
            <TableCell align='right'><a href={`/api/QnAView/${data.seq}`}>{data.title}</a></TableCell>
            <TableCell align='right'>{data.writer}</TableCell>
            <TableCell align='right'>{data.regDate}</TableCell>
            <TableCell align='right'>{data.answer}</TableCell>
        </TableRow>
    )
    )

    return (
        <TableContainer component={Paper}>
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
    )
}

export default QnAList;