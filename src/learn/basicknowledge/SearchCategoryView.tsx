import './Learn.css'

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

// 可搜索的数据表: https://zh-hans.react.dev/learn/thinking-in-react
export default function SearchCategoryView() {
    return (
        <div className='Learn-root-div'>
            <span className='Learn-title'>可搜索的数据表</span>
        </div>
    );
}