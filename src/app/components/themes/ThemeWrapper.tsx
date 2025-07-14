import {type FC, type ReactNode} from "react";
import { ThemeProvider } from "@mui/material";
import useThemeSwitcher from "../../themes/useThemeSwitcher.ts";

const ThemeWrapper: FC<{children: ReactNode}> = ({children}) => {
    const theme = useThemeSwitcher();

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default ThemeWrapper;