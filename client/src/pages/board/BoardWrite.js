import React from 'react'

const BoardWrite = () => {
    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>공지사항</strong>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>
            <form name="board" method="post" action="fileUpload.jsp" enctype="multipart/form-data">
                <div className="board_write_wrap">
                    <div className="board_write">
                        <div className="title">
                            <dl>
                                <dt>제목</dt>
                                <dd><input name="title" type="text" placeholder="제목 입력" /></dd>
                            </dl>
                        </div>
                        <div class="info">
                            <dl>
                                <dt>글쓴이</dt>
                                <dd><input type="text" name="writer" placeholder="글쓴이 입력" /></dd>
                            </dl>
                            <dl>
                                <dt>게시글 타입</dt>
                                <dd><select name="type">
                                    <option selected>게시판 타입</option>
                                    <option value="A">제목+텍스트</option>
                                    <option value="B">제목+이미지</option>
                                    <option value="C">제목+텍스트+이미지</option>
                                </select></dd>
                            </dl><br />
                            <dl>
                                <dt>파일</dt>
                                <dd><input type="file" name="file" multiple="multiple" /></dd>
                            </dl>
                        </div>
                        <textarea id="summernote" className="cont" name="content"></textarea>
                    </div>
                    <div className="bt_wrap">
                        <button className="on">등록</button>
                        <a href="list.jsp">취소</a>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default BoardWrite;