import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import StyledComponent from "./StyledComponent";

function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <p>멋지다링!테스트임</p>
      <StyledComponent />
    </>
  );
}

export default App;

/**
터미널로 깃허브 연결(netlify도 같이)

github에 새로운 repository만들면
현재 만들고 있는 폴더의 터미널로 복사붙여넣기 해준다.(이건 깃허브 레포지토리 첨 만들면 나오는 첫 화면에 나옴)

그리고 git commit -m “추가하기”로 명령어를 실행해주면

메세지로 추가하기로 해서 커밋이 됨

그리고 git push origin master 명령어를 해주면 좋음
 */
