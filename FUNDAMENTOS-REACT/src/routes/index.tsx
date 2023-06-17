import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootPage } from "../pages/RootPage";
import { App } from "../App";
import { NotFoundPage } from "../pages/NotFoundPage";
import { LoginPage } from "../pages/LoginPage";
import { LessonsPage } from "../pages/LessonsPage";
import { FundamentosPage } from "../pages/FundamentosPage";
import { ExercicioPage } from "../pages/ExercicioPage";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<RootPage />} >
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="aulas" element={<LessonsPage/>}/>
                        <Route path="aulas/1/conteudo" element={<FundamentosPage/>}/>
                        <Route path="aulas/1/exercicio" element={<ExercicioPage/>}/>
                        <Route path="aulas/2/conteudo" element={<FundamentosPage/>}/>
                        <Route path="aulas/2/exercicio" element={<ExercicioPage/>}/>
                    </Route>
                    <Route path="/segunda-pagina" element={<App />} />
                    <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}
