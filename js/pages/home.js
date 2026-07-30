'use strict'

import { renderizarPagina } from "../main.js"
import { getCursos, getCurso } from "../router/curso.js"

export async function criarHome() {
    const hero = document.createElement('div')
    hero.classList.add('hero')

    const heroLeft = document.createElement('div')
    heroLeft.classList.add('hero-left')
    
    const textHeroLeft = document.createElement('p')
    textHeroLeft.innerHTML = 'Escolha um <span>curso</span> para gerenciar'

    const imgHeroLeft = document.createElement('img')
    imgHeroLeft.src = '../../img/devices.png'
    imgHeroLeft.alt = 'Dispositivos (celular, tablet e computador)'

    heroLeft.append(textHeroLeft, imgHeroLeft)

    const heroCenter = document.createElement('div')
    heroCenter.classList.add('hero-center')

    const imgHeroCenter = document.createElement('img')
    imgHeroCenter.src = '../../img/studant.png'
    imgHeroCenter.alt = 'Estudante'

    heroCenter.append(imgHeroCenter)
    
    const heroRight = document.createElement('div')
    heroRight.classList.add('hero-right')

    const buttonDS = document.createElement('button')
    buttonDS.classList.add('btn-ds')
    
    let cursos = await getCursos()
    cursos.forEach(function (curso) {
        const button = document.createElement('button')
        button.classList.add('botoes')
        button.id = 'botoes'
        button.onclick = () => renderizarPagina('turma', curso)

        const iconCurso = document.createElement('img')
        iconCurso.classList.add('icon-curso')
        iconCurso.src = curso.icon
        iconCurso.alt = `Ícone do curso de ${curso.nome}`

        const spanCurso = document.createElement('span')
        spanCurso.textContent = curso.sigla

        button.append(iconCurso, spanCurso)
        heroRight.appendChild(button)
    })

    hero.append(heroLeft, heroCenter, heroRight)

    return hero
}