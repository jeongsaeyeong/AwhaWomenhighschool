import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Search from '../../assets/img/main_search.svg'
import Logo from '../../assets/img/logo.svg'

const Header = () => {
    const navigation = useNavigate();

    const Going = () => {
        navigation('/');
    }

    const Msg = () => {
        alert('로그인 후 열람 가능합니다.')
    }

    return (
        <div className='Header_wrap'>
            <div className="header">
                <div className="logo" onClick={() => { Going() }}>
                    <img src={Logo} alt="logo" />
                    <div>
                        <h2>아화여자고등학교</h2>
                        <p>Ahwa women high school</p>
                    </div>
                </div>
                <div className="box">
                    <Link to='/login'>로그인</Link>
                    <Link to='/join'>회원가입</Link>
                    <div className="search">
                        <input type="text" placeholder='검색어를 입력해주세요!' />
                        <button><img src={Search} alt="search" /></button>
                    </div>
                </div>
            </div>
            <nav className="nav">
                <div>
                    <Link to='/' onClick={() => { Msg() }}>학교소개</Link>
                    <Link to='/' onClick={() => { Msg() }}>학교소식</Link>
                    <Link to='/' onClick={() => { Msg() }}>교사마당</Link>
                    <Link to='/' onClick={() => { Msg() }}>학생마당</Link>
                    <Link to='/' onClick={() => { Msg() }}>진로마당</Link>
                    <Link to='/' onClick={() => { Msg() }}>정보공개</Link>
                    <Link to='/' onClick={() => { Msg() }}>신고센터</Link>
                    <Link to='/' onClick={() => { Msg() }}>방과후학교</Link>
                    <Link to='/' onClick={() => { Msg() }}>사진첩</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header