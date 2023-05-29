import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from "./editForm";
import { useGlobalContext } from "./globalContext";
import Login from "./LoginForm";
import MainPage from "./MainPage";
import NewForm from "./newForm";
import Seance from "./Seance";
import SharedLayout from "./sharedLayout";

function App() {
  return (
    <div>
      <section className="topSection">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Login />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/seances/:id" element={<Seance />} />
              <Route path="/new" element={<NewForm />} />
              <Route path="seances/:id/edit" element={<EditForm />} />

              <Route path="*" element={<div>Error 404</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
