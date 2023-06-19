| Critério              | REST/HTTP                 | RPC/gRPC                       | Web Socket                  | GraphQL                        |
|-----------------------|---------------------------|--------------------------------|-----------------------------|--------------------------------|
| Paradigma             | Arquitetura REST          | Procedimento Remoto Chamado    | Comunicação bidirecional    | Consulta de dados flexível     |
| Protocolo             | HTTP/HTTPS                | HTTP/2 - HTTPS-2               | WebSocket                   | HTTP/HTTPS                     |
| Estilo de comunicação | Request/Response          | Request/Response               | Bidirecional/Event-driven   | Request/Response               |
| Eficiência            | Variável (depende do uso) | Alta (comprimido/binário)      | Alta (binário)              | Variável (depende do uso)      |
| Tipos de dados        | JSON, XML, texto          | Protocol Buffers (binário)     | Texto, binário              | JSON                           |
| Caching               | Suporta caching           | Não suporta nativamente        | Não suporta nativamente     | Não suporta nativamente        |
| Descoberta de Serviço | Baseado em URI e método   | Baseado em método e contrato   | Baseado em eventos          | Baseado em tipos e campos      |
| Versionamento         | Por URL ou cabeçalho      | Por contrato e serviço         | Não padronizado             | Por tipos e campos             |
| Segurança             | Padrões HTTP/HTTPS        | gRPC Auth, SSL/TLS             | WS Security, SSL/TLS        | Padrões HTTP/HTTPS, JWT        |
| Casos de uso          | CRUD, sistemas Web        | Microservices, sistemas internos | Aplicações em tempo real, chat | API pública, integrações flexíveis |
