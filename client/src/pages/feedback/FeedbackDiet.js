import React, { useState } from 'react'
import { Button, Form, Container, ListGroup, Card } from 'react-bootstrap';

const QnADiet = () => {
    const [value, setValue] = useState({
        date: '2014-08-18T21:11:54',
    })
    const [feedbackDiet, setFeedbackDiet] = useState({
        date: '',
        feedback: '',
    })

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFeedbackDiet({
            ...feedbackDiet,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container className='feedbackDiet'>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> */}

            <Form method='post' action='/api/feedbackDiet'>
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
                            아침
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            점심
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                            저녁
                        </ListGroup.Item>
                    </ListGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>식단사진</Form.Label>
                    <Card className="mb-3">
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                            <Card.Title>식단사진입니다.</Card.Title>
                            <Card.Text>
                                식단사진 설명
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

export default QnADiet;