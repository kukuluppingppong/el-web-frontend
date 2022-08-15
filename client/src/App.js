import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import BoardList from './pages/board/BoardList';
import BoardWrite from './pages/board/BoardWrite';
import BoardView from './pages/board/BoardView';
import BoardEdit from './pages/board/BoardEdit';


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
        {/* <MemberWrite /> */}
        {/* <TrainerWrite /> */}
        <BoardList />
        <BoardWrite />
        <BoardView />
        <BoardEdit />

        <Routes>
          <Route exact path='/' element={<MemberList memberList={memberList} />}></Route>
          <Route exact path='/memberList' element={<MemberList memberList={memberList} />}></Route>
          <Route exact path='/memberView/:id' element={<MemberView memberList={memberList} />}></Route>
          <Route exact path='/memberEdit/:id' element={<MemberEdit memberList={memberList} />}></Route>
          <Route exact path='/memberWrite' element={<MemberWrite />}></Route>
          <Route exact path='/trainerWrite' element={<TrainerWrite />}></Route>
          <Route exact path='/feedbackWorkout' element={<FeedbackWorkout />}></Route>
          <Route exact path='/feedbackDiet' element={<FeedbackDiet />}></Route>
          <Route exact path='/QnAList' element={<QnAList qnaList={qnaList} />}></Route>
          <Route exact path='/QnAView' element={<QnAView qnaList={qnaList} />}></Route>
          <Route exact path='/notification' element={<Notification />}></Route>
        </Routes>

      </Container>
    </Layout >
  );
}

export default App;