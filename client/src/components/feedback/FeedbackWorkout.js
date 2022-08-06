import React, { useState } from 'react'
import { Button, Form, Container } from "react-bootstrap";

const QnAWorkout = () => {
    const [feedbackWorkout, setFeedbackWorkout] = useState({
        date: '',
        feedback: '',
    })
    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFeedbackWorkout({
            ...feedbackWorkout,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container className='feedbackWorkout'>
            <h3>피드백 운동</h3>
            <Form method='post' action='/api/feedbackWorkout'>
                <Form.Group>
                    <Form.Label>날짜</Form.Label>
                    <Form.Control type="date" name="date" placeholder="날짜 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>운동 영상</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>피드백 </Form.Label>
                    <Form.Control type="text" name="feedback" placeholder="피드백 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Button variant="dark" type="submit" className="my-3 rounded-pill" onClick={() => document.location.href = '/'}>
                        등록
                    </Button>
                    <Button variant="outline-dark" type="button" className="my-3 rounded-pill" onClick={() => document.location.href = '/'} >
                        취소
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default QnAWorkout;