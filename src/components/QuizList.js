import { Button } from "react-bootstrap"
import React from "react"
import Table from 'react-bootstrap/Table'
import { useHistory } from "react-router-dom"
import { DeleteQuize } from "../store/Quizreducer/actions";
import { useSelector ,useDispatch} from "react-redux"

const QuizList=({headers})=>{
    let history =useHistory()
    const quizList = useSelector((state) => state.QuizReducer.quizList)
  const dispatch = useDispatch();

return (
    <div className="container">
    <div className="mt-2 mb-2">
    <Button variant="success" onClick={()=>history.push("/add/quiz")}>addQuiz</Button>{' '}

    </div>
    <Table striped bordered hover>
  <thead>
    <tr>
     
      {
        headers.map((title,index)=>(
            <th key={index}>{title}</th>
        ))
      }
    </tr>
  </thead>
  <tbody>
  {quizList.map((quiz,index)=>(
      <tr key={index}>
      <td>{index +1}</td>
      <td>{quiz.title}</td>
      <td>{quiz.score}</td>
      <td>{quiz.url}</td>

      <td>{quiz.description}</td>
      <td>
          <>
              
                <button className="btn btn-success mr-2" onClick={()=> history.push(`/edit/quiz/${quiz.id}`)}>Edit</button>
                <button className="btn btn-danger" onClick={()=> dispatch(DeleteQuize(quiz.id))}>Delete</button>

              
          </>
      </td>




      </tr>
  ))}

  </tbody>
</Table>

    </div>
)
}
export default QuizList