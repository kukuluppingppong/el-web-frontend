import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Layout from './components/layouts/Layout';
import MemberList from './pages/member/MemberList';
import MemberWrite from './pages/member/MemberWrite';
import MemberView from './pages/member/MemberView';
import MemberEdit from './pages/member/MemberEdit';
import MemberInbody from './pages/member/MemberInbody';
import TrainerWrite from './pages/trainer/TrainerWrite';
import TrainerView from './pages/trainer/TrainerView';
import TrainerEdit from './pages/trainer/TrainerEdit';
import FeedbackWorkout from './pages/feedback/FeedbackWorkout';
import FeedbackDiet from './pages/feedback/FeedbackDiet';
import Notification from './pages/notification/Notification';
import QnAList from './pages/QnA/QnAList';
import QnAView from './pages/QnA/QnAView';
import BoardList from './pages/board/BoardList';
import BoardWrite from './pages/board/BoardWrite';
import BoardView from './pages/board/BoardView';
import BoardEdit from './pages/board/BoardEdit';


function App() {

  return (
    <Layout>
      <Container style={{ minHeight: "80vh", marginTop: "50px" }}>
        {/* <BoardList />
        <BoardWrite />
        <BoardView />
        <BoardEdit /> */}

        <Routes>
          <Route exact path='/' element={<MemberList />}></Route>
          <Route exact path='/memberList' element={<MemberList />}></Route>
          <Route exact path='/memberView/:id' element={<MemberView />}></Route>
          <Route exact path='/memberEdit/:id' element={<MemberEdit />}></Route>
          <Route exact path='/memberWrite' element={<MemberWrite />}></Route>
          <Route exact path='/memberInbody' element={<MemberInbody />}></Route>
          <Route exact path='/trainerWrite' element={<TrainerWrite />}></Route>
          <Route exact path='/trainerView' element={<TrainerView />}></Route>
          <Route exact path='/trainerEdit' element={<TrainerEdit />}></Route>
          <Route exact path='/feedbackWorkout' element={<FeedbackWorkout />}></Route>
          <Route exact path='/feedbackDiet' element={<FeedbackDiet />}></Route>
          <Route exact path='/QnAList' element={<QnAList />}></Route>
          <Route exact path='/QnAView/:seq' element={<QnAView />}></Route>
          <Route exact path='/notification' element={<Notification />}></Route>
        </Routes>

      </Container>
    </Layout >
  );
}

export default App;