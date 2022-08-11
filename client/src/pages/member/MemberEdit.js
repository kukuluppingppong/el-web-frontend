import React, { useState } from 'react'
import { Button, Form, Container } from "react-bootstrap";

const MemberEdit = (props) => {
    const [editInfo, setEditInfo] = useState({
        name: '',
        age: '',
        sex: '',
        birth: '',
        height: '',
        weight: '',
        period: '',
        regDate: '',
        endDate: '',
        phone: '',
        email: '',
    })
    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setEditInfo({
            ...editInfo,
            [e.target.name]: e.target.value
        })
    }

    const params = window.location.pathname.split('/');
    const viewPost = []
    for (let i = 0; i < props.memberList.length; i++) {
        if (props.memberList[i].id === Number(params[3])) {
            console.log(props.memberList[i]);
            viewPost.push(props.memberList[i])
        }
    }
    console.log(viewPost);
    const mapViewPost = viewPost.map(data => {
        return (
            <Container key={data.id}>
                <h3>회원수정</h3>
                <Form method='post' action='/api/memberUpdate'>


                    <Form.Control type="hidden" name="id" value={data.id} />
                    <Form.Group>
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="text" name="name" value={data.name} autoFocus className="mb-3" onChange={inputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>연령</Form.Label>
                        <Form.Control type="number" name="age" value={data.age} className="mb-3" onChange={inputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>성별</Form.Label>
                        <div key="custom-inline-radio" className="mb-3">
                            <Form.Check
                                custom
                                inline
                                name="sex"
                                label="남자"
                                type="radio"
                                checked={data.sex === "남"}
                                id="custom-inline-radio-1"
                                value="남"
                                onChange={inputChange}
                            />
                            <Form.Check
                                custom
                                inline
                                label="여자"
                                name="sex"
                                type="radio"
                                checked={data.sex === "여"}
                                id="custom-inline-radio-2"
                                value="여"
                                onChange={inputChange}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>생년월일</Form.Label>
                        <Form.Control type="date" name="birth" value={data.birth} className="mb-3" onChange={inputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>키</Form.Label>
                        <Form.Control type="number" name="height" value={data.height} className="mb-3" onChange={inputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>체중</Form.Label>
                        <Form.Control type="number" name="weight" value={data.weight} className="mb-3" onChange={inputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>운동기간</Form.Label>
                        <Form.Control type="text" name="period" value={data.period} className="mb-3" onChange={inputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>등록일</Form.Label>
                        <Form.Control type="date" name="regDate" value={data.regDate} className="mb-3" onChange={inputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>종료일</Form.Label>
                        <Form.Control type="date" name="endDate" value={data.endDate} className="mb-3" onChange={inputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control type="tel" name="phone" value={data.phone} className="mb-3" onChange={inputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" name="email" value={data.email} className="mb-3" onChange={inputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="dark" type="submit" className="m-2 rounded-pill" onClick={() => document.location.href = '/'}>
                            수정
                        </Button>
                        <Button variant="outline-dark" type="button" className="m-2 rounded-pill" onClick={() => document.location.href = '/'} >
                            취소
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    })

    return (
        <div className='memberEdit'>
            {mapViewPost}
        </div>
    )
}

export default MemberEdit