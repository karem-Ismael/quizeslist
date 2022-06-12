
import React from "react" 
import { Form } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
const AddAnswer=({show,setShow,handelAddAnswer,text,isTrue,setText,setIsTrue,idx,setQuestionIndex,questionindex})=>{    
    return(
        <>
        <button onClick={()=>{
            setShow(true)
            setQuestionIndex(idx)
        }}
        className="btn btn-info"
        >add answer</button>

        <Modal show={show} onHide={()=>setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
         <div className="col-md-6">
         <input type="checkbox"  onChange={(e)=>setIsTrue(e.target.checked)}/>
         <label class="form-check-label" for="flexCheckDefault">
    isTrue
  </label>

   <Form.Control type="text" onChange={(e)=>setText(e.target.value)} name="text" placeholder="Enter text" />
         </div>
         {/* <div className="col-md-3">
             <button
               
               type="button"
               className="btn btn-primary  w-100 text-white text-center"
             >
             add answer
             </button>
         </div> */}


       </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(!show)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handelAddAnswer(text,isTrue)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>

    )
}
export default AddAnswer