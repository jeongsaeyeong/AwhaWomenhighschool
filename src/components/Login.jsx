import React, { useState } from 'react'
import Human from '../assets/img/login_human.svg'

const Login = () => {
    const [userId, setUserId] = useState('')
    const [userPassowrd, setUserPassowrd] = useState('');

    const submitLogin = () => {
        if (userId === '' || userPassowrd === '') {
            alert('아이디와 비밀번호를 모두 채워주세요!');
            return;
        } else {
            alert('존재하지 않는 회원정보입니다.');
        }
    }

    return (
        <div className='Login_wrap'>
            <h2>로그인</h2>
            <p>아화여자고등학교 홈페이지 방문을 진심으로 환영합니다!</p>
            <div>
                <img src={Human} alt="human" />
                <div className="login">
                    <input value={userId} onChange={(e) => { setUserId(e.target.value) }} type="text" placeholder='아이디를 입력해주세요!' />
                    <input value={userPassowrd} onChange={(e) => { setUserPassowrd(e.target.value) }} type="password" placeholder='비밀번호를 입력해주세요!' />
                    <button onClick={() => { submitLogin() }}>로그인하기</button>
                </div>
            </div>
        </div>
    )
}

export default Login