import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import QuizList from "./components/QuizList"
import AddEditQuiz from "./components/add-edit"
function App() {
  return (
    <Router>
    <div>
      

   
      <Switch>
        <Route path="/edit/quiz/:id">
        <AddEditQuiz />
        </Route>
        <Route path="/add/quiz">
          
          <AddEditQuiz />
        </Route>
        <Route path="/">
        <QuizList headers={["#",'title','score','url','description','Actions']} /> 

        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
