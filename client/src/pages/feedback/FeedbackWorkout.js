import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Form, Container, ListGroup, Card } from 'react-bootstrap';
import FullCalendar, { CalendarApi } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import SendIcon from '@mui/icons-material/Send';
import data from '../../data/data.json';
import '../../css/calendar.css';


const QnAWorkout = () => {
    const [feedbackWorkout, setFeedbackWorkout] = useState({
        date: '',
        feedback: '',
    })

    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFeedbackWorkout({
            ...feedbackWorkout,
            [e.target.name]: e.target.value
        })
    }

    const [loadWorkoutList, setLoadWorkoutList] = useState([]);

    const date = '2022-10-12';
    const resWorkoutList = async () => {
        const loadWorkoutList = await axios.get(`/api/feedback/workoutList/${date}`);
        console.log(loadWorkoutList.data);
        setLoadWorkoutList(loadWorkoutList.data);
    }

    useEffect(() => {
        resWorkoutList()
    }, [])

    const cellList = loadWorkoutList.map(data => (
        <li li key={data.seq} align='right'><a href='#' onClick={() => document.location.href = `/feedbackWorkout/${data.seq}`}>{data.name}</a></li>
    ))

    const params = window.location.pathname.split('/');
    const viewPost = []
    for (let i = 0; i < loadWorkoutList.length; i++) {
        if (loadWorkoutList[i].seq === Number(params[2])) {
            console.log(loadWorkoutList[i]);
            viewPost.push(loadWorkoutList[i])
        }
    }

    const list = viewPost.map(data => (
        <div key={data.seq} className="card">
            <img className="card_img" src={data.url} />
            <div className="card_body">
                <p className="card_text"> {data.feedback}</p>
                <textarea name="feedback" placeholder="피드백 입력" className="cont" onChange={inputChange} ></textarea>
                <button className="bt_send" onClick={() => document.location.href = '/memberList'}><SendIcon fontSize="large" /></button>
            </div>
        </div>
    )
    )

    const events = [{ title: cellList, date: new Date() }];

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>김동양님</strong>
                <p>운동 피드백을 입력해주세요.</p>
            </div>

            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events={events}
                dayMaxEvents={true}
                moreLinkClick="popover"
                contentHeight="500px"
                eventDisplay='block'
                eventColor='#4F4F4F'
            />

            <form method="post" action="/api/feedback">
                <div className="board_list_wrap">
                    <div className="bt_wrap_feedback">
                        <a href="/feedbackWorkout" className="bt_workout">운동</a>
                        <a href="/feedbackDiet" className="bt_diet">식단</a>
                    </div>
                    <nav className="feedback_list">
                        <ul>
                            {cellList}
                        </ul>
                    </nav>
                    {list}
                </div>
            </form >
        </div >
    )
}

export default QnAWorkout;