'use strict'

import { renderizarPagina } from "../main.js"
import { getAlunoIdCurso } from "../router/aluno.js"

export async function criarTurma(curso) {
    const botaoVoltar = document.getElementById('voltar')
    const textoVoltar = document.getElementById('data')

    textoVoltar.textContent = 'Voltar'

    botaoVoltar.onclick = () => {
        textoVoltar.textContent = 'Sair'
        renderizarPagina('home')
    }

    const main = document.createElement('div')
    main.classList.add('main-turma')

    const headerStatus = document.createElement('div')
    headerStatus.classList.add('header-status')

    const statusLeft = document.createElement('div')
    statusLeft.classList.add('status-left')

    const select = document.createElement('select')
    select.name = 'status'
    select.id = 'status'

    const opcaoStatus = [
        {
            valor: 'todos',
            texto: 'Status'
        },
        {
            valor: 'cursando',
            texto: 'Cursando'
        },
        {
            valor: 'finalizado',
            texto: 'Finalizado'
        }
    ]

    opcaoStatus.forEach(function(item) {

        const option = document.createElement('option')
        option.value = item.valor
        option.textContent = item.texto

        select.append(option)
    })

    select.addEventListener('change', () => {
        const statusSelecionado = select.value

        const cards = containerCards.querySelectorAll('.card')

        cards.forEach(function (card) {
            if (statusSelecionado === 'todos') {
                card.style.display = 'flex'
            } else if (card.classList.contains(statusSelecionado)) {
                card.style.display = 'flex'
            } else {
                card.style.display = 'none'
            }
        })
    })

    statusLeft.append(select)

    const statusRight = document.createElement('div')
    statusRight.classList.add('status-right')

    const legendaTitulo = document.createElement('span')
    legendaTitulo.textContent = 'LEGENDA'

    const legendaCursando = document.createElement('div')
    legendaCursando.classList.add('cursando')

    const caixaAzul = document.createElement('div')
    caixaAzul.classList.add('box', 'azul')

    const spanAzul = document.createElement('span')
    spanAzul.textContent = 'Cursando'

    legendaCursando.append(caixaAzul, spanAzul)

    const legendaFinalizado = document.createElement('div')
    legendaFinalizado.classList.add('finalizado')

    const caixaAmarelo = document.createElement('div')
    caixaAmarelo.classList.add('box', 'amarelo')

    const spanAmarelo = document.createElement('span')
    spanAmarelo.textContent = 'Finalizado'

    legendaFinalizado.append(caixaAmarelo, spanAmarelo)

    statusRight.append(legendaTitulo, legendaCursando, legendaFinalizado)

    headerStatus.append(statusLeft, statusRight)

    main.appendChild(headerStatus)

    const alunos = await getAlunoIdCurso(curso.id)

    const heroAlunos = document.createElement('div')
    heroAlunos.classList.add('hero-alunos')

    const titulo = document.createElement('h1')
    titulo.textContent = curso.nome

    const containerCards = document.createElement('div')
    containerCards.classList.add('container')

    alunos.forEach(function(aluno) {
        const card = document.createElement('div')
        card.classList.add('card', aluno.status)

        const imagem = document.createElement('img')
        imagem.src = aluno.foto
        imagem.alt = aluno.nome

        const nome = document.createElement('span')
        nome.textContent = aluno.nome

        card.append(imagem, nome)

        card.onclick = () => renderizarPagina('aluno', aluno.id)

        containerCards.append(card)
    })

    heroAlunos.append(titulo, containerCards)

    main.append(heroAlunos)

    return main
}