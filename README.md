## 1. Interface Segregation Principle (ISP)
**O Princípio da Segregação de Interface** afirma que "uma classe não deve ser forçada a implementar interfaces e métodos que não utiliza".

* **Trecho Violado:** A interface `Funcionario` centralizando métodos como `gerenciarEquipe()`, `escreverCodigo()` e `receberSalario()`.
* **Por que é uma violação?** Você está forçando o `Desenvolvedor` a conhecer o comportamento de gestão e o `Gerente` a lidar com escrita de código. A interface é genérica demais para papéis com responsabilidades tão distintas.
* **Impacto no sistema:** Cria um **acoplamento desnecessário**. Se você precisar alterar a assinatura do método `escreverCodigo()`, terá que atualizar a classe `Gerente`, mesmo que ela não utilize essa função. Isso torna o código rígido.

---

## 2. Liskov Substitution Principle (LSP)
**O Princípio de Substituição de Liskov** diz que "as classes derivadas devem poder substituir suas classes base sem quebrar a integridade da aplicação".

* **Trecho Violado:** O uso de `throw new Error()` dentro dos métodos implementados (ex: `Gerente.escreverCodigo()` ou `Estagiario.receberSalario()`).
* **Por que é uma violação?** Se um cliente do código espera um `Funcionario` e chama `escreverCodigo()`, ele não espera que o programa exploda com um erro de execução. Ao lançar exceções para comportamentos definidos na interface, você quebra a confiança do polimorfismo. O subtipo não é totalmente substituível pelo tipo base.
* **Impacto no sistema:** O sistema torna-se **frágil e imprevisível**. O desenvolvedor que utiliza a interface precisará espalhar blocos `try-catch` ou verificações de tipo (`if funcionario is Gerente`) por todo o projeto, anulando os benefícios da orientação a objetos.

---

## 3. Dependency Inversion Principle (DIP)
**O Princípio da Inversão de Dependência** estabelece que devemos "depender de abstrações, não de implementações".

* **Trecho Violado:** A própria definição da interface `Funcionario`.
* **Por que é uma violação?** O DIP preza por abstrações que representem contratos estáveis. Como `Funcionario` depende de detalhes de implementação de cargos específicos (gestão, código, benefícios), ela é uma "abstração mentirosa". As classes de alto nível que dependerem dessa interface estarão, indiretamente, dependendo de detalhes específicos de cada cargo.
* **Impacto no sistema:** **Dificuldade de expansão**. Para adicionar um novo tipo de funcionário (ex: um `Vendedor`), você seria obrigado a poluir a interface principal com métodos como `vender()`, ou aceitar que o vendedor herde métodos de escrita de código e gestão que não lhe pertencem.