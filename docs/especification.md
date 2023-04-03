# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

### Usuário da Loja:
- Gerente de loja de autopeças. João, 45 anos, com formação em administração de empresas. Trabalha na loja de autopeças há 10 anos e é responsável pelo estoque e pela gestão de compras. Ele precisa acessar o sistema para cadastrar e atualizar produtos, gerenciar o estoque, exibir produtos disponíveis e verificar o histórico de produtos reservados.

### Administrador do Sistema:
- Fábio, programador e desenvolvedor de sistemas, 39 anos, formado em Sistemas da Informação. Ele é responsável por desenvolver e manter o sistema Auto Book, garantindo que os usuários tenham uma experiência fácil e intuitiva ao usar a plataforma. Ela precisa monitorar e atualizar o sistema regularmente, além de estar disponível para responder às solicitações dos usuários em caso de problemas técnicos.

### Comprador: 
- Motorista de aplicativo. Mario, 30 anos, com formação em engenharia. Ele usa seu carro para trabalhar como motorista de aplicativo e precisa encontrar rapidamente as peças de reposição necessárias para manter seu veículo em bom estado. Ele precisa acessar o sistema para buscar produtos, reservar produtos e verificar o histórico de reservas.

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

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


> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

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

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
