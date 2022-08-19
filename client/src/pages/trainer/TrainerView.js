import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


function TrainerView() {
    const [loadTrainerView, setLoadTrainerView] = useState([]);

    const { id } = useParams();

    const resTrainerView = async () => {
        const loadTrainerView = await axios.post(`/api/trainerView/${id}`);
        console.log(loadTrainerView.data);
        setLoadTrainerView(loadTrainerView.data);
    }

    useEffect(() => {
        resTrainerView()
    }, [])

    const mapViewPost = loadTrainerView.map((data, index) => {
        return (
            <div key={index} className="board_wrap">
                <div className="board_title">
                    <strong>내정보 상세</strong>
                    <p>내 정보를 확인하세요.</p>
                </div>
                <nav className="board_list">
                    <ul>
                        <li align='right'><button className="bt_member" onClick={() => document.location.href = '#'}><img src="img/ic_member.png" alt="프로필사진"></img></button></li>
                        <li><input type="file" name="file" /></li>
                        <li align='right'><Link to={"/trainerWrite"}>내정보 등록</Link></li>
                        <li align='right'><Link to={`/trainerView/${id}`}>내정보 상세</Link></li>
                        <li align='right'><Link to={`/trainerEdit/${id}`}>내정보 수정</Link></li>
                        <li align='right'>자기소개</li>
                        <li align='right'>SNS</li>
                    </ul>
                </nav>

                <input type="hidden" name="id" value={id} />
                <div className="board_write_wrap">
                    <div className="board_write">
                        <div class="info">
                            <dl>
                                <dt>이름</dt>
                                <dd>{data.name}</dd>
                            </dl>
                            <dl>
                                <dt>연령</dt>
                                <dd>{data.age}</dd>
                            </dl>
                            <dl>
                                <dt>성별</dt>
                                <dd>{data.sex}</dd>
                            </dl>
                            <dl>
                                <dt>생년월일</dt>
                                <dd>{data.birth}</dd>
                            </dl>
                            <dl>
                                <dt>키</dt>
                                <dd>{data.height}</dd>
                            </dl>
                            <dl>
                                <dt>체중</dt>
                                <dd>{data.weight}</dd>
                            </dl>
                            <dl>
                                <dt>전화번호</dt>
                                <dd>{data.phone}</dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd>{data.email}</dd>
                            </dl>
                            <dl>
                                <dt>수상</dt>
                                <dd>{data.award}</dd>
                            </dl>
                            <dl>
                                <dt>이력</dt>
                                <dd>{data.career}</dd>
                            </dl>
                            <dl>
                                <dt>헬스장위치</dt>
                                <dd>{data.addr}</dd>
                            </dl>
                            <dl>
                                <dt>프로필사진</dt>
                                <dd>{data.image}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <a href="/">목록</a>
                        <button className="on" onClick={() => document.location.href = `/trainerEdit/${data.id}`}>수정</button>
                    </div>
                </div>
            </div >
        )
    })

    return (
        <div className='trainerView'>
            <div className="board_wrap">
                <div className="board_title">
                    <strong>내정보 상세</strong>
                    <p>내 정보를 확인하세요.</p>
                </div>
                <nav className="board_list">
                    <ul>
                        <li align='right'><button className="bt_member" onClick={() => document.location.href = '#'}><img src="/img/ic_member.png" alt="프로필사진"></img></button></li>
                        <li><input type="file" name="file" /></li>
                        <li align='right'><Link to={"/trainerWrite"}>내정보 등록</Link></li>
                        <li align='right'><Link to={`/trainerView/${id}`}>내정보 상세</Link></li>
                        <li align='right'><Link to={`/trainerEdit/${id}`}>내정보 수정</Link></li>
                        <li align='right'>자기소개</li>
                        <li align='right'>SNS</li>
                    </ul>
                </nav>

                <input type="hidden" name="id" value={id} />
                <div className="board_write_wrap">
                    <div className="board_write">
                        <div class="info">
                            <dl>
                                <dt>이름</dt>
                                <dd>이름</dd>
                            </dl>
                            <dl>
                                <dt>연령</dt>
                                <dd>연령</dd>
                            </dl>
                            <dl>
                                <dt>성별</dt>
                                <dd>연령</dd>
                            </dl>
                            <dl>
                                <dt>생년월일</dt>
                                <dd>연령</dd>
                            </dl>
                            <dl>
                                <dt>키</dt>
                                <dd>연령</dd>
                            </dl>
                            <dl>
                                <dt>체중</dt>
                                <dd>연령</dd>
                            </dl>
                            <dl>
                                <dt>전화번호</dt>
                                <dd>연령</dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd>연령</dd>
                            </dl>
                            <dl>
                                <dt>수상</dt>
                                <dd>연령</dd>
                            </dl>
                            <dl>
                                <dt>이력</dt>
                                <dd>연령</dd>
                            </dl>
                            <dl>
                                <dt>헬스장위치</dt>
                                <dd>연령</dd>
                            </dl>
                            <dl>
                                <dt>프로필사진</dt>
                                <dd>연령</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <button className="on" onClick={() => document.location.href = `/trainerEdit/${id}`}>수정</button>
                    </div>
                </div>
            </div >
            {mapViewPost}
        </div>
    )
}

export default TrainerView; 