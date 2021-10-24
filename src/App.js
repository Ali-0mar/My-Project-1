import "./App.css";
import { CardList } from "./compononets/card-list/card.list";
import react from "react";
import { Searchbox } from "./compononets/SearchField/SearchBox";

class App extends react.Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: "",
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => this.setState({ monsters: users }));
    }
    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    };
    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase()),
        );

        return (
            <div className="App">
                <h1>My Monsters Rolodex</h1>
                <Searchbox
                    placeholder="Search Monsters"
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
