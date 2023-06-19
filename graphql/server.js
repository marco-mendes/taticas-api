const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Conta {
    id: ID!
    nome: String!
    sobrenome: String!
    email: String!
    telefone: String!
    cpf: String!
    saldo: Float!
    dataCriacao: String!
  }

  input NovaContaInput {
    nome: String!
    sobrenome: String!
    email: String!
    telefone: String!
    cpf: String!
    saldo: Float!
    dataCriacao: String!
  }

  type Query {
    contas: [Conta]!
  }

  type Mutation {
    criarConta(novaConta: NovaContaInput!): Conta!
  }
`;

const contas = [
  {
    id: '1',
    nome: 'Fulano',
    sobrenome: 'Silva',
    email: 'fulano@mail.com',
    telefone: '123456789',
    cpf: '123.456.789-10',
    saldo: 500,
    dataCriacao: '2022-05-10'
  },
  {
    id: '2',
    nome: 'Ciclano',
    sobrenome: 'Souza',
    email: 'ciclano@mail.com',
    telefone: '987654321',
    cpf: '987.654.321-10',
    saldo: 1000,
    dataCriacao: '2022-05-11'
  }
]; 

const resolvers = {
  Query: {
    contas: () => {
      if (contas.length === 0) {
        return [];
      }
      return contas;
    }
  },
  Mutation: {
    criarConta: (parent, args) => {
      const novaConta = {
        id: Math.random().toString(36).substr(2, 9),
        nome: args.novaConta.nome,
        sobrenome: args.novaConta.sobrenome,
        email: args.novaConta.email,
        telefone: args.novaConta.telefone,
        cpf: args.novaConta.cpf,
        saldo: args.novaConta.saldo,
        dataCriacao: args.novaConta.dataCriacao
      };

      contas.push(novaConta);

      return novaConta;
    }
  }
};





const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Servidor iniciado em ${url}`);
});
