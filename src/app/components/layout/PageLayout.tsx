import type {FC} from "react";
import {Box, Stack} from "@mui/material";
import LangSwitcher from "../lang-switcher/LangSwitcher.tsx";
import ThemeSelector from "../themes/ThemeSelector.tsx";

const PageLayout: FC<{children?: React.ReactNode}> = ({children}) => {
    return (
        <Stack
            maxWidth={'1000px'}
            width={'100%'}
            margin={'0 auto'}
            boxShadow={'0 0 10px rgba(0, 0, 0, 0.1)'}
            borderRadius={'10px'}
            padding={2}
            gap={2}
        >
            <Box display={'flex'} justifyContent={'space-between'}>
                <ThemeSelector/>
                <LangSwitcher/>
            </Box>
            {children}
        </Stack>
    )
}

export default PageLayout;