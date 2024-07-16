import React, { useState } from 'react'
import Notice from '../assets/img/main_notice.svg'
import Dollor from '../assets/img/main_dollor.svg'
import Tropy from '../assets/img/main_tropy.svg'
import Call from '../assets/img/main_call.svg'
import Footer from './Section/Footer'

const Main = () => {
    const [toggle, setToggle] = useState(false);

    const Msg = () => {
        alert('로그인 후 열람 가능합니다.')
    }

    return (
        <>
            <div className='main_wrap'>
                <div className="slider">
                    <h2>
                        학생이 살아 숨쉬는<br />
                        아화여자고등학교
                    </h2>
                </div>
                <div className="notice_wrap">
                    <div className="header">
                        {toggle ? (
                            <div>
                                <button onClick={() => {setToggle(!toggle)}} className='click'>공지사항</button>
                                <button onClick={() => {setToggle(!toggle)}}>가정통신문</button>
                            </div>
                        ) : (
                            <div>
                                <button onClick={() => {setToggle(!toggle)}}>공지사항</button>
                                <button onClick={() => {setToggle(!toggle)}} className='click'>가정통신문</button>
                            </div>
                        )}
                        <h3>오늘의 점심</h3>
                    </div>
                    <div className="box_wrap">
                        {toggle ? (
                            <div className='notice_box'>
                                <div onClick={() => { Msg() }}>
                                    <h4>
                                        2024학년도 신규 계약직원<br />
                                        (교무실 사무원) 공개 채용 공고
                                    </h4>
                                    <p>
                                        아화여자고등학교에서 근무할 계약직원<br />
                                        채용을 다음과 같이 공고합니다.<br />

                                        ※ 근무 평가를 통해 계약기간 연장 가능<br />
                                        ※ 임용일에 바로 출근이 가능하여야 함
                                    </p>
                                </div>
                                <div onClick={() => { Msg() }}>
                                    <h4>
                                        졸업생 대입<br />
                                        학교장추천 전형 신청 안내
                                    </h4>
                                    <p>
                                        학교장추천 전형 추천을 희망하는<br />
                                        졸업생이 있다면 8월 27일(화)까지<br />
                                        3학년 교무실로 유선 연락 바랍니다.<br />
                                    </p>
                                </div>
                                <div onClick={() => { Msg() }}>
                                    <h4>
                                        학생 및 교직원 외 홈페이지<br />
                                        절대 가입이 불가합니다.
                                    </h4>
                                    <p>
                                        외부인에게 자신의 아이디와 비밀번호를
                                        알려주는 행위는 엄격히 금지됩니다.<br />
                                        들어올 생각하지 마.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className='notice_box'>
                                <div onClick={() => { Msg() }}>
                                    <h4>
                                        여름방학 안전<br />
                                        지침 안내
                                    </h4>
                                    <p>
                                        학부모님께, 여름방학 동안 학생들의 안전을 위해 몇 가지 지침을 안내드립니다. 자녀들이 외출 시 반드시 마스크를 착용하고, 손 씻기 및 소독을 철저히 하도록 지도해 주십시오. 또한, 무더위로...
                                    </p>
                                </div>
                                <div onClick={() => { Msg() }}>
                                    <h4>
                                        2학기<br />
                                        학사 일정 안내
                                    </h4>
                                    <p>
                                        내용: 학부모님께, 2학기 학사 일정을 안내드립니다. 개학일은 9월 1일(월)이며, 주요 행사로는 10월 15일(수)에 예정된 체육대회, 11월 20일(목)에 있을 학예회 등이 있습니다. 학사 일정을 미리 확인하시..
                                    </p>
                                </div>
                                <div onClick={() => { Msg() }}>
                                    <h4>
                                        학부모 및 학생<br />
                                        상담 주간 안내
                                    </h4>
                                    <p>
                                        학부모님께, 2학기를 맞아 학부모 상담 주간을 운영합니다. 일시는 9월 15일(월)부터 9월 19일(금)까지이며, 자녀의 학업 성취도 및 생활 태도에 대해 상담을 원하시는 학부모님께서는 미리...
                                    </p>
                                </div>
                            </div>
                        )}
                        <div className="eat_box">
                            <div>
                                <h4> {`< 2024.07.31 >`} </h4>
                                <p>방학에는 급식이 없습니다.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="info_wrap">
                    <div className="box_wrap">
                        <div className='box'>
                            <div>
                                <img src={Notice} alt="Notice" />
                            </div>
                            <h3>학생회 안내</h3>
                            <p>가입 및 탈퇴 안내</p>
                        </div>
                        <div className='box'>
                            <div>
                                <img src={Dollor} alt="Dollor" />
                            </div>
                            <h3>회계 내역</h3>
                            <p>후원 및 사용 안내</p>
                        </div>
                        <div className='box'>
                            <div>
                                <img src={Tropy} alt="Tropy" />
                            </div>
                            <h3>수상 내역</h3>
                            <p>학교를 빛낸 인물들</p>
                        </div>
                        <div className='box'>
                            <div>
                                <img src={Call} alt="Call" />
                            </div>
                            <h3>전학 및 퇴학</h3>
                            <p>재입학 및 회생 불가</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Main