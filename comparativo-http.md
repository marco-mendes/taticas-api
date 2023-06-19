| Versão    | HTTP/1.0                                      | HTTP/1.1                                      | HTTP/2.0                                      | HTTP/3.0                                      |
|-----------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Ano       | 1996                                          | 1997                                          | 2015                                          | 2020                                          |
| Conexão   | Uma requisição por conexão                    | Múltiplas requisições por conexão (keep-alive)| Multiplexação em uma única conexão            | Multiplexação em uma única conexão            |
| Pipelining| Não suportado                                 | Suportado                                     | Não aplicável (substituído por multiplexação) | Não aplicável (substituído por multiplexação) |
| Paralelismo | Não suportado                                | Limitado                                      | Completo                                      | Completo                                      |
| Cabeçalhos| Texto simples                                  | Texto simples                                 | Compressão HPACK                              | Compressão QPACK                              |
| Transporte| TCP                                            | TCP                                           | TCP                                           | QUIC (UDP-based)                              |
| Performance e escalabilidade | Baixa, devido à conexão única e falta de paralelismo | Melhorada com keep-alive e pipelining, mas ainda limitada | Alta, devido à multiplexação, paralelismo e compressão de cabeçalhos | Mais alta, devido ao uso do protocolo QUIC, com menor latência e melhor desempenho em conexões instáveis |

