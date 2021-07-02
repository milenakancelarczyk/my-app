

function App() {
    const getMeals = () => {
        fetch('http://localhost:3000/meals')
            .then((res) => res.json())
            .then((meals) => {
                console.log(meals);
            })
    };
    return (
        <div className="App">
            <button onClick={getMeals}>Pobierz meals</button>
        </div>
    )

}

export default App;
