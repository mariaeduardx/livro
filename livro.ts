// Definir a Classe Base Livro
class Livro {
    constructor(public titulo: string, public autor: string, public ano: number) {}
}

// Definir a Classe Derivada LivroCategoria
class LivroCategoria extends Livro {
    constructor(titulo: string, autor: string, ano: number, public categoria: string) {
        super(titulo, autor, ano);
    }

    // Método sem Retorno
    exibirDetalhes(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}, Categoria: ${this.categoria}`);
    }

    // Método com Retorno
    éAntigo(): boolean {
        return this.ano < 2000;
    }
}

// Criar uma Lista de Livros
const livro1 = new LivroCategoria("Dom Casmurro", "Machado de Assis", 1899, "Clássico");
const livro2 = new LivroCategoria("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia");
const livro3 = new LivroCategoria("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997, "Fantasia");

const listaDeLivros: LivroCategoria[] = [livro1, livro2, livro3];

// Usar forEach para iterar sobre a lista de livros e chamar exibirDetalhes
listaDeLivros.forEach(livro => {
    livro.exibirDetalhes();
    if (livro.éAntigo()) {
        console.log(`${livro.titulo} é um livro antigo.`);
    } else {
        console.log(`${livro.titulo} não é um livro antigo.`);
    }
});