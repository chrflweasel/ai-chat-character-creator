import type {FC} from "react";
import type {PersonaSectionCardProps} from "./PersonaSection.interface.ts";
import {Box, Stack, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const PersonaSectionCard: FC<PersonaSectionCardProps> = (props) => {
    const {section, onDeleteSection, onUpdateSection, editingSectionId, onCancelEditing} = props;
    const {t} = useTranslation();

    const isEditing = editingSectionId === section.id;

    return (
        <Box
            display={'flex'}
            borderRadius={'5px'}
            boxShadow={'0 2px 4px rgba(0, 0, 0, 0.1)'}
            overflow={'hidden'}
        >
            <Box
                width={'20px'}
                bgcolor={section.template.color}
            />
            <Stack
                p={1}
                flexGrow={1}
            >
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    {
                        isEditing ?
                            (
                                <Typography>
                                    {section.customName || t(section.template.nameLocalizationId)}
                                </Typography>
                            )
                            :
                            (
                                <Typography>
                                    {section.customName || t(section.template.nameLocalizationId)}
                                </Typography>
                            )
                    }

                    <Box>Test</Box>
                    {/* TODO implement controls for editing, saving, cancelling and deleting */}
                </Box>
            </Stack>
        </Box>
    )
}

export default PersonaSectionCard;