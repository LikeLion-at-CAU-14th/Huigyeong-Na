import { Card, Label, Title, Wrapper } from "../components/layout/common";
import { useUserInfo } from "../context/useUserInfo"

const MyPage = () => {
  const { state } = useUserInfo();

  return (
    <Wrapper>
      <Card>
        <Title>회원 정보</Title>
        <Label>이름: {state.name}</Label>
        <Label>이메일: {state.email}</Label>
        <Label>생년월일: {state.birth}</Label>
        <Label>성별: {state.gender}</Label>
      </Card>
    </Wrapper>
  )
}

export default MyPage