import React from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { Modal, Container } from "react-bootstrap";



const Notification = ({ show, onHide }) => {

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
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">모든알림</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><a href='/feedbackWorkout'>김동양님이 피드백 운동을 등록했습니다.<br /><small>11 mins ago</small></a></p>
                    <p><a href='/feedbackDiet'>김동양님이 피드백 식단을 등록했습니다.<br /><small>11 mins ago</small></a></p>
                </Modal.Body>
            </Container>
        </Modal >
    )
}

export default Notification;