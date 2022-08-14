import React, { useState } from 'react'
import { Button, Form, Container, ListGroup, Card } from 'react-bootstrap';
import FullCalendar, { CalendarApi } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import data from '../../json/data.json';
import '../../css/calendar.css';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import { TextField } from "@mui/material";

const QnADiet = () => {
    // const [value, setValue] = useState({
    //     date: '2014-08-18T21:11:54',
    // })
    const events = [{ title: "아침,점심,저녁", date: new Date() }];
    const [feedbackDiet, setFeedbackDiet] = useState({
        date: '',
        feedback: '',
    })

    // const handleChange = (e) => {
    //     console.log(e.target.name)
    //     console.log(e.target.value)
    //     setValue({
    //         ...value,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFeedbackDiet({
            ...feedbackDiet,
            [e.target.name]: e.target.value
        })
    }

    const list = data.dietInfo.map((data, index) => (
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
        <Container className='feedbackDiet'>
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

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="날짜"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> */}
            <Button variant="dark" type="button" className="my-5 m-2 rounded-pill" onClick={() => document.location.href = '/'} >
                식단
            </Button>
            <Button variant="outline-dark" type="submit" className="my-5 m-2 rounded-pill" onClick={() => document.location.href = '/'}>
                운동
            </Button>

            <div>
                <ListGroup defaultActiveKey="#link1" className="my-1">
                    <ListGroup.Item action href="#link1">
                        아침
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        점심
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                        저녁
                    </ListGroup.Item>
                </ListGroup>

                {list}
            </div>

            <Form method='post' action='/api/feedbackDiet'>
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

export default QnADiet;