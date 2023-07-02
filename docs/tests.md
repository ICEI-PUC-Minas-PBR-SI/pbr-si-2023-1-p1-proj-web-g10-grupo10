# 1.0 Teste - Tela Login/Cadastro
## 1.1 Plano de Testes de Software

**Caso de Teste** | **CT01 - Login / Cadastro parte 1**
 :--------------: | ------------
**Procedimento**  | 1- Usuário informa e-mail e senha e clica no botão Criar. 2- A aplicação verifica se os dados são válidos. 3- A aplicação armazena os dados e direciona o usuário para o formulário de cadastro.
**Requisitos associados** | RF-001
**Resultado esperado** | Criação de cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.




**Caso de Teste** | **CT02 - Login / Cadastro parte 2**
 :--------------: | ------------
**Procedimento**  | 1- Usuário informa e-mail e senha cadastrados e clica no botão entrar. 2- A aplicação valida os dados informados.
**Requisitos associados** | RF-002
**Resultado esperado** | Prosseguir para a tela de início de acordo com a modalidade do usuário.
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.


## 1.2 Registro dos Testes de Software


|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-001 - Usuário cria uma conta para logar na plataforma.|
|Link do vídeo do teste realizado: | | 

|*Caso de Teste*                                 |*TC-02 - TC-01 - Efetuar login*                                         |
|---|---|
|Requisito Associado | RF-002 - Usuário com conta existente loga no sistema.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/13LzX5DkcwsgaR1zKEmnbNmvCrUCXndgr/view?usp=drive_link | 


## 1.3 Testes de Usabilidade

Elaboramos dois cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.
Foram convidadas duas pessoas que os perfis se encaixam nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:
- Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;
- Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:
           1 - Péssimo;
           2 - Ruim;
           3 - Regular;
           4 - Bom;
           5 - Ótimo.
- Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.
Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


## 1.4 Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Usuário loja, dono de uma autopeças e deseja criar um cadastro na plataforma da Auto Book para aumentar minhas vendas. |
| 2             | Usuário cliente que já possui cadastro na plataforma deseja logar para navegar no site. |


## 1.5 Registro de Testes de Usabilidade

Cenário 1: Usuário loja, dono de uma autopeças e deseja criar um cadastro na plataforma da Auto Book para aumentar minhas vendas.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | 50%             | 3                    | 25 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | NÃO | 3 | 30 segundos |


    Comentários dos usuários: O processo é bem claro e objetivo mas não funciona em sua totalidade, precisa de ajustes e correções.




Cenário 2: Usuário cliente que já possui cadastro na plataforma deseja logar para navegação.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 2       | 100%            | 5                    | 15 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15 segundos |


    Comentários dos usuários: O processo de logar é simples e rápido. .





## 1.6 Avaliação dos Testes de Usabilidade

Foram realizadas duas rotinas, a primeira referente ao cadastro de uma Autopeças, o processo foi desenhado para ser simples e objetivo, com isso, o resultado obtido foi satisfatório, porém, foi constatado que o usuário no momento do cadastro consegue selecionar duas opções (cliente e autopeças), isto não deve ocorrer pois cada acesso tem suas determinadas funcionalidades liberada, apenas uma opção poderá ser selecionada. Para a próxima entrega, este erro deverá estar sanado, verificaremos os códigos e qual a melhor forma de resolver este problema que aparentemente é simples.

# 2.0 Teste - Tela Reserva de produto
## 2.1 Plano de Testes de Software

**Caso de Teste** | **CT03 - Reserva de produto**
 :--------------: | ------------
**Procedimento**  | 1- Usuário cliente seleciona o produto e a quantidade que deseja reservar 2- A aplicação realiza a reserva do produto selecionado.
**Requisitos associados** | RF-011
**Resultado esperado** | Reserva.
**Dados de entrada** | Informar o produto e quantidade que deseja ser reservado.
**Resultado obtido** | Sucesso.



## 2.2 Registro dos Testes de Software


|*Caso de Teste*                                 |*TC-03 - Reservar um produto*                                         |
|---|---|
|Requisito Associado | RF-011 - Usuário cliente seleciona o produto e a quantidade que deseja reservar.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1EJQiGjT7wgRmPyAzSiKvkaB3hbuUVt50/view?usp=sharing | 


## 2.3 Testes de Usabilidade

Elaboramos um cenário baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.
Foi convidada uma pessoa que o perfil se encaixa nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:
- Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;
- Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:
           1 - Péssimo;
           2 - Ruim;
           3 - Regular;
           4 - Bom;
           5 - Ótimo.
- Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.
Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


## 2.4 Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Usuário precisa comprar uma peça para seu veículo que apresenta falha, ele entra na plataforma e encontra o que precisa, seleciona a peça e quantidade. |


## 2.5 Registro de Testes de Usabilidade

Cenário 1: Usuário precisa comprar uma peça para seu veículo que apresenta falha, ele entra na plataforma e encontra o que precisa, seleciona a peça e quantidade.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | 80%             | 4                    | 20 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 7,85 segundos |


    Comentários dos usuários: O site é de fácil manuseio no entanto, no final do processo, achei um pouco de dificuldade para saber se meu processo foi concluído, verificando esta informação, 
acredito que fica muito bom.



## 2.6 Avaliação dos Testes de Usabilidade

Foi simulado uma reserva feita por um cliente que precisa de uma peça específica, o sistema seguiu corretamente todo o processo, no entanto, constatamos que seria necessário uma notificação informando que o processo foi finalizado. 
Em alinhamento com o grupo, trabalharemos em cima desta notificação para a próxima entrega visto que isso trará mais clareza ao cliente de que sua peça de fato se encontra reserva e disponível para retirada na loja escolhida.



# 3.0 Teste - Tela Busca de produto
## 3.1 Plano de Testes de Software

**Caso de Teste** | **CT04 - Reserva de produto**
 :--------------: | ------------
**Procedimento**  | 1- Usuário cliente busca por uma determinada peça 2- A aplicação retorna com a peça informada.
**Requisitos associados** | RF-010
**Resultado esperado** | Retornar com o produto buscado.
**Dados de entrada** | Buscar produto.
**Resultado obtido** | Sucesso.



## 3.2 Registro dos Testes de Software


|*Caso de Teste*                                 |*TC-04 - Busca produto*                                         |
|---|---|
|Requisito Associado | RF-010 - Usuário cliente busca por uma determinada peça.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1Y52xtNoXjyl1Im6FY_PGGsLHmrf7s2bo/view?usp=sharing | 


## 3.3 Testes de Usabilidade

Elaboramos um cenário baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.
Foi convidada uma pessoa que o perfil se encaixa nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:
- Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;
- Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:
           1 - Péssimo;
           2 - Ruim;
           3 - Regular;
           4 - Bom;
           5 - Ótimo.
- Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.
Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


## 3.4 Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Usuário precisa comprar uma determinada peça para seu veículo que apresenta falha, ele entra na plataforma e busca pela peça que precisa. |


## 3.5 Registro de Testes de Usabilidade

Cenário 1: Usuário precisa comprar uma determinada peça para seu veículo que apresenta falha, ele entra na plataforma e busca pela peça que precisa.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | 100%             | 5                    | 1,25 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 7,85 segundos |


    Comentários dos usuários: Achei o site intuitivo e de fácil acesso, as imagens deixam a experiência mais assertiva, poder comparar preço é algo que considero muito importante no momento da compra. 




## 3.6 Avaliação dos Testes de Usabilidade

Foi simulado uma reserva feita por um cliente que precisa de uma peça específica, o sistema seguiu corretamente todo o processo, no entanto, constatamos que seria necessário uma notificação informando que o processo foi finalizado. 
Em alinhamento com o grupo, trabalharemos em cima desta notificação para a próxima entrega visto que isso trará mais clareza ao cliente de que sua peça de fato se encontra reserva e disponível para retirada na loja escolhida




# 4.0 Teste - Tela de Métricas Loja
## 4.1 Plano de Testes de Software

**Caso de Teste** | **CT05 - Tela de Métricas**
 :--------------: | ------------
**Procedimento**  | 1- A aplicação verifica se o usuário corresponde a uma loja 2- A aplicação puxa do banco os dados de todas as reservas realizadas em cada mês. 3- A aplicação armazena os dados e direciona para o preenchimento do gráfico. 4- Checar no json atual quantos são os pedidos cujo status corresponde à concluído, pois só serão puxados os pedidos já concluídos ao gráfico 5- Checar no gráfico se corresponde ao número checado 
**Requisitos associados** | RF-009
**Resultado esperado** | Gráfico preenchido com os dados das reservas.
**Dados de entrada** | Reserva realizada.
**Resultado obtido** | Sucesso.



## 4.2 Registro dos Testes de Software


|*Caso de Teste*                                 |*TC-05 - Busca produto*                                         |
|---|---|
|Requisito Associado | RF-009 - Histórico de produtos reservados.|
|Link do vídeo do teste realizado: | [https://drive.google.com/file/d/1Y52xtNoXjyl1Im6FY_PGGsLHmrf7s2bo/view?usp=sharing](https://drive.google.com/file/d/1El0RB5KUKH-cy02a543UKYtUJnil3MCj/view?usp=sharing) | 


## 4.3 Testes de Usabilidade

Foi elaborado um teste de usabilidade para tela de métricas, onde é verificado no banco de dados a quantidade de reservas concluídas armazenadas no json, e logo após isso é verificado na tela se a mesma corresponde ao total desses números.
No teste foi utilizado os dados da lojaId 2 para puxar os dados e o status de pedido 1 para pedidos concluídos


## 4.4 Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | O gráfico deve puxar corretamente as informações colocadas dentro do Json.. |


## 4.5 Registro de Testes de Usabilidade

Cenário 1: O gráfico deve puxar corretamente as informações colocadas dentro do Json..

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | 100%             | 5                    | 25 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 25 segundos |



## 4.6 Avaliação dos Testes de Usabilidade

Foi verificado no json, previamente criado para testes, se o gráfico de métrica da loja puxava os dados de reservas do mesmo.
Validado e os dados puxam corretamente para a tela, preenchendo corretamente o gráfico.



# 5 Teste - Sistema de Notificações
## 5.1 Plano de Testes de Software

**Caso de Teste** | **CT06 - Sistema de Notificações**
 :--------------: | ------------
**Procedimento**  | 1. Após o cliente fazer a reserva de um produto e o vencimento estiver próximo, o cliente será notificado no site. 2. A loja será notificada a cada reserva feita no site.
**Requisitos associados** | RF-008
**Resultado esperado** | Os usuários estão sendo notificados corretamente.
**Dados de entrada** | Notificação realizada.
**Resultado obtido** | Sucesso.



## 5.2 Registro dos Testes de Software


|*Caso de Teste*                                 |*TC-06 - Sistema de Notificações*                                         |
|---|---|
|Requisito Associado | RF-008 - Notificação indicando que o produto foi reservado.|
|Link do vídeo do teste realizado: |  | 


## 5.3 Testes de Usabilidade

Elaboramos um cenário baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.
Foi convidada uma pessoa que o perfil se encaixa nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:
- Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;
- Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:
           1 - Péssimo;
           2 - Ruim;
           3 - Regular;
           4 - Bom;
           5 - Ótimo.
- Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.
Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


## 5.4 Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | O cliente vê que o tempo da reserva já está se esgotando e consegue se organizar. |


## 5.5 Registro de Testes de Usabilidade

Cenário 1: Usuário precisa comprar uma determinada peça para seu veículo que apresenta falha, ele entra na plataforma e busca pela peça que precisa.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | 100%             | 4                    | 30 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 30 segundos |



## 5.6 Avaliação dos Testes de Usabilidade

As notificações foram feitas com êxito no momento esperado.



# 6 Teste - Tela de Gestão de Produtos
## 6.1 Plano de Testes de Software

**Caso de Teste** | **CT01 - Cadastro de Produtos**
 :--------------: | ------------
**Procedimento**  | 1. Usuário fornece os dados referentes ao cadastro de Produto e clica em Salvar.
**Requisitos associados** | RF-003
**Resultado esperado** | Produto inserido no banco.
**Dados de entrada** | Dados de Cadastro do Produto.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT02 - Edição de Produtos**
 :--------------: | ------------
**Procedimento**  | 1. Preencher o formulário com os dados que deseja editar e clicar em Salvar.
**Requisitos associados** | RF-004
**Resultado esperado** | Informações do produto atualizadas.
**Dados de entrada** | Dados que deseja atualizar.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 -  Deleção de Produtos**
 :--------------: | ------------
**Procedimento**  | 1. Escolher o produto que se deseja deletar e clicar em confirmar.
**Requisitos associados** | RF-005
**Resultado esperado** | Produto deletado do banco.
**Dados de entrada** | Sem entradas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Detalhes de Produtos**
 :--------------: | ------------
**Procedimento**  | 1. Escolher o produto que se deseja ver os detalhes.
**Requisitos associados** | RF-007
**Resultado esperado** | Abertura de um Modal com detalhes do produto.
**Dados de entrada** | Sem entrada.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Importar Excel**
 :--------------: | ------------
**Procedimento**  | 1. Escolher o arquivo que se deseja importar e submeter o mesmo a um formulário e clicar em salvar.
**Requisitos associados** | RF-003
**Resultado esperado** | Todos os produtos presentes no excel serão cadastrados.
**Dados de entrada** | Arquivo Excel.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Exibir Produtos em Estoque**
 :--------------: | ------------
**Procedimento**  | 1. Ao acessar a página de produtos ela será carregada.
**Requisitos associados** | RF-006
**Resultado esperado** | Produtos sendo exibidos em tabela.
**Dados de entrada** | Sem entrada.
**Resultado obtido** | Sucesso.


## 6.2 Registro dos Testes de Software


|*Caso de Teste*                                 |*TC-01 - Cadastro de Produtos*                                         |
|---|---|
|Requisito Associado | RF-003 - Cadastro de produto único e importação de excel.|
|Link do vídeo do teste realizado: |  | 


|*Caso de Teste*                                 |*TC-02 - Edição de Produtos*                                         |
|---|---|
|Requisito Associado | RF-004 - Atualizar produto.|
|Link do vídeo do teste realizado: |  | 


|*Caso de Teste*                                 |*TC-03 - Deleção de Produtos*                                         |
|---|---|
|Requisito Associado | RF-005 - Deletar Produto.|
|Link do vídeo do teste realizado: |  | 


|*Caso de Teste*                                 |*TC-04 - Detalhes de Produtos*                                         |
|---|---|
|Requisito Associado | RF-007 - Exibir detalhamento dos produtos.|
|Link do vídeo do teste realizado: |  | 


|*Caso de Teste*                                 |*TC-05 -  Importar Excel*                                         |
|---|---|
|Requisito Associado | RF-003 - Cadastro de produto único e importação de excel.|
|Link do vídeo do teste realizado: |  | 


|*Caso de Teste*                                 |*TC-06 - Exibir Produtos em Estoque*                                         |
|---|---|
|Requisito Associado | RF-006 - Exibir produtos em Estoque.|
|Link do vídeo do teste realizado: |  | 


## 6.3 Testes de Usabilidade

Elaboramos um cenário baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.
Foi convidada uma pessoa que o perfil se encaixa nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:
- Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;
- Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:
           1 - Péssimo;
           2 - Ruim;
           3 - Regular;
           4 - Bom;
           5 - Ótimo.
- Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.
Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


## 6.4 Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Usuário loja, dono de uma autopeças e deseja cadastrar um novo produto. |
| 2             | Usuário loja, dono de uma autopeças e deseja cadastrar todos os produtos que possui. |
| 3             | Usuário loja, dono de uma autopeças e deseja deletar um produto. |
| 4             | Usuário loja, dono de uma autopeças e deseja ver os detalhes de um produto. |
| 5             | Usuário loja, dono de uma autopeças e deseja editar as informações de um produto. |
| 6             | Usuário loja, dono de uma autopeças e deseja ver todos os produtos em estoque. |


## 6.5 Registro de Testes de Usabilidade

Cenário 1:  Usuário loja, dono de uma autopeças e deseja cadastrar um novo produto.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | 100%             | 5                    | 20 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15 segundos |


Cenário 2: Usuário loja,  dono de uma autopeças e deseja cadastrar todos os produtos que possui.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | 100%             | 5                    | 4 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | SIM |  | 3 segundos |

Observação: o tempo de conclusão desse cenário varia com o tamanho do arquivo excel submetido ao teste


Cenário 3: Usuário loja,  dono de uma autopeças e deseja deletar um produto.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | 100%             | 5                    | 2 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 2 segundos |


Cenário 4: Usuário loja,  dono de uma autopeças e deseja ver os detalhes de um produto.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | 100%             | 5                    | 3 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 2 segundos |


Cenário 5: Usuário loja,  dono de uma autopeças e deseja editar as informações de um produto.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | 100%             | 5                    | 15 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 10 segundos |


Cenário 6: Usuário loja,  dono de uma autopeças e deseja ver todos os produtos em estoque.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | 100%             | 5                    | 2 segundos                     |                          |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 2 segundos |


## 6.6 Avaliação dos Testes de Usabilidade

Foram elaborados testes em cima do processo de Crud de produtos o sistema respondeu da maneira esperada, de modo que todos os teste tiveram êxito, entretanto foi observado que no caso da funcionalidade de importação de Excel, por mais que não houve comentários por parte de um usuário, vimos como melhoria adicionar uma tela de carregamento para que não haja dúvidas se o processo está rodando ou não.
