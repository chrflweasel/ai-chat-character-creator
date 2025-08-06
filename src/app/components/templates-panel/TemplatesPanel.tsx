import type {FC} from "react";
import {alpha, Box, Button} from "@mui/material";
import personaSectionTemplates from "../../features/persona/templates/templates.ts";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../features/store.ts";
import {addSection, setEditingSectionId} from "../../features/persona/personaSlice.ts";
import {v4 as uuidv4} from "uuid";
import type {PersonaSectionTemplate} from "../../features/persona/models/model.ts";

const TemplatesPanel: FC = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const { editingSectionId } = useAppSelector(state => state.persona);

    const clickHandler = (template: PersonaSectionTemplate) => () => {
        const newSection = {
            id: uuidv4(),
            template: template,
            attributes: []
        };
        dispatch(addSection(newSection)); // Add the new section
        dispatch(setEditingSectionId(newSection.id)); // And edit it
    }

    return (
        <Box display={'flex'} gap={.5}>
            {personaSectionTemplates.map(template => (
                <Button
                    disabled={editingSectionId !== null}
                    key={template.id}
                    variant="outlined"
                    onClick={clickHandler(template)}
                    sx={{
                        color: template.color,
                        borderColor: template.color,
                        '&:hover': {
                            backgroundColor: alpha(template.color, .07)
                        }
                    }}
                >
                    {t(template.nameLocalizationId)}
                </Button>
            ))}
        </Box>
    )
}

export default TemplatesPanel;