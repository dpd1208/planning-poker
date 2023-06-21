import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./Main";
import Welcome from "./components/Welcome/Welcome";
import { Wrapper } from './App.styled';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Wrapper className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <Main />
        </>
      )}
    </Wrapper>
  );
}

export default App;
