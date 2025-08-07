import PageLayout from "../components/layout/PageLayout.tsx";
import TemplatesPanel from "../components/templates-panel/TemplatesPanel.tsx";
import {type FC, useState} from "react";
import {Stack} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../features/store.ts";
import PersonaSectionCard from "../components/persona-section/PersonaSection.tsx";
import {setEditingSectionId} from "../features/persona/personaSlice.ts";
import type {PersonaSection} from "../features/persona/models/model.ts";
import ConfirmationDialog from "../components/commons/ConfirmationDialog.tsx";
import {useTranslation} from "react-i18next";

const MainPage: FC = () => {
    const dispatch = useAppDispatch();
    const { currentPersonaSections, editingSectionId } = useAppSelector(state => state.persona);
    const [unsavaedConfirmation, setUnsavaedConfirmation] = useState(false);
    const {t} = useTranslation();

    const cancelEditingHandler = () => {
        dispatch(setEditingSectionId(null));
    }

    const updateSectionHandler = (section: PersonaSection) => {
        // TODO implement store updating of persona section
    }

    const deleteSectionHandler = (section: PersonaSection) => () => {
        // TODO implement store deleting of persona section
    }

    const editSectionHandler = (section: PersonaSection) => () => {
        if (editingSectionId !== null) {
            setUnsavaedConfirmation(true);
            return;
        }
        dispatch(setEditingSectionId(section.id));
    }

    const saveUnsavedSection = () => {
        // TODO implement store updating of persona section
    }

    return (
        <PageLayout>
            <TemplatesPanel/>
            <Stack
                sx={theme => ({
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: theme.spacing(1),
                    p: 1
                })}
                gap={1}
            >
                {currentPersonaSections.map(section => (
                    <PersonaSectionCard
                        key={section.id}
                        section={section}
                        editingSectionId={editingSectionId}
                        onCancelEditing={cancelEditingHandler}
                        onUpdateSection={updateSectionHandler}
                        onDeleteSection={deleteSectionHandler(section)}
                        onEditActivated={editSectionHandler(section)}
                    />
                ))}
            </Stack>

            {unsavaedConfirmation && (
                <ConfirmationDialog
                    close={() => setUnsavaedConfirmation(false)}
                    message={t('personaSections.unsavedChangesConfirm')}
                    onCancel={() => setUnsavaedConfirmation(false)}
                    onConfirm={cancelEditingHandler}
                />
            )}
        </PageLayout>
    )
}

export default MainPage;