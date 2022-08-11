import React from 'react'
import { Button, Form, Container } from "react-bootstrap";

function TrainerView(props) {
    const params = window.location.pathname.split('/');
    const viewPost = []
    for (let i = 0; i < props.trainerList.length; i++) {
        if (props.trainerList[i].number === Number(params[3])) {
            viewPost.push(props.trainerList[i])
        }
    }
    console.log(viewPost);
    const mapViewPost = viewPost.map(data => {
        return (
            <Container key={data.id}>
                <h3>내정보 상세</h3>
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
                        <Form.Label>헬스장위치</Form.Label>
                        <Form.Control value={data.addr} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>수상</Form.Label>
                        <Form.Control value={data.award} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>이력</Form.Label>
                        <Form.Control value={data.career} className="mb-3" />
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
                        <Form.Label>사진</Form.Label>
                        <Form.Control value={data.image} className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="outline-dark" type="button" className="m-2 rounded-pill" onClick={() => document.location.href = '/'} >
                            목록
                        </Button>
                        <Button variant="dark" type="submit" className="m-2 rounded-pill" onClick={() => document.location.href = `/api/memberView/${data.id}`}>
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

    // const updateHit = async () => {
    //     console.log(document.location.pathname)
    //     const docParams = document.location.pathname
    //     const req = await axios.post(docParams);
    // }

    // useEffect(() => {
    //     updateHit()
    // })

    return (
        <div className='trainerView'>
            {mapViewPost}
        </div>
    )
}

export default TrainerView;