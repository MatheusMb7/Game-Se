Game-Se é uma API REST desenvolvida em Node.js para gerenciar uma biblioteca de jogos, campeonatos e interações dos usuários.
O projeto foi criado como parte de um trabalho acadêmico visando consolidar conhecimentos em:

CRUD completo
API REST
Rotas e métodos HTTP
Middlewares
MongoDB + Mongoose
Versionamento com Git/GitHub
Documentação e boas práticas em Node.js

Estrutura do projeto:
Game-Se
    >docs
        modelagem
    >node_modules
    >src
        >controllers
        >models
        >validators
    .env
    .env.example
    .gitignore
    package-lock.json
    packase.json
    README.md


Tecnologias Utilizadas:
Node.js
Express
MongoDB Atlas
Mongoose
Yup (validações)
dotenv
Nodemon
JavaScript
Postman (testes)
Git/GitHub (versionamento)
dbdiagram.io(diagrama)


Passos:

Clone o repositório: git clone https://github.com/MatheusMb7/Game-Se.git 
cd Game-Se

Instale as dependências: npm install express mongoose dotenv yup nodemon

Inicie o servidor: npm start


A API estará disponível em: http://localhost:3000 Endpoints Disponíveis:

/usuarios Endpoint {
        "_id": "691a15556782487522efe94a",
        "nome": "Matheus Oliveira",
        "email": "matheus.oliveira@iesb.com",
        "senha": "Senha@123",
        "dataCadastro": "2025-01-10T00:00:00.000Z",
        "nickname": "Migão",
        "__v": 0
    },

/jogos Endpoint {
        "_id": "691a10da046a9b976e554322",
        "titulo": "Counter-Strike 2",
        "descricao": "FPS competitivo 5x5 focado em estratégia e precisão.",
        "dataLancamento": "2023-09-27T00:00:00.000Z",
        "genero": {
            "_id": "691a0b39645f2cea2dd80c03",
            "nome": "Aventura",
            "descricao": "Exploração de mundos, resolução de enigmas e experiências narrativas imersivas.",
            "__v": 0
        },
        "estudio": {
            "_id": "691a0cad645f2cea2dd80c38",
            "nome": "Valve Corporation",
            "pais": "Estados Unidos",
            "anoFundacao": 1996,
            "site": "https://www.valvesoftware.com",
            "__v": 0
        },
        "plataforma": {
            "_id": "691a084cfc9e9316150dc7ca",
            "nome": "PC (Windows)",
            "fabricante": "Microsoft",
            "anoFundacao": 1985,
            "site": "https://www.microsoft.com",
            "__v": 0
        },
        }

/plataformas Endpoint {
        "_id": "691a083afc9e9316150dc7c4",
        "nome": "PlayStation 5",
        "fabricante": "Sony",
        "anoFundacao": 2020,
        "site": "https://www.playstation.com",
        "__v": 0
    }


/generos Endpoint {
        "_id": "691a0b32645f2cea2dd80c01",
        "nome": "Ação",
        "descricao": "Jogos focados em reflexos rápidos, combates intensos e desafios de precisão.",
        "__v": 0
    }

/favoritos Endpoint {
        "_id": "691a2b7c4620f0edcf54e7e6",
        "dataAdicionado": "2024-01-05T00:00:00.000Z",
        "usuario": {
            "_id": "691a15556782487522efe94a",
            "nome": "Matheus Oliveira",
            "email": "matheus.oliveira@iesb.com",
            "senha": "Senha@123",
            "dataCadastro": "2025-01-10T00:00:00.000Z",
            "nickname": "Migão",
            "__v": 0
        },
        "jogo": {
            "_id": "691a10da046a9b976e554322",
            "titulo": "Counter-Strike 2",
            "descricao": "FPS competitivo 5x5 focado em estratégia e precisão.",
            "dataLancamento": "2023-09-27T00:00:00.000Z",
            "genero": "691a0b39645f2cea2dd80c03",
            "estudio": "691a0cad645f2cea2dd80c38",
            "plataforma": "691a084cfc9e9316150dc7ca",
            "__v": 0
        },
        "__v": 0
    }

/estudios Endpoint {
        "_id": "691a0bdf645f2cea2dd80c29",
        "nome": "Naughty Dog",
        "pais": "Estados Unidos",
        "anoFundacao": 1984,
        "site": "https://www.naughtydog.com",
        "__v": 0
    }

/conquistas Endpoint {
        "_id": "691a131d6782487522efe8de",
        "nome": "Primeira Abate",
        "descricao": "Elimine um inimigo pela primeira vez.",
        "pontos": 10,
        "jogo": {
            "_id": "691a10da046a9b976e554322",
            "titulo": "Counter-Strike 2",
            "descricao": "FPS competitivo 5x5 focado em estratégia e precisão.",
            "dataLancamento": "2023-09-27T00:00:00.000Z",
            "genero": "691a0b39645f2cea2dd80c03",
            "estudio": "691a0cad645f2cea2dd80c38",
            "plataforma": "691a084cfc9e9316150dc7ca",
            "__v": 0
        },
        "__v": 0
    }

/comentarios Endpoint:
{
        "_id": "691a18fe9357f32ac12b5788",
        "usuario": {
            "_id": "691a15556782487522efe94a",
            "nome": "Matheus Oliveira",
            "email": "matheus.oliveira@iesb.com",
            "senha": "Senha@123",
            "dataCadastro": "2025-01-10T00:00:00.000Z",
            "nickname": "Migão",
            "__v": 0
        },
        "texto": "Jogo incrível, combate muito fluido e visual impressionante!",
        "data": "2025-02-15T00:00:00.000Z",
        "jogo": null,
        "plataforma": "691a0841fc9e9316150dc7c6",
        "__v": 0
},

/campeonatos Endpoint:
{
        "_id": "691a2133eeab59bf43c986c2",
        "nome": "Campeonato Nacional de Counter-Strike 2",
        "descricao": "Torneio oficial entre equipes brasileiras de CS2.",
        "dataInicio": "2025-03-01T00:00:00.000Z",
        "dataFim": "2025-03-15T00:00:00.000Z",
        "usuario": {
            "_id": "691a15556782487522efe94a",
            "nome": "Matheus Oliveira",
            "email": "matheus.oliveira@iesb.com",
            "senha": "Senha@123",
            "dataCadastro": "2025-01-10T00:00:00.000Z",
            "nickname": "Migão",
            "__v": 0
        },
        "jogo": {
            "_id": "691a10da046a9b976e554322",
            "titulo": "Counter-Strike 2",
            "descricao": "FPS competitivo 5x5 focado em estratégia e precisão.",
            "dataLancamento": "2023-09-27T00:00:00.000Z",
            "genero": "691a0b39645f2cea2dd80c03",
            "estudio": "691a0cad645f2cea2dd80c38",
            "plataforma": "691a084cfc9e9316150dc7ca",
            "__v": 0
        },
        "__v": 0
    }

/avaliacoes Endpoint:
{
        "_id": "691a201cabc5557b75383edd",
        "jogo": {
            "_id": "691a10da046a9b976e554322",
            "titulo": "Counter-Strike 2",
            "descricao": "FPS competitivo 5x5 focado em estratégia e precisão.",
            "dataLancamento": "2023-09-27T00:00:00.000Z",
            "genero": "691a0b39645f2cea2dd80c03",
            "estudio": "691a0cad645f2cea2dd80c38",
            "plataforma": "691a084cfc9e9316150dc7ca",
            "__v": 0
        },
        "usuario": {
            "_id": "691a15556782487522efe94a",
            "nome": "Matheus Oliveira",
            "email": "matheus.oliveira@iesb.com",
            "senha": "Senha@123",
            "dataCadastro": "2025-01-10T00:00:00.000Z",
            "nickname": "Migão",
            "__v": 0
        },
        "nota": 5,
        "comentario": "CS2 mantém a essência competitiva com ótima fluidez. Jogo impecável!",
        "dataAvaliacao": "2025-02-01T00:00:00.000Z",
        "__v": 0
    }





Integrantes do Projeto Nome GitHub Contribuições: 
-Deyvison Brito @DeyvinDev Conquistas(Controller, Model, Validator)e Campeonatos(Controller, Model, Validator).
-Matheus Bruno @MatheusMb7 responsável pelo index.js, Jogos(Controller, Model, Validator), Plataformas(Controller, Model, Validator), Generos(Controller, Model, Validator), Estudios(Controller, Model, Validator),CRUDS do POSTMAN, atlas MongoDB, documentação README e correção .
-Fabricio Firmino @FirminoMp4 Usuarios(Controller, Model, Validator)e Favoritos(Controller, Model, Validator).
-Mateus Rodrigues @mrguimaraes35 Comentarios(Controller, Model, Validator)e Avaliacoes(Controller, Model, Validator).