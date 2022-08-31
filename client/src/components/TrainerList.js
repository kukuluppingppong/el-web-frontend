import React from 'react'
import { Link } from 'react-router-dom'


const TrainerList = () => {
    const id = sessionStorage.getItem('id');

    return (
        <nav className="board_list">
            <ul>
                <li align='right'><button className="bt_member" onClick={() => document.location.href = '#'}><img src="/img/ic_member.png" alt="프로필사진"></img></button></li>
                <li><input type="file" name="file" /></li>
                <li align='right'><Link to={"/trainerWrite"}>내정보 등록</Link></li>
                <li align='right'><Link to={`/trainerView/${id}`}>내정보 상세</Link></li>
                <li align='right'><Link to={`/trainerEdit/${id}`}>내정보 수정</Link></li>
                <li align='right'>자기소개</li>
            </ul>
        </nav>
    )
}

export default TrainerList;