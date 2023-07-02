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


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Usuário loja, dono de uma autopeças e deseja criar um cadastro na plataforma da Auto Book para aumentar minhas vendas. |
| 2             | Usuário cliente que já possui cadastro na plataforma deseja logar para navegar no site. |


## Registro de Testes de Usabilidade

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





## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



