
import {useState} from "react";
import Counter from "./Counter";

const initialCounts = [
    {id: 1, title: 'Blue', count: 10},
    {id: 2, title: 'Pink', count: 20},
    {id: 3, title: 'Yellow', count: 30},
]

function App() {
    const [counters, setCounters] = useState(initialCounts);

const deleteById = (id) => {
    const filteredCounters = counters.filter(el => el.id !== id);
    setCounters(filteredCounters);
};

const upById = (id) => {

}


    return (
        <div className="App">

            Counters

            <ul>
                {counters.map(el => <li key={el.id}>  {el.title}
                    <button>-</button>
                    {el.count}
                    <button>+</button>
                    <button onClick={() => deleteById(el.id)}>Delete</button>
                    <button onClick={() => upById(el.id)}>Up</button>
                    <button>Down</button>
                </li>)}
            </ul>

            <input type="text" placeholder="Counter title"/>
            <input type="text" placeholder="Counter value"/>
            <button>Add counter</button>

        </div>
    );
}

export default App;
