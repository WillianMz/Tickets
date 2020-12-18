export class Ticket {
    id: number;
    dataAbertura: string;
    titulo: string;
    descricao: string;
    status: string;
    prioridade: string;
    dataFechamento: string;
    solucao: string;
    dataCancelamento: string;
    motivoCancelamento: string;
    criadorId: number;
    projetoId: number;
    categoriaId: number;
    usuarioFechamento: number;
    usuarioCancelamento: number;
}
