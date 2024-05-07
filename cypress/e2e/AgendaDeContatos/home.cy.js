/// <reference types="cypress" />

describe("Teste para a Home de Agenda de contatos", () => {
  beforeEach(() => {
    //visita a página antes de todos os testes
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });
  //   it("Deve remover um contato", () => {
  //     //acessando e clickando no botão de deletar
  //     cy.get('button[class="delete"]').click();
  //     cy.on("h2", (conteudo) => {
  //       expect(conteudo).contain("2 contatos na agenda");
  //     });
  //   });
  it("Deve incluir um novo contato", () => {
    // acessando e preenchendo os campos de input
    cy.get('[type="text"]').type("Jorge Laffon");
    cy.get('[type="email"]').type("jlaffon@email.com");
    cy.get('[type="tel"]').type("11 666 666");
    // acessando e apertando o botão de adicionar um novo contato
    cy.get(".adicionar").click();
    // verifica se o último contato contém o nome igual ao que foi adicionado
    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)").should(
      "contain",
      "Jorge Laffon"
    );
  });
  it("Deve alterar um contato", () => {
    // acessando e apertando o botão de editar contato
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    // acessando os campos, limpando seus valores e preenchendo com novos
    cy.get('[type="text"]').clear().type("Carlos Fagundes");
    cy.get('[type="email"]').clear().type("cfagundes@email.com");
    cy.get('[type="tel"]').clear().type("11 999 999");
    // acessando e apertando o botão de alterar o contato
    cy.get(".alterar").click();
    // verificando se as informações do contato foram alteradas
    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)").should(
      "contain",
      "Carlos Fagundes"
    );
  });
  it("Deve remover um contato", () => {
    // acessando e apertando o botão de remover contato
    cy.get(".delete").click();
    // verificando se o contato não existe mais
    cy.get(".sc-beqWaB").should("not.exist");
  });
});
