'use strict'

import { renderizarPagina } from "../main.js"
import { getAluno } from "../router/aluno.js"
import { getCurso } from "../router/curso.js"

export async function criarAluno(idAluno) {
    const aluno = await getAluno(idAluno)

    const botaoVoltar = document.getElementById('voltar')
    const textoVoltar = document.getElementById('data')
    textoVoltar.textContent = 'Voltar'

    const curso = await getCurso(aluno.curso_id)

    botaoVoltar.onclick = () => {
        renderizarPagina('turma', curso)
    }

    const main = document.createElement('div')
    main.classList.add('main-aluno')

    const heroAluno = document.createElement('div')
    heroAluno.classList.add('hero-aluno')

    const caixaAluno = document.createElement('div')
    caixaAluno.classList.add('caixa', 'aluno')

    const imgAluno = document.createElement('img')
    imgAluno.src = aluno.foto
    imgAluno.alt = aluno.nome

    const spanAluno = document.createElement('span')
    spanAluno.textContent = aluno.nome

    caixaAluno.append(imgAluno, spanAluno)
    
    const caixaGrafico = document.createElement('div')
    caixaGrafico.classList.add('caixa', 'grafico')

    aluno.desempenho.forEach(function (desempenhoAl) {

        const columns = document.createElement('div')
        columns.classList.add('columns')

        const notaColumn = document.createElement('span')
        notaColumn.classList.add('nota')
        notaColumn.textContent = desempenhoAl.valor

        const column = document.createElement('div')
        column.classList.add('column')

        const valor = document.createElement('div')
        if (desempenhoAl.valor >= 75) {
            valor.classList.add('valor', 'aprovado')
        } else if (desempenhoAl.valor >= 50) {
            valor.classList.add('valor', 'recuperacao')
        } else {
            valor.classList.add('valor', 'reprovado')
        }
        valor.style.height = `${desempenhoAl.valor}%`

        const disciplina = document.createElement('span')
        disciplina.classList.add('sigla')
        disciplina.textContent = desempenhoAl.categoria

        column.append(valor)
        columns.append(notaColumn, column, disciplina)
        caixaGrafico.append(columns)
    })

    heroAluno.append(caixaAluno, caixaGrafico)
    main.append(heroAluno)

    return main
}