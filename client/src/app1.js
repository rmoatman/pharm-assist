import React from "react";
import Routed from "./routed1";
import axios from "axios";
import { AuthContextProvider } from "./context/authcontext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Routed />
    </AuthContextProvider>
  );
}

export default App;