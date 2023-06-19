// cliente/clientApi.ts
import axios from 'axios';

const URL_BASE_API = 'http://localhost:3000/api';

// Interface da Conta
export interface Conta {
    id: number;
    saldo: number;
}

// Função para obter a conta pelo ID
export const obterConta = async (id: number): Promise<Conta | null> => {
    try {
        const resposta = await axios.get<Conta>(`${URL_BASE_API}/contas/${id}`);
        return resposta.data;
    } catch (erro) {
        console.error(erro);
        return null;
    }
};

// Função para atualizar a conta com operações de débito ou crédito
export const atualizarConta = async (
    id: number,
    operacao: 'debito' | 'credito',
    valor: number
): Promise<Conta | null> => {
    try {
        const resposta = await axios.patch<Conta>(`${URL_BASE_API}/contas/${id}`, {
            operacao,
            valor,
        });
        return resposta.data;
    } catch (erro) {
        console.error(erro);
        return null
    }
};