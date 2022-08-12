import React, { useState } from 'react'
import { Button, Form, Container, ListGroup, Card } from 'react-bootstrap';
import data from '../../data/data.json';

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

    const list = data.workoutInfo.map((data, index) => (
        <Card key={index} className="mb-3">
            <Card.Img variant="top" src={data.image.src} alt={data.image.alt} height="400px" />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.desc}
                </Card.Text>
            </Card.Body>
        </Card>
    )
    )

    return (
        <Container className='feedbackWorkout'>
            <Button variant="outline-dark" type="button" className="m-2 rounded-pill" onClick={() => document.location.href = '/'} >
                식단
            </Button>
            <Button variant="dark" type="submit" className="m-2 rounded-pill" onClick={() => document.location.href = '/'}>
                운동
            </Button>

            <Form method='post' action='/api/feedbackWorkout'>
                <Form.Group>
                    <Form.Label>회원명</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>날짜</Form.Label>
                    <Form.Control type="date" name="date" placeholder="날짜 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
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
                    </ListGroup>

                    {list}

                </Form.Group>
                <Form.Group>
                    <Form.Label>피드백</Form.Label>
                    <Form.Control as="textarea" name="feedback" placeholder="피드백 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Button variant="dark" type="submit" className="m-2 rounded-pill" onClick={() => document.location.href = '/'}>
                        등록
                    </Button>
                    <Button variant="outline-dark" type="button" className="m-2 rounded-pill" onClick={() => document.location.href = '/'} >
                        취소
                    </Button>
                </Form.Group>
            </Form>
        </Container >
    )
}

export default QnAWorkout;