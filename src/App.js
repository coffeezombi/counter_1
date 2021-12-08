import './App.css';
import {useState} from "react";
import Counter from "./Counter";

const initialCounts = [
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
]

function App() {
    const [counter, setCounter] = useState(initialCounts);

    const onPlus = (id) => {
        const newCount = counter.map(el => id === el.id ? {...el, value: el.value + 1} : el)
        setCounter(newCount)
    }
    const onMinus = (id) => {
        const newCount = counter.map(el => id === el.id ? {...el, value: el.value - 1} : el)
        setCounter(newCount)
    }



    return (
        <div className="App">

            {counter.map(el => <Counter value={el.value}
                                        key={el.id}
                                        id={el.id}
                                        onPlus={onPlus}
                                        onMinus={onMinus}
            />)}

        </div>
    );
}

export default App;
