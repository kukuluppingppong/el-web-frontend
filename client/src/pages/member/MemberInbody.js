import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


function MemberInbody() {

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>회원인바디</strong>
                <p>회원 인바디 정보를 확인하세요.</p>
            </div>
            <nav className="board_list">
                <ul>
                    <li align='right'><button className="bt_member" onClick={() => document.location.href = '#'}><img src="img/ic_member.png" alt="프로필사진"></img></button></li>
                    <li align='right'>개인정보</li>
                    <li align='right'>인바디정보</li>
                    <li align='right'>운동기록</li>
                    <li align='right'>식단기록</li>
                </ul>
            </nav>

            <div className="board_write_wrap">

                <div className="board_write">
                    <div className="title">
                        김동양님
                    </div>
                    <div class="info">
                        <img src="img/inbody.png" alt="회원인바디" />
                    </div>
                </div>
                <div className="bt_wrap">
                    <button className="on" onClick={() => document.location.href = "/memberList"}>목록</button>
                </div>
            </div>
        </div >
    )
}

export default MemberInbody;