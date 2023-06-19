import { Conta } from './cliente/Conta';
import express, { Request, Response } from 'express';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simulação de um banco de dados de contas
const contas: Conta[] = [
    new Conta(1, 1000),
  ];

// Função para encontrar uma conta pelo ID
const encontrarContaPorId = (id: number): Conta | undefined => {
  return contas.find((conta) => conta.id === id);
};

// Endpoint para consultar o estado da conta
app.get('/api/contas/:id', async (req: Request, res: Response) => {
  const idConta = parseInt(req.params.id);
  const conta = encontrarContaPorId(idConta);

  if (conta) {
    res.status(200).json(conta);
  } else {
    res.status(404).json({ mensagem: 'Conta não encontrada' });
  }
});

// Endpoint para realizar operações de débito e crédito
app.patch('/api/contas/:id', async (req: Request, res: Response) => {
  const idConta = parseInt(req.params.id);
  const conta = encontrarContaPorId(idConta);

  if (conta) {
    const { operacao, valor } = req.body;

    if (operacao === 'credito') {
      conta.saldo += valor;
    } else if (operacao === 'debito') {
      conta.saldo -= valor;
    } else {
      return res.status(400).json({ mensagem: 'Operação inválida' });
    }

    res.status(200).json(conta);
  } else {
    res.status(404).json({ mensagem: 'Conta não encontrada' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
