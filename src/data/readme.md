# Dados do sistema

Esta pasta contém os Json's que representam as tabelas do sistema

## Tabela de Usuarios

| Nome Coluna | Tipo | Primary key | Foreign key |
| :---  |     :---      |  :--- | :---   |
| Id | int | true   | false |
| Nome | varchar(100)  | false     | false |
| Email | varchar(250) | false | false |
| Senha | varchar(50) | false | false |
| Tipo Usuario | int | false | false |
| Cep | varchar(9) | false | false |
| Endereço | varchar(100) | false | false |
| UF | varchar(2) | false | false |
| Cidade | varchar(100) | false | false |
| Bairro | varchar(100) | false | false |
| Numero | varchar(7) | false |  |
| Complemento | varchar(100) | false | false |
| Telefone | varchar(11) | false | false |

### Notas

Tipo Usuario é um Enum logo cada inteiro possui um valor dentro do codigo

#### Tipo Usuario:
Usuario: 0
Loja: 1
Adm: 2