import type {FC} from "react";
import {Box, Button} from "@mui/material";
import {useTranslation} from "react-i18next";

const LangSwitcher: FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };


    return (
        <Box>
            <Button
                onClick={() => changeLanguage('en')}
                variant={i18n.language === 'en' ? 'contained' : 'outlined'}
            >
                En
            </Button>
            <Button
                onClick={() => changeLanguage('ru')}
                variant={i18n.language === 'ru' ? 'contained' : 'outlined'}
            >
                Ru
            </Button>
        </Box>

    )
}

export default LangSwitcher;