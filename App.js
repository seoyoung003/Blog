/* eslint-disable */

import './App.css';
import { useState } from 'react';
function App() {

  let post = '우동 맛집';//서버에서 가져온 실제 데이터라고 가정
  // let [글제목1, set글제목1] = useState('남자코트 추천'); //앞에 문자열이 들어감. 
  // let [글제목2, set글제목2] = useState('강남 우동 맛집');
  // let [글제목3, set글제목3] = useState('파이썬독학');
  let [글제목, set글제목] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, set따봉] = useState(0);
  

  let num = [1, 2];
  let [a , c] = [1 , 2];//Destructuring문법 a=1, c=2가 된다.
  
  return (
    <div className="App">
      <div className="black-nav"> 
        <h4 style={ {color : 'white', fontSize : '16px'} }>ReactBlog</h4>
      </div>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천'
        set글제목(copy)

        }}>글수정</button>
      <div className="list">
        <h4>{ 글제목[0] }<span onClick={ () => { set따봉(따봉+1) } }>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      
    </div>
  );
}



export default App;
