import useWindowTitleWatcher from "./app/features/general/hooks/useWindowTitleWatcher.ts";
import {Route, Routes} from "react-router-dom";
import MainPage from "./app/pages/MainPage.tsx";

function App() {
    useWindowTitleWatcher();

    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </>
    )
}

export default App