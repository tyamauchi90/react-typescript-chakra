import { Button, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
        {/* <Button colorScheme="teal">ボタン</Button> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
