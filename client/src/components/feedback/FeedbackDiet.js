import React, { useState } from 'react'

const QnADiet = () => {
    const [value, setValue] = useState({
        date: '2014-08-18T21:11:54',
    })
    const [feedbackDiet, setFeedbackDiet] = useState({
        date: '',
        feedback: '',
    })

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFeedbackDiet({
            ...feedbackDiet,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='feedbackDiet'>
            <h1>피드백 식단</h1>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> */}
            <form method='post' action='/api/feedbackDiet'>
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
                <input type='submit' value='입력' onClick={() => document.location.href = './FeedbackDiet'} className='feedback_submit' />
            </form>
        </div>
    )
}

export default QnADiet;