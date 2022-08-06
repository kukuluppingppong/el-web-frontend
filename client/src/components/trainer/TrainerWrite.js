import React, { useEffect, useState } from 'react'
import { Button, Form, Container } from "react-bootstrap";

const TrainerWrite = () => {
    const [writeInfo, setWriteInfo] = useState({
        id: '',
        name: '',
        age: '',
        sex: '',
        birth: '',
        height: '',
        weight: '',
        award: '',
        career: '',
        file: '',
        fileName: ''
    })
    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setWriteInfo({
            ...writeInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container className='trainerWrite'>
            <h3>내정보 등록</h3>
            <Form method='post' action='/api/trainerUpdate' multipart='form-data'>
                <Form.Group>
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type="text" name="id" placeholder="아이디 입력" autoFocus className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" name="name" placeholder="이름 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>연령</Form.Label>
                    <Form.Control type="number" name="age" placeholder="연령 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>성별</Form.Label>
                    <Form.Control type="text" name="sex" placeholder="성별 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>생년월일</Form.Label>
                    <Form.Control type="date" name="birth" placeholder="생년월일 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>키</Form.Label>
                    <Form.Control type="number" name="height" placeholder="키 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>체중</Form.Label>
                    <Form.Control type="number" name="weight" placeholder="체중 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control type="tel" name="phone" placeholder="전화번호 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="email" name="email" placeholder="이메일 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>수상</Form.Label>
                    <Form.Control type="text" name="award" placeholder="수상 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>이력</Form.Label>
                    <Form.Control type="text" name="career" placeholder="이력 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>프로필 사진</Form.Label>
                    <Form.Control type="file" name="file" placeholder="프로필 사진 업로드" className="mb-3" onChange={inputChange} />
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

export default TrainerWrite;