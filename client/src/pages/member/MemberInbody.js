import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MemberList from '../../components/MemberList'
import InbodyChart from '../../components/chart/InbodyChart';


function MemberInbody() {

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>김동양님</strong>
                <p>회원 인바디 정보를 확인하세요.</p>
            </div>

            <MemberList />

            <div className="board_write_wrap">
                <div className="board_write">
                    <div class="info">
                        <img src="img/inbody.png" alt="회원인바디" height="650px" />
                    </div>
                    <InbodyChart />
                </div>
                <div className="bt_wrap">
                    <button className="on" onClick={() => document.location.href = "/memberList"}>목록</button>
                </div>
            </div>
        </div >
    )
}

export default MemberInbody;