import React, { useState } from 'react'
import { Button, Form, Container } from "react-bootstrap";

function MemberWrite() {
    const [writeInfo, setWriteInfo] = useState({
        name: '',
        age: '',
        sex: '',
        birth: '',
        height: '',
        weight: '',
        regDate: '',
        endDate: '',
        phone: '',
        email: '',
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
        <Container className='memberWrite'>
            <h3>신규회원 등록</h3>
            <Form method='post' action='/api/memberWrite'>
                <Form.Group>
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" name="name" placeholder="이름 입력" autoFocus className="mb-3" onChange={inputChange} />
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
                    <Form.Label>등록일</Form.Label>
                    <Form.Control type="date" name="regDate" placeholder="등록일 입력" className="mb-3" onChange={inputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>종료일</Form.Label>
                    <Form.Control type="date" name="endDate" placeholder="종료일 입력" className="mb-3" onChange={inputChange} />
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

export default MemberWrite;