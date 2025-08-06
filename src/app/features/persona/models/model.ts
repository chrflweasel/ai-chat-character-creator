// export interface Persona {
//     // TODO implement other fields
//     name: string;
//     id: string; // uuid
//     sections: PersonaSection[];
// }
export interface PersonaSection {
    id: string; // uuid
    template: PersonaSectionTemplate;
    customName?: string; // this is for user custom name
    attributes: Attribute[];
}
//
export interface PersonaSectionTemplate {
    id: string; // uuid
    color: string;
    nameLocalizationId: string;
    iconName?: IconNames;
}
//
export type IconNames = 'cloth' | 'appearance' | 'age' | 'gender' | 'race' | 'class';

export interface Modificator extends ColorTemplateBase {
    nameLocalizationId: string;
}

export interface ModificatorBase {
    modificator: Modificator;
    modificatorListName: string;
}

export interface ColorTemplate {
    nameLocalizationId: string;
    color: string;
}

export interface ColorTemplateBase {
    colorTemplate: ColorTemplate;
    colorListName: string;
}

export interface Attribute extends ColorTemplateBase, ModificatorBase {
    nameLocalizationId: string;
}