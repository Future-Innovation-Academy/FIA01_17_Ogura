import React from 'react'
import {useState,useEffect} from "react";

const Data = () => {

    const [mountains,setMountains] = useState([]);
    const [link,setLink] = useState("");
    const [linkSelected,setLinkSelected] = useState(false);

    useEffect(() =>{
        const fetchData = async () =>{
            //APIのデータを取得する
            const response = await fetch(
                "https://mountix.codemountains.org/api/v1/mountains"
            );
            console.log(response,"response");

            //jsonにしてjsで操作できるように変換する
            const data = await response.json();
            console.log(data,"data"); //jsonに変換されたデータ

            //配列に変換
            const mountainList = data.mountains; //resultsはコンソールで確認します
            console.log(mountainList,"mountainList");

            //useStateを使って、精査したデータを保持します
            setMountains(mountainList);
        };

        //fetchDataを実行します
        fetchData();

    },[]);

    const handleClick2 = (e) =>{
        setLink(e.target.value);
        setLinkSelected(true);
        console.log(linkSelected);
    }

    const handleClick3 = () =>{
        window.open(link);
    }

       
    return (
        <div className='App'>
            <h1>日本の山</h1>
            <select onChange={handleClick2}>
                <option value="" selected hidden></option>
                {mountains.map((item,index)=>(
                    <option key={index} value={item.location && item.location.gsiUrl}>
                        {item.name},{item.prefectures}
                    </option>
                ))}
            </select>

            <button onClick={handleClick3} disabled={linkSelected ? false : true }>GO</button>
        </div>
    )
}

export default Data