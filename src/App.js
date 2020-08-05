import React from 'react';
import './App.css';
import TodoListContainer from '../src/containers/TodoListContainer'
import TodoFormContainer from '../src/containers/TodoFormContainer'
// import {
//     HashRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom';
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
        // <Router>
        //     <div>
        //         <ul>
        //             <li><Link to="/">ToDoHome</Link></li>
        //             <li><Link to="/done">PlayToDo</Link></li>
        //             <li><Link to="/undone">ToDoDone</Link></li>
        //         </ul>
        //         <Switch>
        //             <Route exact path="/">
        //                 <App />
        //             </Route>
        //             <Route path="/done">
        //                 <TodoListContainer  />
        //             </Route>
        //             <Route path="/undone">
        //                 <TodoDoneContainer />
        //             </Route>
        //             <Route exact path="/undone">
        //                 <Todo />
        //             </Route>
        //         </Switch>
        //     </div>
        // </Router>
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
