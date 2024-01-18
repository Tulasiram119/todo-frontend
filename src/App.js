import { BrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import AppContextProvider from "./utils/Context";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
