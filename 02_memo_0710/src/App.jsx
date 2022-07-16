import { v4 as uuid} from 'uuid';
import { useState, useEffect } from "react";
import "./App.css";

function App() {

  // タイトル入力欄のテキスト情報を保持するuseState
  const [title, setTitle] = useState("");

  // 追加　input(ここの名前は自分で決めてOK)
  const [email, setEmail] = useState("");


  const [data,setData] = useState([]);

  const newNote = () => {
    return { id: uuid(), title: "", email: ""};
  };

  // 送信を押したら登録
  const handleAddSubmit = (e) => {
    // フォームタグは送信の際に画面がリロードされるのでそれをさせないおまじないが以下
    e.preventDefault();

    setData([
      { 
        id:uuid(),
        title:title,
        email:email
      }
    ]);
    setTitle("");
    setEmail(""); // 追加　inputのuseState
  };

  // point! useStateの[data]に変更があったらlocalStrageを更新する
  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      {/* ここから書いていきます */}
      <h1>localStrage</h1>

      <form onSubmit={handleAddSubmit}>
        {/* title */}

        <label>タイトル入力</label>
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <hr />
        {/* 追加したもの */}
        <label>追加したinput</label>
        <input
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <hr />
        {/* 送信ボタン */}
        <button type="submit">送信</button>
      </form>

      {/* dataというuseStateの塊を、es6のmapというおまじないを使って表示しています */}
      {data.map((id,title,email) => (
        <div key={id}>
          <p>タイトル: {title}</p>
          <p>追加したもの: {email}</p>
        </div>
      ))}

      {/* ここから書いていきます */}
    </div>
  );
}

export default App;