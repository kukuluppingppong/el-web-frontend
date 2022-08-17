import React, { useState } from 'react'


const TrainerWrite = () => {
    const [writeInfo, setWriteInfo] = useState({
        id: '',
        name: '',
        age: '',
        sex: '남',
        birth: '',
        height: '',
        weight: '',
        award: '',
        file: '',
        fileName: '',
        career: '',
        addr: '',
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
                <strong>내정보 등록</strong>
                <p>내 정보를 모두 입력해주세요.</p>
            </div>
            <nav className="board_list">
                <ul>
                    <li align='right'><button className="bt_member" onClick={() => document.location.href = '#'}><img src="img/ic_member.png" alt="프로필사진"></img></button></li>
                    <li align='right'>개인정보</li>
                    <li align='right'>자기소개</li>
                    <li align='right'>인바디정보</li>
                    <li align='right'>SNS</li>
                </ul>
            </nav>

            <form method="post" action="/api/trainerUpdate" multipart="form-data">
                <input type="hidden" name="id" value={sessionStorage.getItem('id')} />
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
                                <dt>전화번호</dt>
                                <dd><input type="tel" name="phone" placeholder="전화번호 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd><input type="email" name="email" placeholder="이메일 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>헬스장위치</dt>
                                <dd><input type="text" name="addr" placeholder="헬스장위치 입력" className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>프로필사진</dt>
                                <dd><input type="file" name="file" className="mb-3" /></dd>
                            </dl>
                            <dl>
                                <dt>수상</dt>
                                <dd><textarea name="award" placeholder="수상 입력" className="cont" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>이력</dt>
                                <dd><textarea name="career" placeholder="이력 입력" className="cont" onChange={inputChange} /></dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <a href="/">목록</a>
                        <button className="on" onClick={() => document.location.href = `/api/trainerUpdate/${sessionStorage.getItem('id')}`}>수정</button>
                        <button className="on" onClick={() => document.location.href = `/api/trainerDelete/${sessionStorage.getItem('id')}`}>삭제</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default TrainerWrite;