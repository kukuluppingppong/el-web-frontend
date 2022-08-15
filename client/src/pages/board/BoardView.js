import React from 'react'

const BoardView = () => {
    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>공지사항</strong>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>

            <form name="board" method="post" action="board_control.jsp">
                <input type="hidden" name="action" value="edit" />
                <input type="hidden" name="seq" value="<%=vo.getSeq()%>" />
                <input type="hidden" name="file" value="<%=vo.getFile()%>" />
                <div className="board_view_wrap">
                    <div className="board_view">
                        <div className="title">
                            제목
                        </div>
                        <div className="info">
                            <dl>
                                <dt>번호</dt>
                                <dd>번호</dd>
                            </dl>
                            <dl>
                                <dt>글쓴이</dt>
                                <dd>글쓴이</dd>
                            </dl>
                            <dl>
                                <dt>작성일</dt>
                                <dd>작성일</dd>
                            </dl>
                            <dl>
                                <dt>조회</dt>
                                <dd>조회</dd>
                            </dl>
                            <dl>
                                <dt>파일</dt>
                                <dd><a href="fileDownload.jsp?fileName=<%=vo.getFile()%>"></a></dd>
                            </dl>
                        </div>
                        <div className="cont">
                            파일이름
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <a href="/boardList">목록</a>
                        <button className="on">수정</button>
                        <button className="on" onClick="delcheck()">삭제</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BoardView;