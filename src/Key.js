import React from 'react';

function ListItem(props) {
    return <li>{props.value}</li>
}

function NumberListItem(props) {
    const numbers = props.numbers;
    const listItem = numbers.map((number) => 
        <ListItem key={number.toString()} value={number}/>
    );
    return (
        <ul>
            {listItem}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
function NumberListShow(props) {
    return (
        <NumberListItem numbers={numbers} />
    );
}

export default NumberListShow;