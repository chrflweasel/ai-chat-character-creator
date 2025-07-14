import {useEffect} from "react";
import useGeneral from "../useGeneral.ts";

const useWindowTitleWatcher = () => {
    const {windowTitle} = useGeneral();

    useEffect(() => {
        document.title = windowTitle;
    }, [windowTitle]);
}

export default useWindowTitleWatcher;