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

export default function ListView() {
    // console.log('List Items:', listItems);
    return(
        <ul>{listItems}</ul>
    );
}