import './MyFirstButton.css'
import '../Learn.css'
import logo from '../../../assets/images/logo.png'
import { useState } from 'react';

function MyButton() {
    // 更新界面: https://zh-hans.react.dev/learn#updating-the-screen
    const [count, setCount] = useState(0);

    // 响应事件: https://zh-hans.react.dev/learn#responding-to-events
    function handleClick() {
        setCount(count + 1);
    }

    return(
        <button className='Learn-item' onClick={handleClick}>点击次数: {count}</button>
    );
}

export default function MyFirstButton() {
    return(
        <div className='Learn-root-div'>
            <span className='Learn-title'>响应事件&&响应事件</span>
            <MyButton/>
            <MyButton/>
            <img className="avatar" src={logo} alt=''></img>
        </div>
    );
}