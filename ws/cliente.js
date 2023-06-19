const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
  console.log('Conectado ao servidor WebSocket');

  const requestData = {
    id: 1,
    operacao: 'CREDITO',
    valor: 100,
  };

  socket.send(JSON.stringify(requestData));
});

socket.addEventListener('message', (event) => {
  const response = JSON.parse(event.data);

  if (response.error) {
    console.error(`Erro: ${response.error}`);
  } else {
    console.log(`Conta atualizada:`, response);
  }

  socket.close();
});

socket.addEventListener('close', () => {
  console.log('Desconectado do servidor WebSocket');
});

socket.addEventListener('error', (event) => {
  console.error('Erro na conexão WebSocket', event);
});
