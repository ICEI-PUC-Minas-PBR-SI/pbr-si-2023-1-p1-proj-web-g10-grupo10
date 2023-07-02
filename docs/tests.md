# 1.0 Teste - Tela Login/Cadastro
## 1.1 Plano de Testes de Software

**Caso de Teste** | **CT01 - Login / Cadastro parte 1**
 :--------------: | ------------
**Procedimento**  | 1- Usuário informa e-mail e senha e clica no botão Criar. 2- A aplicação verifica se os dados são válidos. 3- A aplicação armazena os dados e direciona o usuário para o formulário de cadastro.
**Requisitos associados** | RF-001
**Resultado esperado** | Criação de cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.




**Caso de Teste** | **CT01 - Login / Cadastro parte 2**
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

# 2.0 Teste - Tela Login/Cadastro
## 2.1 Plano de Testes de Software

**Caso de Teste** | **CT01 - Reserva de produto**
 :--------------: | ------------
**Procedimento**  | 1- Usuário cliente seleciona o produto e a quantidade que deseja reservar 2- A aplicação realiza a reserva do produto selecionado.
**Requisitos associados** | RF-011
**Resultado esperado** | Reserva.
**Dados de entrada** | Informar o produto e quantidade que deseja ser reservado.
**Resultado obtido** | Sucesso.



## 2.2 Registro dos Testes de Software


|*Caso de Teste*                                 |*TC-01 - Reservar um produto*                                         |
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



