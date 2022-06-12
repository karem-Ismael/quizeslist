import {ADDQUIZ,EDITQUIZ,DELETEQUIZ} from "./types"
const initialState={
    quizList:[]
}
export default (state=initialState,action)=>{
    switch(action.type){
        case ADDQUIZ:
            return{quizList:[...state.quizList, action.payload]}
            break;
            case EDITQUIZ: 
            const filteredQuizes=state.quizList.filter((quiz)=>+quiz.id != +action.payload[0])
            return{quizList:[...filteredQuizes,action.payload[1]]}
            break;
            case DELETEQUIZ : 
            const filteredquizes=state.quizList.filter((quiz)=>+quiz.id != +action.payload)
            return{quizList:filteredquizes}
            default :return state
    }
}
