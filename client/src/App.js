import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import { Container } from "react-bootstrap";
import Layout from "./layouts/Layout";
import MemberList from './components/menber/MemberList';

function App(props) {

  return (
    <Layout>
      <Container><MemberList /></Container>
      <Container style={{ minHeight: "80vh" }}>회원관리</Container>
    </Layout>
  );
}

export default App;
