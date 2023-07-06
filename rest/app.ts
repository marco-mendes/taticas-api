
import { Conta } from './cliente/Conta';
import express, { Request, Response } from 'express';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simulação de um banco de dados de contas
const contas: Conta[] = [
    new Conta(1, 1000, 2000),
  ];

//Funcao para remover uma conta ja existente
app.delete('/api/contas/:id', async (req: Request, res: Response) => {
  const idConta = parseInt(req.params.id);
  const conta = encontrarContaPorId(idConta);

  if (conta) {
    const indice = contas.indexOf(conta);
    contas.splice(indice, 1);

    res.status(200).json({ mensagem: 'Conta removida com sucesso' });
  } else {
    res.status(404).json({ mensagem: 'Conta não encontrada' });
  }
});

// Funcao para atualizar uma conta ja existente
//Remova limite de credito da chamada da criacao
app.put('/api/contas/:id', async (req: Request, res: Response) => {
  const idConta = parseInt(req.params.id);
  const conta = encontrarContaPorId(idConta);

  if (conta) {
    const { saldo } = req.body;

    if (!saldo) {
      return res.status(400).json({ mensagem: 'Dados inválidos' });
    } else {
      conta.saldo = saldo;
    }

    res.status(200).json(conta);
  } else {
    res.status(404).json({ mensagem: 'Conta não encontrada' });
  }
});  
 
// Funcao para criar uma nova conta
app.post('/api/contas', async (req: Request, res: Response) => 
{
  const { id, saldo, limiteCredito } = req.body;

  if (!id || !saldo || !limiteCredito) {
    return res.status(400).json({ mensagem: 'Dados inválidos' });
  }

  const novaConta = new Conta(id, saldo, limiteCredito);
  contas.push(novaConta);

  res.status(201).json(novaConta);
});
  
// Função para encontrar uma conta pelo ID
function encontrarContaPorId(id: number): Conta | undefined {
  return contas.find((conta) => conta.id === id);
}

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


