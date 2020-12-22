import { Documento } from "./documento";
import { Release } from "./release";
import { EquipeProjeto } from "./EquipeDoProjeto";

export class Projeto {
    id: Number;
    nome: string;
    descricao: string;

    releases: Release[];
    documentos: Documento[];
    Equipe: EquipeProjeto[];

}
