import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const navigate = useNavigate();

    const [quizs, setQuizs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answerList, setAnswerList] = useState([]);
    const [score, setScore] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const fetchQuizs = async() => {
            const response = await axios.get("https://week12-api-rcwo.onrender.com/api/questions");
            setQuizs(response.data);
        }
        fetchQuizs()
    }, [])

    useEffect(() => {
        if (quizs.length === 0 || currentIndex < quizs.length || isSubmitted) return;

        const submitAnswers = async() => {
            // 답 post
            const response = await axios.post("https://week12-api-rcwo.onrender.com/api/answers", {answers: answerList});

            // 점수 계산
            let newScore = 0;
            for (const res of response.data.results){
                if (res.correct === true){
                    newScore += 1;
                }
            }
            setScore(newScore);
            setIsSubmitted(true);

            navigate(`/result?score=${newScore}`);
        }
        submitAnswers()
    }, [quizs.length, currentIndex, isSubmitted, answerList, score, navigate])

        
    function handleAnswerClick(answer) {
        const newAnswer = {id: currentQuiz.id, answer: answer};
        setAnswerList((prev) => {
            const next = [...prev, newAnswer];
            console.log(next);
            return next;
        })
        
        setCurrentIndex(currentIndex + 1);
    }
    
    if (quizs.length === 0){
        return <div>Loading...</div>
    }
    
    if (currentIndex >= quizs.length) {
        return <div>Loading...</div>
    }

    const currentQuiz = quizs[currentIndex];

    return(
        <QuizDom>
            <QuizTitle>{currentQuiz.question}</QuizTitle>
            <ButtonListDom>
                <button key={currentQuiz.answers[0]} onClick={() => handleAnswerClick(currentQuiz.answers[0])}>{currentQuiz.answers[0]}</button>
                <button key={currentQuiz.answers[1]} onClick={() => handleAnswerClick(currentQuiz.answers[1])}>{currentQuiz.answers[1]}</button>
                <button key={currentQuiz.answers[2]} onClick={() => handleAnswerClick(currentQuiz.answers[2])}>{currentQuiz.answers[2]}</button>
            </ButtonListDom>
        </QuizDom>
    )
}

export default Quiz;

const QuizDom = styled.div`
    text-align: center;
`;

const QuizTitle = styled.h2`
`;

const ButtonListDom = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;