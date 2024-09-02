# taticas-api
Taticas arquiteturais de criação de APIs

Projetos com códigos de exemplos para táticas de construção de APIs em Node através de REST, RPC, graphQL e gRPC.

# Contexto

REST, RPC, GraphQL e WebSocket – O que são?

•	REST (Representational State Transfer): É um estilo de arquitetura de software para aplicati-vos da Web. Ele define uma série de princípios para a construção de aplicativos da Web, inclu-indo a divisão da aplicação em camadas, o uso de interfaces de programação de aplicativos (API) para acessar dados e a utilização de protocolos HTTP como o GET para recuperar da-dos e o POST para alterar dados. 

•	RPC (Remote Procedure Call): É um protocolo de rede que permite que os sistemas distribuí-dos chamem procedimentos remotamente. Ele usa um modelo cliente-servidor, no qual a cha-mada do procedimento é realizada por um cliente e é executada por um servidor. O cliente é responsável por fornecer os parâmetros necessários para execução do procedimento e o servi-dor é responsável por executar o procedimento e retornar o resultado para o cliente.

Nos últimos anos, tivemos a chegada de mecanismos mais performáticos de RPC como por exemplo o Google gRPC. A principal diferença entre gRPC e RPC é que o gRPC é um proto-colo de comunicação orientado a objetos baseado em HTTP/2, enquanto o RPC é um protoco-lo de comunicação orientado a procedimentos que usa um modelo cliente-servidor. Comparado ao RPC, o gRPC é mais eficiente, tem uma estrutura de mensagem mais compacta, oferece su-porte a streaming de dados, é de código aberto e é mais fácil de ser escalado. Além disso, o gRPC usa o protocolo HTTP/2 para permitir a comunicação simultânea entre cliente e servi-dor, enquanto o RPC usa o protocolo HTTP 1.1 para permitir a comunicação síncrona.

•	GraphQL: É um modelo de consulta para APIs desenvolvido pela equipe do Facebook. Ele usa uma linguagem de consulta específica para permitir que os desenvolvedores descrevam os dados que desejam recuperar de uma API específica. O GraphQL permite que os desenvolve-dores obtenham dados de várias fontes de dados em uma única consulta, melhorando a efici-ência e a velocidade da aplicação.

•	WebSocket: É um protocolo de rede para comunicação bidirecional entre clientes e servidores. Ele permite que os clientes e servidores se comuniquem de forma persistente e enviem mensa-gens para cada lado da conexão sem ter que ser iniciada a cada solicitação. É usado principal-mente para aplicações Web que precisam de atualizações em tempo real, como chats, jogos e aplicações de mensagens.


Pontos fortes e fracos

•	REST: 
o	Pontos Fortes: Facilidade de uso, Estável e confiável, Acesso a dados complexos, Su-porte a vários formatos de dados. 
o	Pontos Fracos: Pode ser limitado pela semântica do protocolo HTTP, Pode ser com-plexo de escalar para cenários de altíssima demanda.
•	RPC: 
o	Pontos Fortes: Permite a execução de procedimentos remotamente, Possibilidade de passar parâmetros para execução de métodos. 
o	Pontos Fracos: É necessário um mecanismo de segurança para prevenir o acesso não autorizado. Pode não ser flexível o suficiente para permitir a execução de procedimen-tos complexos.
•	GraphQL: 
o	Pontos Fortes: Possibilidade de obter dados de várias fontes em uma única consulta, Ajuda a reduzir a quantidade de solicitações feitas ao servidor, Possibilidade de definir o tipo de dados solicitados. 
o	Pontos Fracos: Pode haver um grande overhead na configuração. Pode ser complexo para implementar. Pode ser difícil de escalar.
•	Web Socket: 
o	Pontos Fortes: Permite a comunicação bidirecional entre cliente e servidor, Estável e confiável. Permite atualizações em tempo real. 
o	Pontos Fracos: Não é projetado para passar grandes quantidades de dados, Pode ser difícil de escalar, Não é adequado para aplicações que requerem baixa latência.
