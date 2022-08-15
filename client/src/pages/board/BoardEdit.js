import React from 'react'

const BoardEdit = () => {
    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>공지사항</strong>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>
            <form name="board" method="post" action="fileUpdate.jsp" enctype="multipart/form-data">
                <input type="hidden" name="action" value="action" />
                <input type="hidden" name="seq" value="seq" />
                <input type="hidden" name="beforeFile" value="beforeFile" />
                <div className="board_write_wrap">
                    <div className="board_write">
                        <div className="title">
                            <dl>
                                <dt>제목</dt>
                                <dd><input type="text" name="title" /></dd>
                            </dl>
                        </div>
                        <div className="info">
                            <dl>
                                <dt>글쓴이</dt>
                                <dd><input type="text" name="writer" /></dd>
                            </dl>
                            <dl>
                                <dt>게시글 타입</dt>
                                <dd><select name="type">
                                    <option selected>게시글 타입</option>
                                    <option value="A">제목+텍스트</option>
                                    <option value="B">제목+이미지</option>
                                    <option value="C">제목+텍스트+이미지</option>
                                </select></dd>
                            </dl>
                            <dl>
                                <dt>파일</dt>
                                <dd><input type="file" name="file" multiple="multiple" /></dd>
                            </dl>
                        </div>
                        <textarea id="summernote" className="cont" name="content"></textarea>
                    </div>

                    <div className="bt_wrap">
                        <button className="on">수정</button>
                        <a href="/boardList">취소</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BoardEdit;