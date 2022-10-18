import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '../css/calendar.css';

const Calendar = (props) => {

    // const handleEventClick = (click) => {
    //     if (window.confirm(`delete the event '${click.event.title}'`)) {
    //         const eventId = click.event._def.publicId * 1;
    //         onDelete(eventId);
    //     }
    // };

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
                date: event.startStr,
                title,
                start: event.startStr,
                end: event.endStr,
                backgroundColor: defaultColor,
                borderColor: defaultColor,
            };
            addSchdule(schedule);
        }
    };

    const events = props.events;
    const API_KEY = 'AIzaSyBeAminwiaTKe8qBvCDCN-K7Bq5BS2eIyA';

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin]}
                initialView='dayGridMonth'
                googleCalendarApiKey={API_KEY}
                events={{
                    googleCalendarId: 'e001b0763de075eb328d5abb876d9cad1f54568cce0d118f2646c31d8f3de83d@group.calendar.google.com',
                }}
                eventSources={[events, schedules]}
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
        </div>
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

export default Calendar;
