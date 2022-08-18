import React, { useEffect, useState } from 'react';
import axios from 'axios';


const MemberEdit = () => {
    const [editInfo, setEditInfo] = useState({
        name: '',
        age: '',
        sex: '',
        birth: '',
        height: '',
        weight: '',
        phone: '',
        email: '',
        award: '',
        career: '',
        file: '',
    })

    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setEditInfo({
            ...editInfo,
            [e.target.name]: e.target.value
        })
    }

    const [loadTrainerView, setLoadTrainerView] = useState([]);

    const resTrainerView = async () => {
        const loadTrainerView = await axios.get('/api/trainerView');
        console.log(loadTrainerView.data);
        setLoadTrainerView(loadTrainerView.data);
    }

    useEffect(() => {
        resTrainerView()
    }, [])

    const mapViewPost = loadTrainerView.map(data => {
        return (
            <div key={data.id} className="board_wrap">
                <div className="board_title">
                    <strong>내정보 수정</strong>
                    <p>내정보를 수정해주세요.</p>
                </div>
                <nav className="board_list">
                    <ul>
                        <li align='right'><button className="bt_member" onClick={() => document.location.href = '#'}><img src="img/ic_member.png" alt="프로필사진"></img></button></li>
                        <li><input type="file" name="file" /></li>
                        <li align='right'><a href="/trainerView">개인정보</a></li>
                        <li align='right'>자기소개</li>
                        <li align='right'>인바디정보</li>
                        <li align='right'>SNS</li>
                    </ul>
                </nav>

                <form method="post" action="/api/trainerUpdate">
                    <input type="hidden" name="id" value={data.id} />
                    <div className="board_write_wrap">
                        <div className="board_write">
                            <div class="info">
                                <dl>
                                    <dt>이름</dt>
                                    <dd><input type="text" name="name" value={data.name} autoFocus className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>연령</dt>
                                    <dd><input type="number" name="age" value={data.age} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>성별</dt>
                                    <dd>
                                        <input type="radio" id="man" name="sex" value="남" checked={data.sex === "남"} onChange={inputChange} />
                                        <label for="man">남자</label>
                                        <input type="radio" id="woman" name="sex" value="여" checked={data.sex === "여"} onChange={inputChange} />
                                        <label for="woman">여자</label>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>생년월일</dt>
                                    <dd><input type="date" name="birth" value={data.birth} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>키</dt>
                                    <dd><input type="number" name="height" value={data.height} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>체중</dt>
                                    <dd><input type="number" name="weight" value={data.weight} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>전화번호</dt>
                                    <dd><input type="tel" name="phone" value={data.phone} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>이메일</dt>
                                    <dd><input type="email" name="email" value={data.email} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>수상</dt>
                                    <dd><input type="text" name="award" value={data.award} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>이력</dt>
                                    <dd><input type="date" name="career" value={data.career} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>헬스장위치</dt>
                                    <dd><input type="date" name="addr" value={data.addr} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bt_wrap">
                            <button className="on">수정</button>
                            <a href="/trainerView">취소</a>
                        </div>
                    </div>
                </form>
            </div >
        )
    })

    return (
        <div className='memberEdit'>
            {mapViewPost}
        </div>
    )
}

export default MemberEdit