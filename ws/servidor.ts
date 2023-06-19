import WebSocket from 'ws';

interface Conta {
  id: number;
  saldo: number;
}

const contas: Conta[] = [
  {
    id: 1,
    saldo: 1000,
  },
];

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log('Cliente conectado');

  socket.on('message', (message) => {
    const { id, operacao, valor } = JSON.parse(message.toString());
    const conta = contas.find((c) => c.id === id);

    if (conta) {
      if (operacao === 'CREDITO') {
        conta.saldo += valor;
      } else if (operacao === 'DEBITO') {
        conta.saldo -= valor;
      } else {
        socket.send(JSON.stringify({ error: 'Operação inválida' }));
        return;
      }

      socket.send(JSON.stringify(conta));
    } else {
      socket.send(JSON.stringify({ error: 'Conta não encontrada' }));
    }
  });

  socket.on('close', () => {
    console.log('Cliente desconectado');
  });
});

console.log('Servidor WebSocket rodando na porta 8080');
