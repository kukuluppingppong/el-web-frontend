import React from 'react'
import { NavLink } from 'react-router-dom';
import { Toast } from 'react-bootstrap';

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

        <div>
            <Toast>
                <Toast.Header>
                    <img src="#" className="rounded me-2" alt="" />
                    <strong className="me-auto">알림</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>김동양님이 피드백 영상을 등록했습니다.</Toast.Body>
                <Toast.Body>김동양님이 피드백 영상을 등록했습니다.</Toast.Body>
                <Toast.Body>김동양님이 피드백 영상을 등록했습니다.</Toast.Body>
                <Toast.Body>김동양님이 피드백 영상을 등록했습니다.</Toast.Body>
                <Toast.Body>김동양님이 피드백 영상을 등록했습니다.</Toast.Body>
            </Toast>
        </div>
    )
}

export default Notification;