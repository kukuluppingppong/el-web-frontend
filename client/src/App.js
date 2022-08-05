import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Container } from "react-bootstrap";
import Layout from "./layouts/Layout";
import MemberList from './components/menber/MemberList';
import MemberWrite from './components/menber/MemberWrite';
import MemberView from './components/menber/MemberView';
import TrainerWrite from './components/trainer/TrainerWrite';
import FeedbackWorkout from './components/feedback/FeedbackWorkout';
import FeedbackDiet from './components/feedback/FeedbackDiet';
import Notification from './components/notification/Notification';
import QnAList from './components/QnA/QnAList';
import QnAView from './components/QnA/QnAView';


function App() {
  const [memberList, setMemberList] = useState([]);
  const [qnaList, setQnaList] = useState([]);

  const resMember = async () => {
    const memberList = await axios.get('/api/memberList');
    console.log(memberList.data);
    setMemberList(memberList.data);
  }

  const resQnA = async () => {
    const qnaList = await axios.get('/api/QnAList');
    console.log(qnaList.data);
    setQnaList(qnaList.data);
  }

  useEffect(() => {
    resMember()
    resQnA()
  }, [])

  return (
    <Layout>
      <Container style={{ minHeight: "80vh" }}>

        <MemberList memberList={memberList} />
        <MemberView memberList={memberList} />
        <FeedbackWorkout />
        <FeedbackDiet />
        <Notification />
        <QnAList qnaList={qnaList} />
        <QnAView qnaList={qnaList} />
        <MemberWrite />
        <TrainerWrite />
        {/* <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<MemberList memberList={memberList} />}></Route>
            <Route exact path='/components/memberView/:id' element={<MemberView memberList={memberList} />}></Route>
            <Route exact path='/components/MemberWrite' element={<MemberWrite />}></Route>
            <Route exact path='/components/TrainerView' element={<TrainerView />}></Route>
            <Route exact path='/components/FeedbackWorkout' element={<FeedbackWorkout />}></Route>
            <Route exact path='/components/FeedbackDiet' element={<FeedbackDiet />}></Route>
            <Route exact path='/components/QnAList' element={<QnAList />}></Route>
            <Route exact path='/components/Notification' element={<Notification />}></Route>
          </Routes>
        </BrowserRouter> */}
      </Container>
    </Layout >
  );
}

export default App;
