import React, { useState } from 'react'
import Box from '@mui/material/Box';

function MemberWrite(props) {
    const [writeInfo, setWriteInfo] = useState({
        name: '',
        age: '',
        sex: '',
        birth: '',
        height: '',
        weight: '',
        regDate: '',
        endDate: '',
        phone: '',
        email: '',
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
        <Box
            sx={{
                width: '700px',
                bgcolor: '#cfe8fc', height: '600px', backgroundColor: '#fff',
                margin: '0 auto',
                paddingTop: '10px', textAlign: 'center', marginTop: '70px', borderRadius: '20px',
                boxShadow: '4px 4px 4px 4px gray'
            }}
        >
            <h1>신규회원 등록</h1>
            <div className='write'>
                <form method='post' action='/memberWrite'>
                    <input type='text' placeholder='이름' name='name' onChange={inputChange}
                        className='write_name' />
                    <input type='number' placeholder='연령' name='name' onChange={inputChange}
                        className='write_name' />
                    <input type='text' placeholder='성별' name='sex' onChange={inputChange}
                        className='write_sex' />
                    <input type='date' placeholder='생년월일' name='birth' onChange={inputChange}
                        className='write_birth' />
                    <input type='number' placeholder='키' name='height' onChange={inputChange}
                        className='write_height' />
                    <input type='number' placeholder='체중' name='weight' onChange={inputChange}
                        className='write_weight' />
                    <input type='date' placeholder='등록일' name='regDate' onChange={inputChange}
                        className='write_regDate' />
                    <input type='date' placeholder='종료일' name='endDate' onChange={inputChange}
                        className='write_endDate' />
                    <input type='tel' placeholder='연락처' name='phone' onChange={inputChange}
                        className='write_phone' />
                    <input type='email' placeholder='이메일' name='email' onChange={inputChange}
                        className='write_email' />
                    {/* <input type='text' value={sessionStorage.getItem('id')} placeholder='id 입력' name='id' onChange={inputChange}
                        className='write_writer_id' /> */}
                    <input type='submit' value='저장' onClick={() => document.location.href = '/'} className='write_submit' />
                    <a href='/'>취소</a>
                </form>

            </div>
        </Box>
    )
}

export default MemberWrite;