import React, { useState } from 'react'
import { Button, Form, Container, ListGroup, Card } from 'react-bootstrap';
import data from '../../data/data.json';

const QnADiet = () => {
    const listItem = ["운동명", "운동명", "운동명", "운동명", "운동명", "운동명", "운동명", "운동명", "운동명", "운동명"]

    // const [value, setValue] = useState({
    //     date: '2014-08-18T21:11:54',
    // })
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
            <Button variant="dark" type="button" className="m-2 rounded-pill" onClick={() => document.location.href = '/'} >
                식단
            </Button>
            <Button variant="outline-dark" type="submit" className="m-2 rounded-pill" onClick={() => document.location.href = '/'}>
                운동
            </Button>

            <Form method='post' action='/api/feedbackDiet'>
                <Form.Group>
                    <Form.Label>김동양</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>날짜</Form.Label>
                    <Form.Control type="date" name="date" placeholder="날짜 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>

                <Form.Group>
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

                    {list}

                    {/* <Card className="mb-3">
                        <Card.Img variant="top" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDhfMjgy%2FMDAxNjA0ODQ1NDc5MjE5.jmFmgdZyvLNO4TO5duExmTV4x0Wk90cYiybOdvMDPCAg.bBYf4jDGwMuLVJkzMhJhgNK-m-9caUuFQ06wFs4BBNUg.JPEG.december135%2FIMG%25A3%25DF20200415%25A3%25DF213629%25A3%25DF838.jpg&type=sc960_832" height="400px" />
                        <Card.Body>
                            <Card.Title>식단 피드백</Card.Title>
                            <Card.Text>
                                식단 피드백 내용입니다.
                            </Card.Text>
                        </Card.Body>
                    </Card> */}
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
        </Container>
    )
}

export default QnADiet;