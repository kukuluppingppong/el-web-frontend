import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Container } from "react-bootstrap";
import Layout from './components/layouts/Layout';
import MemberList from './pages/member/MemberList';
import MemberWrite from './pages/member/MemberWrite';
import MemberView from './pages/member/MemberView';
import MemberEdit from './pages/member/MemberEdit';
import TrainerWrite from './pages/trainer/TrainerWrite';
import FeedbackWorkout from './pages/feedback/FeedbackWorkout';
import FeedbackDiet from './pages/feedback/FeedbackDiet';
import Notification from './pages/notification/Notification';
import QnAList from './pages/QnA/QnAList';
import QnAView from './pages/QnA/QnAView';
import Search from './components/Search';

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
        <Search />
        {/* <MemberList memberList={memberList} /> */}
        {/* <MemberView memberList={memberList} /> */}
        {/* <MemberEdit memberList={memberList} /> */}
        {/* <FeedbackWorkout /> */}
        {/* <FeedbackDiet /> */}
        {/* <Notification /> */}
        {/* <QnAList qnaList={qnaList} /> */}
        {/* <QnAView qnaList={qnaList} /> */}
        <MemberWrite />
        {/* <TrainerWrite /> */}
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
