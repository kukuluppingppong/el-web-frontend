import React from 'react'
import { Button, Form, Container } from "react-bootstrap";

function MemberView(props) {
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
                <h3>회원상세</h3>
                <Form method='post' action=''>
                    <Form.Group>
                        <Form.Label>이름</Form.Label>
                        <Form.Control value={data.name} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>연령</Form.Label>
                        <Form.Control value={data.age} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>성별</Form.Label>
                        <Form.Control value={data.sex} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>생년월일</Form.Label>
                        <Form.Control value={data.birth} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>키</Form.Label>
                        <Form.Control value={data.height} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>체중</Form.Label>
                        <Form.Control value={data.weight} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>운동기간</Form.Label>
                        <Form.Control value={data.period} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>등록일</Form.Label>
                        <Form.Control value={data.regDate} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>종료일</Form.Label>
                        <Form.Control value={data.endDate} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control value={data.phone} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>이메일</Form.Label>
                        <Form.Control value={data.email} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="outline-dark" type="button" className="m-2 rounded-pill" onClick={() => document.location.href = '/memberList'} >
                            목록
                        </Button>
                        <Button variant="dark" type="submit" className="m-2 rounded-pill" onClick={() => document.location.href = `memberView/${data.id}`}>
                            수정
                        </Button>
                        <Button variant="dark" type="button" className="m-2 rounded-pill" onClick={() => document.location.href = `/api/memberDelete/${data.id}`}>
                            삭제
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    })

    return (
        <div className='memberView'>
            {mapViewPost}
        </div>
    )
}

export default MemberView;