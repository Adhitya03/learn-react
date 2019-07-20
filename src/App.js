import React, { Component} from 'react';
import './App.css';
/*import Person from './Person/Person'*/
import UserOutput from './Person/UserOutPut'
import UserInput from './Person/UserInput'


class App extends Component {

    /*const [ personState, setState ] = useState({
        Person : [
            {name : "Rick", age : 28},
            {name : "Gleen", age : 23},
            {name : "Dayrl", age : 33}
        ]
    });
    const switchNameHandler = (newName) => {
        setState({
            Person : [
                {name : newName, age : 28},
                {name : "Ajelo", age : 28},
            ]
        })
    };

    const nameChnangeHandler = (event) => {
        setState({
            Person : [
                {name : event.target.value, age : 28},
                {name : "Ajelo", age : 28},
            ]
        })
    };*/

    state = {
            name: "Adhitya Change"
    }

    changeHandler = (event) => {
        this.setState({name: event.target.value})
    }

    render() {
        return (
            <div className="container">
                <h1> Learning React </h1>
                {/*<Person
                name={personState.Person[0].name} age="29" clicked={switchNameHandler.bind(this, 'agusagus')} change={nameChnangeHandler}
            />
            <Person
                name={personState.Person[1].name} age="12"
            />
            <Person
                name="AR" age="56"
            />
            <Person
                name="Sifat Sifat" age="23"
            > Hi. I am a child </Person>
            <button onClick={switchNameHandler.bind(this, '')}> Click </button>*/}

                <UserOutput name={this.state.name}/>
                <UserInput name={this.state.name} change={this.changeHandler}/>

            </div>

        );
    }

}

export default App;