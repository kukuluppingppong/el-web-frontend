import React, { useState } from 'react'
import { Button, Form, Container, ListGroup, Card } from 'react-bootstrap';

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
            <Form method='post' action='/api/feedbackWorkout'>
                <Form.Group>
                    <Form.Label>회원명</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>날짜</Form.Label>
                    <Form.Control type="date" name="date" placeholder="날짜 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>운동목록</Form.Label>
                    <ListGroup defaultActiveKey="#link1" className="mb-3">
                        <ListGroup.Item action href="#link1">
                            운동명
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            운동명
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                            운동명
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4">
                            운동명
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link5">
                            운동명
                        </ListGroup.Item>
                    </ListGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>운동 영상</Form.Label>
                    <Card className="mb-3">
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                            <Card.Title>운동영상입니다.</Card.Title>
                            <Card.Text>
                                운동설명
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Form.Group>
                <Form.Group>
                    <Form.Label>피드백</Form.Label>
                    <Form.Control as="textarea" name="feedback" placeholder="피드백 입력" className="mb-3" onChange={inputChange} />
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