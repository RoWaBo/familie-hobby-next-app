import { Asset } from "contentful";

export default interface Product {
    beskrivelse: string
    billede: Asset
    overskrift: string
    type: string
    infotekstbox?: string
}