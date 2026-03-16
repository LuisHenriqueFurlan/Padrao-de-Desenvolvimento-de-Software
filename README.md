# Análise de Violações dos Princípios SOLID

## 1. Violação do LSP (Liskov Substitution Principle)

### Trecho que viola

Métodos que lançam exceção nas classes que implementam `Funcionario`.

Exemplo:

```ts
escreverCodigo(): void {
 throw new Error("Gerente não escreve código");
}