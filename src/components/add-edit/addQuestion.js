import React,{useState} from "react" 
import { Form } from "react-bootstrap"
const AddQuestion=({handelAddQuestions})=>{
    const [text,setText]=useState("")
    return (
        <div className="col-md-12">
        <h1> Add Question</h1>
            <div className="row">
            <div className="col-md-6">
      <Form.Control type="text" onChange={(e)=>setText(e.target.value)} name="text" placeholder="Enter text" />
            </div>
            <div className="col-md-3">
                <button
                  onClick={() => handelAddQuestions(text)}
                  type="button"
                  className="btn btn-primary  w-100 text-white text-center"
                >
                add Questions
                </button>
            </div>


            </div>

        </div>
    )
}
export default AddQuestion