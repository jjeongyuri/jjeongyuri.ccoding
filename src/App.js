/* eslint-disable */

import './App.css';
import React, { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [글제목, 글제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [date, setDate] = useState(['2월 17일 7시 35분', '2월 17일 7시 35분', '2월 17일 7시 35분']);


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let titleCopy = [...title];
        setTitle(titleCopy.sort());
      }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자코트 추천';
        setTitle(copy);
      }}>버튼</button>

      {
        title.map(function (data, i) {
          // console.log(i)
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                글제목변경(i);
                setModal(true);
              }}> {data} <span onClick={(e) => {
                e.stopPropagation();
                let ccopy = [...따봉];
                ccopy[i] += 1;
                따봉변경(ccopy)
              }}>👍🏻</span> {따봉[i]}</h4>
              <p>{date[i]} 발행</p>
              <button onClick={() => {
                let arrayCopy = [...title];
                let filtered = arrayCopy.filter((item) => item !== arrayCopy[i])
                setTitle(filtered)
              }}>삭제</button>
            </div>)
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value);
      }} /> <button onClick={(e) => {
        let titleCopy = [...title];
        let dobble = [...따봉];
        let ddate = [...date];

        let today = new Date();
        let month = today.getMonth() + 1;
        let moDate = today.getDate();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let total = `${month}월 ${moDate}일 ${hours}시 ${minutes}분`;


        if (입력값.trim() == '') {
          alert('내용을 입력해주세요')
        } else {
          titleCopy.unshift(입력값);
          dobble.unshift(0);
          ddate.unshift(total);
          따봉변경(dobble);
          setTitle(titleCopy);
          setDate(ddate);
        }
      }}>글발행</button>

      {/* 모달창 */}
      {
        modal == true ? <Modal title={title}
          setTitle={setTitle}
          글제목={글제목}
        /> : ''
      }


    </div>
  );
}


function Modal({ title, setTitle, 글제목 }) {

  return (
    <div className='modal'>
      <h4>{title[글제목]}
      </h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        setTitle(['여자코트 추천', '강남 우동맛집', '파이썬독학'])
      }}>글수정</button>
    </div>
  )
}





export default App;
