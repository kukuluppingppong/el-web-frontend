import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import SendIcon from '@mui/icons-material/Send';
import '../../css/calendar.css';


const QnADiet = () => {
    const [feedbackDiet, setFeedbackDiet] = useState({
        date: '',
        feedback: '',
    })

    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFeedbackDiet({
            ...feedbackDiet,
            [e.target.name]: e.target.value
        })
    }

    const [loadDietList, setLoadDietList] = useState([]);

    const date = '2022-10-12';
    const resDietList = async () => {
        const loadDietList = await axios.get(`/api/feedback/dietList/${date}`);
        console.log(loadDietList.data);
        setLoadDietList(loadDietList.data);
    }

    useEffect(() => {
        resDietList()
    }, [])

    const cellList = loadDietList.map(data => (
        <li li key={data.seq} align='right'><a href='#' onClick={() => document.location.href = `/feedbackDiet/${data.seq}`}>{data.time}</a></li>
    ))

    const params = window.location.pathname.split('/');
    const viewPost = []
    for (let i = 0; i < loadDietList.length; i++) {
        if (loadDietList[i].seq === Number(params[2])) {
            console.log(loadDietList[i]);
            viewPost.push(loadDietList[i])
        }
    }

    const list = viewPost.map(data => (
        <div key={data.seq} className="card">
            <input type="hidden" name="seq" value={data.seq} />
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
                <p>식단 피드백을 입력해주세요.</p>
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

            <form method="post" action="/api/feedback/dietUpdate">
                <div className="board_list_wrap">
                    <div className="bt_wrap_feedback">
                        <a href="/feedbackWorkout" className="bt_diet">운동</a>
                        <a href="/feedbackDiet" className="bt_workout">식단</a>
                    </div>
                    <nav className="feedback_list">
                        <ul>
                            {cellList}
                        </ul>
                    </nav>
                    {list}
                </div>
            </form>
        </div >
    )
}

export default QnADiet;