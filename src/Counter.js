function Counter(props){

    const onMinus = props.onMinus;
    const onPlus = props.onPlus;
    const value = props.value;
    const id = props.id;
    return (
        <div>
            <button onClick={() => onMinus(id)}>-</button>
            {value}
            <button onClick={() => onPlus(id)}>+</button>
        </div>
    )
}

export default Counter;