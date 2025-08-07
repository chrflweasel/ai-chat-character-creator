import {type FC, useEffect, useRef, useState} from "react";
import type {PersonaSectionCardProps} from "./PersonaSection.interface.ts";
import {Box, Button, Stack, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import type {PersonaSection} from "../../features/persona/models/model.ts";
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import SaveIcon from '@mui/icons-material/Save';

const PersonaSectionCard: FC<PersonaSectionCardProps> = (props) => {
    const {section, onDeleteSection, onUpdateSection, onEditActivated, editingSectionId, onCancelEditing} = props;
    const editingSectionIdPrev = useRef<string | null>(null);
    const [editingSection, setEditingSection] = useState<PersonaSection | null>(null);
    const {t} = useTranslation();

    const isEditing = editingSectionId === section.id;

    useEffect(() => {
        if (editingSectionIdPrev.current !== editingSectionId) {
            editingSectionIdPrev.current = editingSectionId;
            if (isEditing) {
                setEditingSection(section)
            } else {
                setEditingSection(null);
            }
        }
    }, [editingSectionId, isEditing, section]);

    return (
        <Box
            display={'flex'}
            borderRadius={'5px'}
            boxShadow={'0 2px 4px rgba(0, 0, 0, 0.1)'}
            overflow={'hidden'}
            sx={{
                '& .SectionHoverVisibleControl': {
                    display: !isEditing ? 'none' : undefined
                },
                '&:hover .SectionHoverVisibleControl': {
                    display: 'inline-flex'
                }
            }}
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
                        isEditing && editingSection ?
                            (
                                <Typography>
                                    {editingSection.customName || t(editingSection.template.nameLocalizationId)}
                                </Typography>
                            )
                            :
                            (
                                <Typography>
                                    {section.customName || t(section.template.nameLocalizationId)}
                                </Typography>
                            )
                    }

                    <Box
                        sx={{
                            '& .MuiButton-root': {
                                minWidth: '24px',
                                px: .5
                            }
                        }}
                        display={'flex'}
                        gap={1}
                    >
                        {isEditing && <Button
                            size={'small'}
                            onClick={() => editingSection !== null && onUpdateSection(editingSection)}
                            variant={'outlined'}
                            color={'secondary'}
                        >
                            <SaveIcon/>
                        </Button>}
                        <Button
                            className={'SectionHoverVisibleControl'}
                            size={'small'}
                            onClick={onDeleteSection}
                            variant={'outlined'}
                            color={'error'}
                        >
                            <DeleteForeverIcon/>
                        </Button>
                        {!isEditing && <Button
                            className={'SectionHoverVisibleControl'}
                            size={'small'}
                            onClick={onEditActivated}
                            variant={'outlined'}
                            color={'primary'}
                        >
                            <EditDocumentIcon/>
                        </Button>}
                        {isEditing && <Button
                            size={'small'}
                            onClick={onCancelEditing}
                            variant={'outlined'}
                        >
                            <CloseIcon/>
                        </Button>}

                        <Box minHeight={'32px'} height={'32px'}/>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default PersonaSectionCard;