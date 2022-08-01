import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import SignUpModal from "../modals/SignUpModal";
import SignInModal from "../modals/SignInModal";
// import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    const [signInModalOn, setSignInModalOn] = useState(false);
    return (
        <>

            <SignUpModal
                show={signUpModalOn}
                onHide={() => setSignUpModalOn(false)}
            />
            <SignInModal
                show={signInModalOn}
                onHide={() => setSignInModalOn(false)}
            />
            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>Trainer</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#">회원관리</Nav.Link>
                                <Nav.Link href="#">회원정보</Nav.Link>
                                <Nav.Link href="#">피드백</Nav.Link>
                                <Nav.Link href="#">내정보</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link>
                                    <Button
                                        variant="outline-dark"
                                        className="rounded-pill"
                                        onClick={() => setSignInModalOn(true)}
                                    >
                                        로그인
                                    </Button>
                                </Nav.Link>
                                <Nav.Link>
                                    <Button
                                        variant="outline-dark"
                                        className="rounded-pill"
                                        onClick={() => setSignUpModalOn(true)}
                                    >
                                        회원가입
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;