import { useContext, useState } from "react"
import { ThemeColorcontext } from "../../context/context"
import { Button, Card, Title, Wrapper } from "../layout/common";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../context/useUserInfo";

const FormSection = () => {
    const mode = useContext(ThemeColorcontext);
    const { dispatch } = useUserInfo();
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch({
            type: "SET_USER_INFO",
            payload: userInfo,
        });
        navigate('/mypage');
    }

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        birth: "",
        gender: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    }



  return (
    <Wrapper>
        <Card>
            <Title>회원 정보 입력</Title>
            <Form type='text' label='이름' name="name" value={userInfo.name} onChange={handleChange} />
            <Form type='email' label='이메일' name="email" value={userInfo.email} onChange={handleChange} />
            <Form type='date' label='생년월일' name="birth" value={userInfo.birth} onChange={handleChange} />
            <Form label='성별' name="gender" value={userInfo.gender} onChange={handleChange} />

            <Button
                mode={mode.button}
                onClick={handleSubmit}
            >
                제출하기
            </Button>
        </Card>
    </Wrapper>
  )
}

export default FormSection