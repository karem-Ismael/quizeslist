import {ADDQUIZ,EDITQUIZ,DELETEQUIZ} from "./types"
export const AddQuiz =(payload)=>{
    return{
        type:ADDQUIZ,
        payload
    }

    
}
export const EditQuiz =(payload)=>{
    return{
        type:EDITQUIZ,
        payload
    }
}
export const DeleteQuize=(payload)=>{
    return{
        type:DELETEQUIZ,
        payload
    }
}