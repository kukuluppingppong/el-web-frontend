import React, { useEffect, useState } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function QnAList(props) {
    const [postNum, setPostNum] = useState(0);

    const writeNum = (number) => {
        console.log(number)
        setPostNum(number)
    }

    const postList = props.currentPost.map((data, index) => (
        <TableRow key={index}>
            <TableCell align='right'>{data.number}</TableCell>
            <TableCell align='right'><a href={`/postView/${postNum}`} onClick={() => { writeNum(data.number) }}>{data.title}</a></TableCell>
            <TableCell align='right'>{data.id}</TableCell>
            <TableCell align='right'>{data.data}</TableCell>
            <TableCell align='right'>{data.hit}</TableCell>
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
                            <TableCell align='right'>제목</TableCell>
                            <TableCell align='right'>작성자</TableCell>
                            <TableCell align='right'>등록일</TableCell>
                            <TableCell align='right'>조회수</TableCell>
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