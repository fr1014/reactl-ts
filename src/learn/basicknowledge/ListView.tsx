import './Learn.css'

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

const listItems = products.map(item =>
    <li key={item.id}>
        {item.title}
    </li>
);

// 渲染列表 https://zh-hans.react.dev/learn#rendering-lists
export default function ListView() {
    // console.log('List Items:', listItems);
    return (
        <div className='Learn-root-div'>
            <span className='Learn-title'>渲染列表</span>
            <ul style={{margin: '0px'}}>{listItems}</ul>
        </div>
    );
}