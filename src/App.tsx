import useWindowTitleWatcher from "./app/features/general/hooks/useWindowTitleWatcher.ts";
import ThemeSelector from "./app/components/themes/ThemeSelector.tsx";

function App() {
    useWindowTitleWatcher();

    return (
        <>
            <ThemeSelector/>
        </>
    )
}

export default App
