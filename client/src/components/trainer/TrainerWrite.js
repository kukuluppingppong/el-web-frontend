import React, { useEffect, useState } from 'react'


const TrainerWrite = () => {
    const [writeInfo, setWriteInfo] = useState({
        id: '',
        name: '',
        age: '',
        sex: '',
        birth: '',
        height: '',
        weight: '',
        award: '',
        career: '',
        file: '',
        fileName: ''
    })
    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setWriteInfo({
            ...writeInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>내정보 등록</h1>
            <div className='trainerWrite'>
                <form method='post' action='/api/trainerUpdate' multipart='form-data'>
                    <div class="form-group">
                        <label for="id" class="form-label mt-4">아이디</label>
                        <input type='text' class="form-control" id="id" name='id' placeholder='아이디' onChange={inputChange}
                            className='write_id' />
                    </div>
                    <div class="form-group">
                        <label for="name" class="form-label mt-4">이름</label>
                        <input type='text' class="form-control" id="name" name='name' placeholder='이름' onChange={inputChange}
                            className='write_name' />
                    </div>
                    <div class="form-group">
                        <label for="age" class="form-label mt-4">연령</label>
                        <input type='number' class="form-control" id="age" name='age' placeholder='연령' onChange={inputChange}
                            className='write_age' />
                    </div>
                    <div class="form-group">
                        <label for="sex" class="form-label mt-4">성별</label>
                        <input type='text' class="form-control" id="sex" name='sex' placeholder='성별' onChange={inputChange}
                            className='write_sex' />
                    </div>
                    <div class="form-group">
                        <label for="birth" class="form-label mt-4">생년월일</label>
                        <input type='date' class="form-control" id="birth" name='birth' placeholder='생년월일' onChange={inputChange}
                            className='write_birth' />
                    </div>
                    <div class="form-group">
                        <label for="height" class="form-label mt-4">키</label>
                        <input type='number' class="form-control" id="height" name='height' placeholder='키' onChange={inputChange}
                            className='write_height' />
                    </div>
                    <div class="form-group">
                        <label for="weight" class="form-label mt-4">체중</label>
                        <input type='number' class="form-control" id="weight" name='weight' placeholder='체중' onChange={inputChange}
                            className='write_weight' />
                    </div>
                    <div class="form-group">
                        <label for="regDate" class="form-label mt-4">등록일</label>
                        <input type='date' class="form-control" id="regDate" name='regDate' placeholder='등록일' onChange={inputChange}
                            className='write_regDate' />
                    </div>
                    <div class="form-group">
                        <label for="endDate" class="form-label mt-4">종료일</label>
                        <input type='date' class="form-control" id="endDate" name='endDate' placeholder='종료일' onChange={inputChange}
                            className='write_endDate' />
                    </div>
                    <div class="form-group">
                        <label for="phone" class="form-label mt-4">연락처</label>
                        <input type='tel' class="form-control" id="phone" name='phone' placeholder='연락처' onChange={inputChange}
                            className='write_phone' />
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-label mt-4">이메일</label>
                        <input type='email' class="form-control" id="email" name='email' placeholder='이메일' onChange={inputChange}
                            className='write_email' />
                    </div>
                    <input type='submit' value='등록' onClick={() => document.location.href = '/'} className='write_submit' />
                    <a href='/'>취소</a>
                </form>

            </div>
        </div >
    )
}

export default TrainerWrite;