import ToggleColorMode from "./components/ToggleColorMode";
import View from "./components/View";
import UserContext from "./components/AccountContext";
import socket from "./socket";

function App() {
  socket.connect();
  return (
    <UserContext>
      <View />
      <ToggleColorMode />
    </UserContext>
  );
}

export default App;
