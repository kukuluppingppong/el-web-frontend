import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Modal, Button, Form, Container } from "react-bootstrap";
// import { GoogleLogin } from "react-google-login";
import HorizontalLine from "../components/HorizonLine";

const SignUpModal = ({ show, onHide }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const id = data.id;
        const password = data.password;
        const passwordCheck = data.passwordCheck;
        const name = data.name;
        const phone = data.phone;
        const addr = data.addr;
        if (password !== passwordCheck) {
            alert('비밀번호가 다릅니다!');
            data.password.value = '';
            data.passwordCheck.value = '';
        }
        const res = await axios.post(`/api/member/${id}&/${password}&/${passwordCheck}&/${name}&/${phone}&/${addr}`)
        console.log(res);
    };

    const loginSuccess = () => {
        alert("회원가입이 성공적으로 이루어졌습니다.")
        // document.location.href = '/';
    }
    console.log(watch("id"));

    return (
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">회원가입</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)} method="post">
                        <Form.Group>
                            <Form.Label>아이디</Form.Label>
                            <Form.Control type="text" name="id" placeholder="아이디 입력" autoFocus className="mb-3 rounded-pill" {...register("id")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" name="password" placeholder="비밀번호 입력" className="mb-3 rounded-pill" {...register("password")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>비밀번호 확인</Form.Label>
                            <Form.Control type="password" name="passwordCheck" placeholder="비밀번호 재입력" className="mb-3 rounded-pill" {...register("passwordCheck")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>이름</Form.Label>
                            <Form.Control type="text" name="name" placeholder="이름 입력" className="mb-3 rounded-pill" {...register("name")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>전화번호</Form.Label>
                            <Form.Control type="tel" name="phone" placeholder="전화번호 입력" className="mb-3 rounded-pill" {...register("phone")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>헬스장 위치</Form.Label>
                            <Form.Control type="search" name="addr" placeholder="헬스장 위치 입력" className="mb-3 rounded-pill" {...register("addr")} />
                        </Form.Group>
                        <Form.Group className="d-grid gap-2">
                            <Button block variant="dark" type="submit" className="my-3 rounded-pill" onClick={loginSuccess}>
                                회원가입
                            </Button>
                            <Form.Text className="text-muted">
                                이미 계정이 있으신가요?
                            </Form.Text>
                            <Button block variant="outline-dark" type="button" className="my-3 rounded-pill">
                                로그인
                            </Button>

                            <HorizontalLine text={"OR"} />
                            {/* <GoogleLogin render={(renderProps) => {
                            return ( */}
                            <Button
                                // onClick={renderProps.onClick} 
                                // disabled={renderProps.disabled} 
                                block
                                style={{
                                    backgroundColor: "#176BEF",
                                    borderColor: "#176BEF",
                                }}>
                                <i className="fab fa-google"></i>&nbsp; Sign Up with Google
                            </Button>
                            {/* );
                        }}
                        /> */}
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Container>
        </Modal>
    );
};

export default SignUpModal;