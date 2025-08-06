import type {PersonaSection} from "../../features/persona/models/model.ts";

export interface PersonaSectionCardProps {
    section: PersonaSection;
    editingSectionId: string | null;
    onUpdateSection: (section: PersonaSection) => void;
    onDeleteSection: VoidFunction;
    onCancelEditing: VoidFunction;
}