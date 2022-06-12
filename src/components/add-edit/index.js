import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { AddQuiz,EditQuiz } from "../../store/Quizreducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AddQuestion from "./addQuestion";
import { data } from "./data";
import AddAnswer from "./addAnswer";
import { useParams } from "react-router-dom";

const AddEditQuiz = () => {
  let { id } = useParams();
  const allquizes = useSelector((state) => state.QuizReducer.quizList);

  useEffect(() => {
    if (id && allquizes.length) {
      const quiz = allquizes.find((quiz) => quiz.id == id);
      setQuizData(quiz);
    }
  }, [id]);
  const [Quizdata, setQuizData] = useState(data);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [questionindex, setQuestionIndex] = useState();

  const dispatch = useDispatch();
  const quizList = useSelector((state) => state.QuizReducer.quizList);

  let history = useHistory();
  const handelChange = (e) => {
    setQuizData({
      ...Quizdata,
      [e.target.name]: e.target.value,
    });
  };

  const handelAddQuestions = (text) => {
    const newquestion = {
      answer_id: null,
      answers: [],
      id: Math.random(),
      text: text,
    };
    let questionUpdated = [...Quizdata.questions_answers];
    questionUpdated = [...questionUpdated, newquestion];
    setQuizData({ ...Quizdata, questions_answers: questionUpdated });
  };
  const handelAddAnswer = (text, istrue) => {
    const newAnswer = {
      text: text,
      istrue: istrue,
      id: Math.random(),
    };
    const questionUpdate = [...Quizdata.questions_answers];
    questionUpdate[questionindex].answers.push(newAnswer);
    setShow(false);
  };
  return (
    <div className="container">
      <h1>{id ? "Edit Quize" : "addQuize"}</h1>
      <div className="row">
        <div className="col-md-6 mb-2 mt-2">
          <Form.Control
            type="text"
            onChange={handelChange}
            name="title"
            placeholder="Enter Ttile"
            value={Quizdata.title}
          />
        </div>
        <div className="col-md-6 mb-2 mt-2">
          <Form.Control
            type="text"
            onChange={handelChange}
            name="description"
            value={Quizdata.description}
            placeholder="Enter Description"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-2 mt-2">
          <Form.Control
            type="text"
            onChange={handelChange}
            name="score"
            placeholder="Enter Score"
            value={Quizdata.score}

          />
        </div>
        <div className="col-md-6 mb-2 mt-2">
          <Form.Control
            type="text"
            onChange={handelChange}
            name="url"
            placeholder="Enter url"
            value={Quizdata.url}

          />
        </div>
      </div>
      <div className="row">
        <AddQuestion handelAddQuestions={handelAddQuestions} />
      </div>
      {Quizdata.questions_answers.map((question, idx) => (
        <React.Fragment key={idx}>
          <div>
            {question.text}
            

            <AddAnswer
              idx={idx}
              setQuestionIndex={setQuestionIndex}
              questionindex={questionindex}
              text={text}
              setText={setText}
              setIsTrue={setIsTrue}
              handelAddAnswer={handelAddAnswer}
              isTrue={isTrue}
              show={show}
              setShow={setShow}
            />
          </div>

          {question.answers.map((answer, index, isTrue) => (
            <React.Fragment key={index}>
              <div>{answer.text}</div>
             
              <hr />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}

      <div className="row justify-content-end">
        <div className="col-md-6">
          <div className="row justify-content-center">
            <div className="col-md-3 mt-2">
              <button
                type="button"
                onClick={() => {
                    id ? 
                    dispatch(EditQuiz([id,Quizdata]))
                    : 
                  dispatch(
                    AddQuiz({
                      ...Quizdata,
                      id: quizList.length + 1,
                    })
                  );
                  setTimeout(() => {
                    // window.location="/"
                    history.push("/quizList");
                  }, 1000);
                }}
                className="btn btn-primary w-100 text-center text-white"
              >
              {!id ? "add" :"Edit"}
              </button>{" "}
            </div>
            <div className="col-md-3 mt-2">
              <button
                type="button"
                className="btn btn-danger  w-100 text-white text-center"
                onClick={()=>history.push("/")}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddEditQuiz;
