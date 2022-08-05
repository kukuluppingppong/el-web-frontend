import React from 'react'
import { Link } from 'react-router-dom';

function TrainerView(props) {
    const params = window.location.pathname.split('/');
    const viewPost = []
    for (let i = 0; i < props.trainerList.length; i++) {
        if (props.trainerList[i].number === Number(params[3])) {
            viewPost.push(props.trainerList[i])
        }
    }
    console.log(viewPost);
    const mapViewPost = viewPost.map(data => {
        return (
            <div key={data.id}>
                <p className='view_name'>이름: {data.name}</p>
                <p className='view_age'>연령: {data.age}</p>
                <p className='view_sex'>성별: {data.sex}</p>
                <p className='view_birth'>생년월일: {data.birth}</p>
                <p className='view_height'>키: {data.height}</p>
                <p className='view_weight'>체중: {data.weight}</p>
                <p className='view_period'>헬스장위치: {data.addr}</p>
                <p className='view_regDate'>수상: {data.award}</p>
                <p className='view_endDate'>이력: {data.career}</p>
                <p className='view_phone'>사진: {data.image}</p>
                <p className='view_email'>이메일: {data.email}</p>
            </div>
        )
    })

    // const updateHit = async () => {
    //     console.log(document.location.pathname)
    //     const docParams = document.location.pathname
    //     const req = await axios.post(docParams);
    // }

    // useEffect(() => {
    //     updateHit()
    // })

    return (
        <div className='trainerView'>
            <h3>내정보 상세</h3>
            {mapViewPost}
            <div>
                <Link to='/'>목록</Link>
                <Link to='/'>수정</Link>
                <Link to='/'>삭제</Link>
            </div>
        </div>
    )
}

export default TrainerView;