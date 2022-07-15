import "./App.css";
import { useState } from "react";
import JankenButton from "./component/JankenButton";


import picChoki from "./img/チョキ.png";
import picGoo from "./img/グー.png";
import picPah from "./img/パー.png";
import picBase from "./img/初期.png";


function App() {

  const index = () => Math.floor(Math.random()*3); //0~2が出る
  const handNameArray = ["グー","チョキ","パー"];
  const picPathArray = [picGoo,picChoki,picPah];

  const [comment, setComment] = useState("じゃんけんしよう！");
  const [result, setResult] = useState("");
  const [picPath, setPicPath] = useState(picBase);
  const [winCount,setWinCount] = useState(0);
  const [loseCount,setLoseCount] = useState(0);
  const [startButtonName,setStartButtonName] = useState("スタート");
  // const [loseCount,setLoseCount] = useState("0");

  const changeComment = () =>{
    setPicPath(picBase);
    setComment("じゃんけん…");
    setStartButtonName("クリア")
    setResult("");
    setLoseCount(0);
    setWinCount(0);
  }

  const countUp =(winOrLose) =>{
    if(winOrLose == "win"){
      setWinCount(prevState => prevState+1);
    }else{
      setLoseCount(prevState => prevState+1);
    }
  }

  const fight = (myHand ,index) =>{
    setStartButtonName("クリア")
    setPicPath(picPathArray[index]);

    const myHandName = handNameArray[myHand];
    const enemyHandName = handNameArray[index];
    setComment("相手は"+enemyHandName+"!あなたは"+myHandName+"!");

    const gap = myHand - index;
    
    if(myHand == index){
      setResult("あいこ")
    }else if(gap ==-1 || gap == 2){
      setResult("あなたの勝利");
      countUp("win");
    }else{
      setResult("青年の勝利");
      countUp("lose");
    }
  }


  return (
    <div className="App">
      
      <h1>じゃんけんアプリ</h1>
      <h2>青年とじゃんけんしよう!</h2>
      
      <div>
        <img src={picPath} alt="初期表示" className="pic" />
      </div>

      <div className="comment">{comment}</div>
      <div className="result">{result}</div>
    
      <div className="buttons">
        <div className="inner">
          <JankenButton
            onClick = {()=>fight(0,index())}
            icon = {"✊(グー)"}
          />
          <JankenButton
          onClick = {()=>fight(1,index())}
          icon = {"✌(チョキ)"}
          />
          <JankenButton
            onClick = {()=>fight(2,index())}
            icon = {"✋(パー)"}
          />
        </div>
      </div>

      <div className="startButton">
          <button onClick={changeComment}>{startButtonName}</button>
      </div>

      <p>勝ち回数：{winCount}</p>
      <p>負け回数：{loseCount}</p>

    </div>   
  );
};

export default App;