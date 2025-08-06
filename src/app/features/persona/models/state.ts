import type {PersonaSection} from "./model.ts";

export interface State {
    currentPersonaSections: PersonaSection[];
    editingSectionId: string | null;
}

const initialState: State = {
    currentPersonaSections: [],
    editingSectionId: null
};

export default initialState;