# Lion School

Atividade Front-End desenvolvida no Senai, usando uma API disponibilizada pelo professor, permitindo visualizar cursos, listar alunos e consultar o desempenho individual de cada estudante.

## Sobre o projeto

A aplicação apresenta uma interface dinâmica desenvolvida com **HTML**, **CSS** e **JavaScript (ES Modules)**, consumindo dados de uma API REST.

O design da atividade foi feito de acordo com o protótipo do figma

**Link do Figma:** [Clique aqui](https://www.figma.com/design/NMubBoEN2tDIfWsTO1EJN9/Lion-School--SENAI?node-id=0-1&m=dev&t=1dDophGwDQd9QAcL-1)

O sistema permite:

- Visualizar os cursos disponíveis;
- Selecionar um curso;
- Listar os alunos do curso escolhido;
- Filtrar alunos por status (Cursando ou Finalizado);
- Visualizar os dados individuais de cada aluno;
- Exibir um gráfico de desempenho por disciplina.

## Estrutura do projeto

```
Lion School/
│
├── css/
│   ├── reset.css
│   └── style.css
│
├── img/
│
├── js/
│   ├── main.js
│   ├── pages/
│   │   ├── home.js
│   │   ├── turma.js
│   │   └── aluno.js
│   │
│   └── router/
│       ├── curso.js
│       └── aluno.js
│
├── index.html
└── README.md
```

---

## Funcionalidades

### Página inicial

- Lista todos os cursos disponíveis na API.
- Cada curso é exibido em um botão.
- Ao selecionar um curso, o usuário é direcionado para a tela de alunos.

### Página da turma

- Exibe todos os alunos do curso selecionado.
- Permite filtrar os alunos por:
  - Todos
  - Cursando
  - Finalizado
- Cada aluno pode ser selecionado para visualizar seus detalhes.

### Página do aluno

Apresenta:

- Foto
- Nome
- Curso
- Desempenho por disciplina
- Gráfico em barras indicando a nota em cada matéria

---

## API utilizada

Endpoints:

```
https://lion-school-phbo.onrender.com/
```

Cursos:

```
https://lion-school-phbo.onrender.com/cursos
```

Alunos:

```
https://lion-school-phbo.onrender.com/alunos
```

Exemplos de consultas:

Buscar cursos:

```
GET /cursos
```

Buscar curso por ID:

```
GET /cursos/:id
```

Buscar alunos:

```
GET /alunos
```

Buscar aluno por ID:

```
GET /alunos/:id
```

Buscar alunos de um curso:

```
GET /alunos?curso_id=id
```

Buscar alunos por status:

```
GET /alunos?status=cursando
```

---