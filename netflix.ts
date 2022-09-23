export class Netflix{
    titulo: string;
    ano: number;
    sinopse: string;
    genero: string;
    classificacao: number;
    duracao: number;

    constructor(titulo: string, ano:number, sinopse: string, genero: string, duracao: number, classificacao: number) {
        this.titulo = titulo;
        this.ano = ano;
        this.sinopse = sinopse;
        this.genero = genero;
        this.classificacao = classificacao;
        this.duracao = duracao;
    }

    mostrar(){
        console.log(`
        ${this.titulo}
        ${this.ano}
        ${this.sinopse}
        ${this.duracao}
        ${this.genero}
        ${this.classificacao}
        `)
    }
}
