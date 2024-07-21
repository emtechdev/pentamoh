import { useEffect, useState } from "react";
import "./App.css";
import AddTasks from "./Components/AddTasks/AddTasks";
// import CreateUser from "./Components/CreateUser";

function App() {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "EN"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <>
      <AddTasks />
    </>
  );
}

export default App;
