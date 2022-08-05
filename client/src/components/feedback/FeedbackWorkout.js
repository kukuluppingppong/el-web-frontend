import React, { useState } from 'react'

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

    return (
        <div className='feedbackWorkout'>
            <h1>피드백 운동</h1>
            <form method='post' action='/api/feedbackWorkout'>
                <div class="form-group">
                    <label for="date" class="form-label mt-4">날짜 선택</label>
                    <input type='date' class="form-control" id="date" name='date' placeholder='날짜 선택' onChange={inputChange}
                        className='write_date' />
                </div>
                <div class="form-group">
                    <label for="feedback" class="form-label mt-4">피드백 입력</label>
                    <textarea class="form-control" id="feedback" name='feedback' placeholder='피드백 입력' onChange={inputChange}
                        className='write_feedback' />
                </div>
                {/* <input type='text' value={sessionStorage.getItem('id')} placeholder='id 입력' name='id' onChange={inputChange}
                        className='write_writer_id' /> */}
                <input type='submit' value='입력' onClick={() => document.location.href = './FeedbackWorkout'} className='feedback_submit' />
            </form>
        </div>
    )
}

export default QnAWorkout;