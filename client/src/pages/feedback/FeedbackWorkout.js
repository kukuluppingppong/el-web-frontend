import React, { useState } from 'react'
import { Button, Form, Container, ListGroup, Card } from 'react-bootstrap';
import data from '../../data/data.json';
import FullCalendar, { CalendarApi } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../../css/calendar.css';

const QnAWorkout = () => {
    const events = [{ title: "숄더프레스,레터럴레이즈,프론트레이즈", date: new Date() }];
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
        <Card key={index} className="mb-5">
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
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events={events}
                dayMaxEvents={true}
                moreLinkClick="popover"
                contentHeight="500px"
                eventDisplay='block'
                eventBackgroundColor="#ddd"
            />

            <Button variant="outline-dark" type="button" className="my-5 m-2 rounded-pill" onClick={() => document.location.href = '/'} >
                식단
            </Button>
            <Button variant="dark" type="submit" className="my-5 m-2 rounded-pill" onClick={() => document.location.href = '/'}>
                운동
            </Button>

            <div>
                <ListGroup defaultActiveKey="#link1" className="my-1">
                    <ListGroup.Item action href="#link1">
                        숄더프레스
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        레터럴레이즈
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                        프론트레이즈
                    </ListGroup.Item>
                </ListGroup>

                {list}
            </div>

            <Form method='post' action='/api/feedbackWorkout'>
                <Form.Group>
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