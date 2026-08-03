'use strict'

import { criarHome } from './pages/home.js'
import { criarTurma } from './pages/turma.js'
import { criarAluno } from './pages/aluno.js'

const paginas = {
    home: {
        titulo: 'Lion School',
        classMain: 'main-home',
        renderizar: criarHome
    },
    turma: {
        titulo: 'Alunos do curso',
        classMain: 'main-turma',
        renderizar: criarTurma
    },
    aluno: {
        titulo: 'Dados do aluno',
        classMain: 'main-aluno',
        renderizar: criarAluno
    }
}

export async function renderizarPagina(nomePagina, id = null) {
    const main = document.getElementById('main')

    // animação de saída
    main.classList.add('fade-out')

    setTimeout(async function() {
        const paginaAtual = paginas[nomePagina]

        document.title = paginaAtual.titulo

        const pagina = await paginaAtual.renderizar(id)

        main.className = paginaAtual.classMain
        main.replaceChildren(pagina)

        // animação de entrada
        main.classList.remove('fade-out')
        main.classList.add('fade-in')

        setTimeout(() => main.classList.remove('fade-in'), 300)

    }, 300)
}

renderizarPagina('home')