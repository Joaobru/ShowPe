import React from "react";
import createRouter from "./routes";

// import { Container } from './styles';

function App() {
  const Routes = createRouter(true);
  return <Routes />;
}

export default App;
