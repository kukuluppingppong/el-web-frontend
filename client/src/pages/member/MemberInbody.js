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