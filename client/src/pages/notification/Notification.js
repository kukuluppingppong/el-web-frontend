import React from 'react'
// import { NavLink } from 'react-router-dom';
import { Toast, CloseButton } from 'react-bootstrap';


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
            <Toast style={{ width: '500px' }}>
                <Toast.Header>
                    <strong className="me-auto">모든 알림</strong>
                </Toast.Header>
                <Toast.Body>김동양님이 피드백 영상을 등록했습니다.<br /><small>11 mins ago</small></Toast.Body>
                <Toast.Body>김동양님이 피드백 영상을 등록했습니다.<br /><small>11 mins ago</small></Toast.Body>
                <Toast.Body>김동양님이 피드백 영상을 등록했습니다.<br /><small>11 mins ago</small></Toast.Body>
                <Toast.Body>김동양님이 피드백 영상을 등록했습니다.<br /><small>11 mins ago</small></Toast.Body>
                <Toast.Body>김동양님이 피드백 영상을 등록했습니다.<br /><small>11 mins ago</small></Toast.Body>
            </Toast>
        </div >
    )
}

export default Notification;