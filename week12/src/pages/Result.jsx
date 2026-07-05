import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const score = searchParams.get('score');

    const [resultMessage, setResultMessage] = useState("");

    useEffect(() => {
        if (score === null) return;

        const fetchResult = async() => {
            const response = await axios.get(`https://week12-api-rcwo.onrender.com/api/result?score=${score}`);
            setResultMessage(response.data.message);
        };

        fetchResult();
    }, [score]);

    const goHome = () => {
        navigate("/")
    }

    return (
        <ResultDom>
            <h2>{resultMessage}</h2>
            <p>{score}점</p>
            <button onClick={goHome}>Home</button>
        </ResultDom>
    )
}

export default Result

const ResultDom = styled.div`
    text-align: center;
`