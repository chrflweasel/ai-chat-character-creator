import {type PaletteOptions} from "@mui/material";


export type _UsedPaletteOptions = PaletteOptions;

declare module '@mui/material/styles' {
    interface Palette {
        tagColors: {
            es: string, // Spanish
            pt: string, // Portuguese
            en: string, // English
            fr: string, // French
            ar: string, // Arabic
            vi: string, // Vietnamese
            tr: string, // Turkish
            de: string, // German
            ru: string, // Russian
            easter: string // Easter
        }
    }

    interface PaletteOptions {
        tagColors?: {
            es?: string,
            pt?: string,
            en?: string,
            fr?: string,
            ar?: string,
            vi?: string,
            tr?: string,
            de?: string,
            ru?: string,
            easter: string
        }
    }
}