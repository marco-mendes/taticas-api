// servidor/server.ts
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.resolve(__dirname, '../protos/conta.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const conta = grpc.loadPackageDefinition(packageDefinition).conta as any;

const contas = [
  {
    id: 1,
    saldo: 1000,
  },
];

function obterConta(call: any, callback: any) {
  const conta = contas.find((c) => c.id === call.request.id);
  if (conta) {
    callback(null, conta);
  } else {
    callback({ code: grpc.status.NOT_FOUND, details: 'Conta não encontrada' });
  }
}

function atualizarConta(call: any, callback: any) {
  const conta = contas.find((c) => c.id === call.request.id);
  if (conta) {
    const { operacao, valor } = call.request;

    if (operacao === 'CREDITO') {
      conta.saldo += valor;
    } else if (operacao === 'DEBITO') {
      conta.saldo -= valor;
    } else {
      return callback({ code: grpc.status.INVALID_ARGUMENT, details: 'Operação inválida' });
    }

    callback(null, conta);
  } else {
    callback({ code: grpc.status.NOT_FOUND, details: 'Conta não encontrada' });
  }
}

function main() {
  const server = new grpc.Server();
  server.addService(conta.ContaService.service, {
    ObterConta: obterConta,
    AtualizarConta: atualizarConta,
  });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error('Erro ao iniciar o servidor:', err);
      return;
    }
    server.start();
    console.log('Servidor gRPC rodando na porta 50051');
  });
}

main();
