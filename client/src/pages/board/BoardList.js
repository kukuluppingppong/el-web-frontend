import React from 'react'

const BoardList = () => {
    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>공지사항</strong>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>
            <div className="board_list_wrap">
                <div className="board_list">
                    <div claclassNamess="top">
                        <div className="num">번호</div>
                        <div className="title">제목</div>
                        <div className="writer">글쓴이</div>
                        <div className="date">작성일</div>
                        <div className="count">조회</div>
                    </div>
                    <div>
                        <div className="num" name="seq">번호</div>
                        <div className="title"><a href="board_control.jsp?action=view&seq=<%=vo.getSeq()%>">제목</a></div>
                        <div className="writer">작성자</div>
                        <div className="date">등록일</div>
                        <div className="count">조회</div>
                    </div>
                </div>
                <div class="board_page">
                    <a href="#" className="bt first">전전</a>
                    <a href="#" className="bt prev">전</a>
                    <a href="#" className="num">1</a>
                    <a href="#" className="num">2</a>
                    <a href="#" className="num">3</a>
                    <a href="#" className="num">4</a>
                    <a href="#" className="num">5</a>
                    <a href="#" className="bt next">다음</a>
                    <a href="#" className="bt last">다다음</a>
                </div>
                <div class="bt_wrap">
                    <a href="write.jsp" className="on">등록</a>
                </div>
            </div>
        </div>
    )
}

export default BoardList;