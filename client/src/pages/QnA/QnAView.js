import React from 'react'
import { Button, Form, Container } from "react-bootstrap";

const QnAView = (props) => {
    const params = window.location.pathname.split('/');
    const viewPost = []
    for (let i = 0; i < props.qnaList.length; i++) {
        if (props.qnaList[i].seq === Number(params[3])) {
            console.log(props.qnaList[i]);
            viewPost.push(props.qnaList[i])
        }
    }
    console.log(viewPost);
    const mapViewPost = viewPost.map(data => {
        return (
            <Container key={data.seq}>
                <h3>QnA 상세</h3>
                <Form method='post' action=''>
                    <Form.Group>
                        <Form.Label>번호</Form.Label>
                        <Form.Control value={data.seq} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>제목</Form.Label>
                        <Form.Control value={data.title} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>작성자</Form.Label>
                        <Form.Control value={data.writer} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>등록일</Form.Label>
                        <Form.Control value={data.regDate} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>답변</Form.Label>
                        <Form.Control value={data.answer} className="mb-3" />
                    </Form.Group>
                    <Button variant="dark" type="button" className="m-2 rounded-pill" onClick={() => document.location.href = '/'} >
                        목록
                    </Button>
                </Form>
            </Container>
        )
    })
    return (
        <div className="QnAView">
            {mapViewPost}
        </div>
    )
}

export default QnAView;