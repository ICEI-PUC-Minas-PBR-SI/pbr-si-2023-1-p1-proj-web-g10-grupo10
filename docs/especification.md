# Especificações do Projeto

## Personas

### Usuário da Loja:
- Gerente de loja de autopeças. João, 45 anos, com formação em administração de empresas. Trabalha na loja de autopeças há 10 anos e é responsável pelo estoque e pela gestão de compras. Ele precisa acessar o sistema para cadastrar e atualizar produtos, gerenciar o estoque, exibir produtos disponíveis e verificar o histórico de produtos reservados.

### Administrador do Sistema:
- Fábio, programador e desenvolvedor de sistemas, 39 anos, formado em Sistemas da Informação. Ele é responsável por desenvolver e manter o sistema Auto Book, garantindo que os usuários tenham uma experiência fácil e intuitiva ao usar a plataforma. Ela precisa monitorar e atualizar o sistema regularmente, além de estar disponível para responder às solicitações dos usuários em caso de problemas técnicos.

### Comprador: 
- Motorista de aplicativo. Mario, 30 anos, com formação em engenharia. Ele usa seu carro para trabalhar como motorista de aplicativo e precisa encontrar rapidamente as peças de reposição necessárias para manter seu veículo em bom estado. Ele precisa acessar o sistema para buscar produtos, reservar produtos e verificar o histórico de reservas.

## Histórias de Usuários

### Usuário:
- Como um motorista que depende do meu carro para trabalhar, eu quero poder encontrar a peça que preciso com rapidez e eficiência, para que eu possa reparar meu veículo o mais rápido possível e voltar a trabalhar.

- Como um mecânico que atende a vários clientes em um dia, eu quero poder localizar e reservar peças de maneira conveniente e confiável, para que eu possa atender aos pedidos de meus clientes com eficiência.

### Loja:
- Como proprietário de oficina, eu quero ter acesso a um sistema que me permita gerenciar meus pedidos de peças, de forma que eu possa controlar o estoque de minha oficina e planejar adequadamente a manutenção e reparo dos veículos de meus clientes.
Como proprietário de loja de autopeças, eu quero ter acesso a uma plataforma que me permita divulgar meu estoque para clientes em potencial, para que eu possa aumentar minhas vendas e minha visibilidade no mercado.
Como uma loja, eu quero poder cadastrar novos produtos manualmente ou através da importação de uma planilha Excel, para que eu possa gerenciar meu estoque de forma eficiente.

- Como proprietário de loja de autopeças, eu quero poder atualizar ou excluir produtos existentes, para que eu possa manter meu estoque atualizado e oferecer aos usuários produtos disponíveis em estoque.
Como proprietário de loja de autopeças, eu quero poder ver os produtos disponíveis em estoque em tempo real, para que eu possa oferecer aos usuários informações precisas e atualizadas sobre os produtos que estou vendendo.

- Como proprietário de loja de autopeças, eu quero poder receber notificações de reservas de produtos, para que eu possa preparar os produtos para o cliente e evitar atrasos ou problemas de estoque.
Como proprietário de loja de autopeças, eu quero poder ver um histórico dos produtos reservados, para que eu possa controlar o fluxo de vendas e o estoque da minha loja.

### Comprador:
- Como um comprador, eu quero poder buscar produtos facilmente, utilizando diferentes filtros e opções de pesquisa, para que eu possa encontrar rapidamente o produto que estou procurando.

- Como um comprador de peças de reposição, eu quero ter acesso a informações precisas e atualizadas sobre a disponibilidade de peças, preços e marcas, para que eu possa tomar uma decisão de compra informada e confiável.

- Como um comprador, eu quero poder reservar produtos facilmente, com apenas alguns cliques, para que eu possa garantir que o produto estará disponível quando eu for buscá-lo.

- Como um comprador, eu quero poder ver um histórico das minhas reservas anteriores, para que eu possa controlar minhas compras e planejar minhas atividades futuras com base na disponibilidade dos produtos.

- Como um entusiasta de carros, eu quero poder encontrar peças de reposição personalizadas para o meu veículo, para que eu possa melhorar seu desempenho e aparência de acordo com minha preferência pessoal

## Requisitos

### Requisitos Funcionais

| ID | Descrição | Prioridade | Responsável |
| :---         |     :---      |          :--- | :---   |
| RF-001 | Cadastro de Usuário | Alta   |  |
| RF-002 | Login       | Media     |  |
| RF-003 | Cadastro de produto único e importação de excel | Alta |  |
| RF-004 | Atualizar produto único e a importação de excel | Alta |  |
| RF-005 | Deletar Produto | Alta |  |
| RF-006 | Mostrar Produtos disponíveis em estoque | Alta |  |
| RF-007 | Exibir produtos reservados | Baixa |  |
| RF-008 | Notificação indicando se o produto foi reservado | Baixa |  |
| RF-009 | Histórico de produtos reservados | Baixa |  |
| RF-010 | Buscar produtos | Alta |  |
| RF-011 | Reservar produtos | Alta |  |
| RF-012 | Histórico de reservas | Media |  |
| RF-013 | Tipos de Acesso | Media |  |

### Requisitos não Funcionais

| ID | Descrição | Prioridade | 
| :---         |     :---      |          :--- |
| RNF-001 | A aplicação deve ser responsiva e se adaptar a diferentes dispositivos e tamanhos de tela | Média   |
| RNF-002 |A aplicação deve ser segura, com mecanismos de autenticação e autorização para garantir a privacidade dos dados dos usuários | Alta     |
| RNF-003 | A aplicação deve ser de fácil utilização e possuir uma interface intuitiva e amigável ao usuário | Alta |
| RNF-004 | A aplicação deve ser escalável e suportar um grande número de usuários simultâneos sem comprometer a performance | Alta |
| RNF-005 | A aplicação deve ter um tempo de resposta rápido, para que os usuários não tenham que esperar muito tempo para realizar suas ações | Alta |
| RNF-006 | A aplicação deve ser compatível com diferentes navegadores e sistemas operacionais | Média |
| RNF-007 | A aplicação deve ser modular e fácil de ser mantida e atualizada | Média |
| RNF-008 | A aplicação deve estar disponível 24 horas por dia, 7 dias por semana | Alta |
| RNF-009 | A aplicação deve ser integrável com outros sistemas utilizados pelos usuários, como sistemas de pagamento e de gestão de estoque.(futuro) | Média |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O sistema deve utilizar CRUD Json-server para a persistência de dados |
|04| O tempo de resposta do sistema deve ser de no máximo 2 segundos |
|05| O sistema deve ser capaz de lidar com um grande volume de acessos simultâneos |
|06| O sistema deve garantir a segurança das informações dos usuários, incluindo dados de login e informações de pagamento, utilizando criptografia |
|07| O sistema deve estar em conformidade com as leis e regulamentações locais, estaduais e federais |
|08| O sistema deve ser testado e validado regularmente para garantir a qualidade e a confiabilidade |
|09| O sistema deve ter backups regulares para garantir a disponibilidade dos dados e informações em caso de falhas ou interrupções |
