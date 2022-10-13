import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import SendIcon from '@mui/icons-material/Send';
import '../../css/calendar.css';


const FeedbackDiet = () => {
    const { id } = useParams();

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
        const loadDietList = await axios.get(`/api/feedback/dietList/${id}&/${date}`);
        console.log(loadDietList.data);
        setLoadDietList(loadDietList.data);
    }

    useEffect(() => {
        resDietList()
    }, [])

    const cellList = loadDietList.map(data => (
        <li li key={data.seq} align='right'><a href='#' onClick={() => document.location.href = `/feedbackDiet/${id}&/${data.seq}`}>{data.time}</a></li>
    ))

    const params = window.location.pathname.split('/');
    const viewPost = []
    const title = []
    for (let i = 0; i < loadDietList.length; i++) {
        title.push(loadDietList[i].time)
        if (loadDietList[i].seq === Number(params[3])) {
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
                <button className="bt_send" onClick={() => document.location.href = `/feedbackDiet/${id}&/${data.seq}`}><SendIcon fontSize="large" /></button>
            </div>
        </div>
    )
    )

    const [schedules, setSchedules] = useState([]);
    const addSchdule = (schedule) => {
        console.log(schedule);
        const added = [...schedules, schedule];
        setSchedules(added);
    };

    const handleDateSelect = (event) => {
        const title = prompt("메모를 입력해주세요. (ex 피드백 완료👍)");
        if (title) {
            const color = prompt(
                "메모 색상을 입력해주세요(1~7: 무지개 색생, 0: black, 그 외 입력시 기본색상)"
            );
            event.view.calendar.unselect(); // clear date selection
            const defaultColor = EventColor(color);
            const schedule = {
                id: Date.now(),
                title,
                start: event.startStr,
                end: event.endStr,
                backgroundColor: defaultColor,
                borderColor: defaultColor,
            };
            addSchdule(schedule);
        }
    };

    const events = [{ title: title, date: new Date() }];

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>김동양님</strong>
                <p>식단 피드백을 입력해주세요.</p>
            </div>

            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                events={events}
                eventSources={[schedules]}
                dayMaxEvents={true}
                editable={true}
                droppable={true}
                selectable={true}
                select={handleDateSelect}
                moreLinkClick="popover"
                contentHeight="500px"
                eventDisplay='block'
                eventColor='#a0b2d5'
            />

            <form method="post" action="/api/feedback/dietUpdate">
                <div className="board_list_wrap">
                    <div className="bt_wrap_feedback">
                        <a href="#" className="bt_diet" onClick={() => document.location.href = `/feedbackWorkout/${id}`}>운동</a>
                        <a href="#" className="bt_workout" onClick={() => document.location.href = `/feedbackDiet/${id}`}>식단</a>
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

    function EventColor(color) {
        switch (color) {
            case "0":
                return "#686868";
            case "1":
                return "#d5a0a0";
            case "2":
                return "#d5bca0";
            case "3":
                return "#d5caa0";
            case "4":
                return "#b3d5a0";
            case "5":
                return "#a0c8d5";
            case "6":
                return "#a0b2d5";
            case "7":
                return "#aba0d5";
            default:
                return color;
        }
    }
}

export default FeedbackDiet;