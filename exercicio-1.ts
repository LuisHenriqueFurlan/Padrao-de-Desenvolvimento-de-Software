interface Funcionario {
 trabalhar(): void;
 registrarPonto(): void;
}

interface Gerente extends Funcionario {
gerenciarEquipe(): void
}

interface Desenvolvedor extends Funcionario {
receberSalario(): void
escreverCodigo(): void
}

interface Estagiário extends Funcionario {
escreverCodigo(): void
}

interface Freelancer {
trabalhar(): void
escreverCodigo(): void
}

interface ISistemaRH {
nome: string,
CPF: string,
identificacao: number
}

class SistemaRH implements ISistemaRH {
nome: string
CPF: string
identificacao: number;

constructor(nome: string, CPF: string, identificacao: number) {
this.nome = nome,
this.CPF = CPF,
this.identificacao = identificacao
}
}

class Gerente implements Gerente {
 trabalhar(): void { console.log("Gerente trabalhando"); }
 registrarPonto(): void { console.log("Ponto registrado"); }
 receberSalario(): void { console.log("Salário recebido"); }
 gerenciarEquipe(): void { console.log("Gerenciando equipe"); }
}

class Desenvolvedor implements Desenvolvedor {
 trabalhar(): void { console.log("Desenvolvedor trabalhando"); }
 registrarPonto(): void { console.log("Ponto registrado"); }
 receberSalario(): void { console.log("Salário recebido"); }
 escreverCodigo(): void { console.log("Escrevendo código"); }
}

class Estagiario implements Estagiario {
 trabalhar(): void { console.log("Estagiário trabalhando"); }
 registrarPonto(): void { console.log("Ponto registrado"); }
 escreverCodigo(): void { console.log("Estagiário escrevendo código"); }
}

class Freelancer implements Freelancer {
trabalhar(): void { console.log("Freelancer trabalhando"); }
escreverCodigo(): void { console.log("Freelancer escrevendo código"); }
}

 