import { useState } from 'react';
import './Learn.css'

interface MyButtonProps {
    count: number;
    onClick: () => void;
}

function MyButton({count, onClick} : MyButtonProps) {
    return (
        <button className='Learn-item' onClick={onClick}>被点击次数: {count}</button>
    );
}

// 组件间共享数据: https://zh-hans.react.dev/learn#sharing-data-between-components
export default function ShareDataView() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className='Learn-root-div'>
            <span className='Learn-title'>组件间共享数据</span>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
        </div>
    );
}