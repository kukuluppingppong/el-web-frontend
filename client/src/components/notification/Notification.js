import React from 'react'
import { NavLink } from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Notification = () => {
    return (
        <TableRow>
            <TableCell align="center">{this.props.id}</TableCell>
            <TableCell align="center">
                <NavLink to={"/notice/" + this.props.id}>
                    {this.props.title}
                </NavLink>
            </TableCell>
            <TableCell align="center">{this.props.date}</TableCell>
        </TableRow>
    )
}

export default Notification;