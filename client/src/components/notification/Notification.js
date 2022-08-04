import React from 'react'
import { NavLink } from 'react-router-dom';
import { TableCell, TableRow } from '@mui/material';

const Notification = () => {
    return (
        // <TableRow>
        //     <TableCell align="center">{this.props.id}</TableCell>
        //     <TableCell align="center">
        //         <NavLink to={"/notice/" + this.props.id}>
        //             {this.props.title}
        //         </NavLink>
        //     </TableCell>
        //     <TableCell align="center">{this.props.date}</TableCell>
        // </TableRow>
        <TableRow>
            <TableCell align="center">김동양</TableCell>
            <TableCell align="center">운동 피드백을 등록했습니다.</TableCell>
            <TableCell align="center">
                <NavLink to="/">
                    2022.08.04 운동 피드백
                </NavLink>
            </TableCell>
            <TableCell align="center">밴치프레스</TableCell>
            <TableCell align="center">2022.08.04 16:00:00</TableCell>
        </TableRow>
    )
}

export default Notification;