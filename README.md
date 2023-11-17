# VehicleFleet - Frontend
O VehicleFleet Frontend é a interface do usuário do sistema de gerenciamento de frotas. Este documento fornece informações sobre como configurar, rodar e usar o frontend do projeto.

# Visão Geral
O frontend foi desenvolvido utilizando o framework Angular, oferecendo uma experiência de usuário amigável para interagir com as funcionalidades relacionadas a proprietários, veículos, seguradoras e histórico de manutenção.


# Como Rodar o Projeto Frontend
Siga as instruções abaixo para configurar e rodar o frontend em sua máquina.

Pré-requisitos
Certifique-se de ter o seguinte instalado:

Node.js
npm (Node Package Manager)
Angular CLI


# Passos para Configuração
Clone este repositório:
git clone [URL do repositório]

Navegue até o diretório do projeto frontend:
cd VehicleFleet/VehicleFleetAPP

Instale as dependências:
npm install

Inicie o servidor de desenvolvimento:
ng serve
O frontend estará disponível em http://localhost:4200. Abra o navegador e acesse essa URL para utilizar a aplicação.


# Uso da Aplicação
Na interface do frontend, você encontrará as seguintes seções:

Owner Register: Cadastro de proprietários de veículos.
Vehicle List: Lista de veículos associados aos proprietários.
Insurance List: Lista de seguradoras associadas aos veículos.
Maintenance History: Histórico de manutenção dos veículos.
Realize operações como adicionar, visualizar ou excluir proprietários, veículos, seguradoras e registros de manutenção.

Configurações Adicionais
Se você estiver rodando o frontend em outra máquina, certifique-se de ajustar as configurações de conexão com o backend no arquivo environment.ts para refletir as configurações locais.

Contribuição
Se desejar contribuir para o desenvolvimento do VehicleFleet Frontend, abra issues para relatar problemas ou sugerir melhorias. Fique à vontade para enviar pull requests.
