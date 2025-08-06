import PageLayout from "../components/layout/PageLayout.tsx";
import TemplatesPanel from "../components/templates-panel/TemplatesPanel.tsx";
import type {FC} from "react";
import {Stack} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../features/store.ts";
import PersonaSectionCard from "../components/persona-section/PersonaSection.tsx";
import {setEditingSectionId} from "../features/persona/personaSlice.ts";
import type {PersonaSection} from "../features/persona/models/model.ts";

const MainPage: FC = () => {
    const dispatch = useAppDispatch();
    const { currentPersonaSections, editingSectionId } = useAppSelector(state => state.persona);

    const cancelEditingHandler = () => {
        dispatch(setEditingSectionId(null));
    }

    const updateSectionHandler = (section: PersonaSection) => {
        // TODO implement store updating of persona section
    }

    const deleteSectionHandler = (section: PersonaSection) => () => {
        // TODO implement store deleting of persona section
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
            >
                {currentPersonaSections.map(section => (
                    <PersonaSectionCard
                        key={section.id}
                        section={section}
                        editingSectionId={editingSectionId}
                        onCancelEditing={cancelEditingHandler}
                        onUpdateSection={updateSectionHandler}
                        onDeleteSection={deleteSectionHandler(section)}
                    />
                ))}
            </Stack>
        </PageLayout>
    )
}

export default MainPage;