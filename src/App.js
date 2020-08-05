import React from 'react';
import './App.css';
import TodoListContainer from '../src/containers/TodoListContainer'
import TodoFormContainer from '../src/containers/TodoFormContainer'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import TodoDone from "./components/TodoDone";
import TodoDoneContainer from "./containers/TodoDoneContainer";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <TodoListContainer />
//         <TodoFormContainer />
//       </header>
//     </div>
//   );
// }


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TodoListContainer />
                <TodoFormContainer />
                <TodoDoneContainer />
            </header>
        </div>
    );
}


export default App;
