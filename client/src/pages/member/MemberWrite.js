import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function MemberWrite() {
    const [writeInfo, setWriteInfo] = useState({
        name: '',
        age: '',
        sex: '남',
        birth: '',
        height: '',
        weight: '',
        period: '',
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
        <div className="board_wrap">
            <div className="board_title">
                <strong>신규회원 등록</strong>
                <p>회원 정보를 모두 입력해주세요.</p>
            </div>
            <nav className="board_list">
                <ul>
                    <li align='right'><button className="bt_member" onClick={() => document.location.href = '#'}><img src="/img/ic_member.png" alt="프로필사진"></img></button></li>
                    <li align='right'><Link to={`/memberView/1`}>개인정보</Link></li>
                    <li align='right'><Link to={`/memberInbody`}>인바디정보</Link></li>
                    <li align='right'><Link to={`/feedbackWorkout`}>운동기록</Link></li>
                    <li align='right'><Link to={`/feedbackDiet`}>식단기록</Link></li>
                </ul>
            </nav>

            <form method="post" action="/api/memberWrite">
                <div className="board_write_wrap">
                    <div className="board_write">
                        <div class="info">
                            <dl>
                                <dt>이름</dt>
                                <dd><input type="text" name="name" placeholder="이름 입력" autoFocus className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>연령</dt>
                                <dd><input type="number" name="age" placeholder="연령 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>성별</dt>
                                <dd>
                                    <input type="radio" id="man" name="sex" value="남" checked={writeInfo.sex === "남"} onChange={inputChange} />
                                    <label for="man">남자</label>
                                    <input type="radio" id="woman" name="sex" value="여" checked={writeInfo.sex === "여"} onChange={inputChange} />
                                    <label for="woman">여자</label>
                                </dd>
                            </dl>
                            <dl>
                                <dt>생년월일</dt>
                                <dd><input type="date" name="birth" placeholder="생년월일 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>키</dt>
                                <dd><input type="number" name="height" placeholder="키 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>체중</dt>
                                <dd><input type="number" name="weight" placeholder="체중 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>운동기간</dt>
                                <dd><input type="text" name="period" placeholder="운동기간 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>등록일</dt>
                                <dd><input type="date" name="regDate" placeholder="등록일 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>종료일</dt>
                                <dd><input type="date" name="endDate" placeholder="종료일 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>전화번호</dt>
                                <dd><input type="tel" name="phone" placeholder="전화번호 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd><input type="email" name="email" placeholder="이메일 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>사진</dt>
                                <dd><input type="file" name="file" /></dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <button className="on" onClick={() => document.location.href = '/memberList'}>등록</button>
                        <a href="/memberList">취소</a>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default MemberWrite;