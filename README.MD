# Projeto Fórum com Arquitetura DDD e Clean Architecture

Este projeto tem como objetivo criar um fórum para exemplificar a construção de uma arquitetura robusta, utilizando os princípios de Domain Driven Design (DDD) e Clean Architecture. Abordaremos conceitos fundamentais como relacionamentos, Value Objects, casos de uso, testes unitários, aplicação de subdomínios e eventos de domínio. O desenvolvimento é realizado com o framework NestJS.

## Características Principais

- Domain Driven Design (DDD): Utiliza conceitos como entidades, agregados, relacionamentos, e objetos de valor para modelar o domínio do fórum de maneira clara e coesa.

- Clean Architecture: Adota uma arquitetura limpa, separando claramente as responsabilidades em camadas (entidades, casos de uso, adaptadores externos, etc.), facilitando a manutenção e evolução do sistema.

- Value Objects: Emprega objetos de valor para representar conceitos imutáveis e encapsulados, contribuindo para a expressividade do modelo de domínio.

- Casos de Uso: Define casos de uso específicos que representam as principais funcionalidades do fórum, promovendo uma abordagem centrada no usuário.

- Testes Unitários: Inclui testes unitários para garantir a integridade e funcionamento correto das diferentes partes do sistema.

- Subdomínios e Domain Events: Aplica a identificação de subdomínios e eventos de domínio para uma melhor compreensão e gerenciamento das diferentes áreas do fórum.

### 🔧 Instalação

Para começar será necessário instalar as bibliotecas contidas no package.json. Este projeto usa do NodeJS - v18 caso tente usar a v19 algumas libs vão apresentar problema.

Para o projeto em questão utilizamos de alguns requesitos externos, uma conta no CLOUDFLARE e criação de keys PRIVATE e PUBLIC em formato .pem .O metodo pode ser diferente dependendo do sistema operacional mas essas devem ser formadas e convertidas para base64 e depois inseridas como JWT no env.

É necessário a existência de ambos os arquivos .env e .env.test para para que os testes funcionem da maneira correta.

Com o docker e docker-compose instalados já em máquina use o comando abaixo para ter os bancos instalados em máquina:

```
docker-compose up -d
```

Use o comando abaixo para instalação das libs necessárias:

```
npm i
```

Com os bancos instalados utiliza o seguinte comando do prisma para criação de tabelas:


```
npx prisma migrate dev
```

Seguido deste para o Prisma Client:

```
npx prisma generate   
```

O .env.example já está seguindo com a url do prisma já configurada do arquivo docker-compose.yml. Caso modifique este para a geração do banco, modifique seu arquivo .env também.

Dentro do package.json estão listados os comandos principais da aplicação tanto para testes unitários e e2e, mas caso deseje iniciar a aplicação após o preenchimentos dos quesitos citados anteriomente, utilize o comando:

```
npm run start:dev
```

Ferramentas utilizadas

* [NodeJS](https://nodejs.org/) 
* [Typescript](https://www.typescriptlang.org/)
* [NestJS](https://nestjs.com/)
* [Vitest](https://vitest.dev/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [Redis](https://redis.io/)

## ✒️ Autores

* [Raphael Clemente Miranda](https://www.linkedin.com/in/raphaec484/)
* [rocketseat](https://www.rocketseat.com.br/)