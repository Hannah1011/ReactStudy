import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import "../style/signstyle.css";


export default function SignInSignUpPage() {

    const navigate = useNavigate();

    useEffect(()=> {
        //이벤트 리스너 추가 
        const toggleSignUp = () => {
            document.querySelector('.cont').classList.toggle('s--signup');
        };

        //img_btn요소 선택
        const imgBtn = document.querySelector('.img_btn');
        imgBtn.addEventListener('click', toggleSignUp);

        return() => {
            imgBtn.removeEventListener('click', toggleSignUp);
        };
        /*document.querySelector('.img_btn').addEventListener('click', function(){
            document.querySelector('.cont').classList.toggle('s--signup');
        });*/
    },[]);

    //로그인 함수
    const handleLogin = () =>{
        navigate('/main');
    }
    return(
        <>
        <div className="cont">
            <div className="form sign-in">
                <h2>로그인</h2>
                <label>
                    <span>Email</span>
                    <input type="email"/>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password"/>
                </label>
                <p className="forgot-pass">Forgot Password??</p>
                <button type="button" className="submit" onClick={handleLogin}>로그인</button>
                <button type="button" className="fb-btn">Connect with <span>Google</span></button>
            </div>
            <div className="sub-cont">
                <div className="img">
                    <div className="img_text m--up">
                        <h2>새로 오셨나요?</h2>
                        <p> 회원가입하고 여러분들을 기다리고 있는 다양한 책들을 확인하세요!</p>
                    </div>
                    <div className="img_text m--in">
                        <h2>계정이 있나요?</h2>
                        <p>계정이 벌써 있다면, 로그인해주세요!</p>
                    </div>
                    <div className="img_btn">
                        <span className="m--up">회원가입하기</span>
                        <span className="m--in">로그인하기</span>
                    </div>
                </div>
                <div className="form sign-up">
                    <h2>회원가입</h2>
                    <label>
                        <span>Name</span>
                        <input type="text"/>
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email"/>
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password"/>
                    </label>
                    <button type="button" className="submit">
                        회원가입
                    </button>
                    <button type="button" className="fb-btn">
                        Join with <span>Google</span>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}