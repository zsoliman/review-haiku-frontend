import Navbar from "./Navbar"

const Home = () => {
    return (
        <div>

            <Navbar />

            <h2 className="App-header">Rules:</h2>
            <h3>This is a website</h3>
            <h3>Where you can review a film</h3>
            <h3>In haiku ONLY</h3>

            <h2 className="App-header">Definition:</h2>
            <h3>What is a haiku?</h3>
            <h3>A 3 line poem in which</h3>
            <h3>Syllables matter</h3>

            <h2 className="App-header">Haiku Format:</h2>
            <h3>One: Five Syllables</h3>
            <h3>Two: Seven Syllables, Please</h3>
            <h3>Three: Five Syllables</h3>
        </div>
    )
}

export default Home