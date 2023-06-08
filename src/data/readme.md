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
| Numero | varchar(7) | false | false |
| Complemento | varchar(100) | false | false |
| Telefone | varchar(11) | false | false |

### Notas

Tipo Usuario é um Enum logo cada inteiro possui um valor dentro do codigo

#### Tipo Usuario:
- Usuario: 0
- Loja: 1
- Adm: 2

## Tabela de Produtos

| Nome Coluna | Tipo | Primary key | Foreign key |
| :---  |     :---      |  :--- | :---   |
| Id | int | true   | false |
| UsuarioId | int  | false     | true |
| NomeDaPeca | varchar(250) | false | false |
| Carro | varchar(50) | false | false |
| Modelo | varchar(100) | false | false |
| Ano | date | false | false |
| Imagem | varchar(max) | false | false |
| Valor | money | false | false |
| QuantidadeDisponivel | int | false | false |

### Notas

UsuarioId é uma chave estrangeira que é utilizada para se relacionar com a tabela de usuário, estabelecendo uma relação 1:N ou seja 1 usuário pode ter N produtos.

Imagem armazena uma imagem codificada em Base64

## Tabela de Reservas

| Nome Coluna | Tipo | Primary key | Foreign key |
| :---  |     :---      |  :--- | :---   |
| Id | int | true   | false |
| UsuarioId | int  | false     | true |
| ProdutoId | int | false | true |
| LojaId | int | false | true |
| DataReserva | datetime | false | false |
| DataLimite | datetime | false | false |
| StatusPedido | int | false | false |
| Quantidade | int | false | false |
| Valor | money | false | false |
| Ativo | bit | false | false |

### Notas

UsuarioId é uma chave estrangeira que é utilizada para se relacionar com a tabela de usuário, estabelecendo uma relação 1:N ou seja 1 usuário pode ter N reservas.

LojaId é uma chave estrangeira que é utilizada para se relacionar com a tabela de usuário, estabelecendo uma relação 1:N ou seja 1 usuário(loja) pode ter N reservas.

ProdutoId é uma chave estrangeira que é utilizada para se relacionar com a tabela de produtos, estabelecendo uma relação 1:N ou seja 1 produto pode ter N reservas.

Status Pedido é um Enum logo cada inteiro possui um valor dentro do codigo

#### Status Pedido:
- Reservado: 0
- Concluído: 1
- Cancelado: 2