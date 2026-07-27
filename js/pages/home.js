'use strict'

import { renderizarPagina } from "../main.js"
import { getCursos, getCurso } from "../router/curso.js"

export function criarHome() {
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

    const imgButtonDS = document.createElement('img')
    imgButtonDS.src = '../../img/logo-DS.png'
    imgButtonDS.alt = 'Logo Desenvolvimento de Sistemas'

    const spanButtonDS = document.createElement('span')
    spanButtonDS.textContent = 'DS'

    buttonDS.append(imgButtonDS, spanButtonDS)

    const buttonRedes = document.createElement('button')
    buttonRedes.classList.add('redes')

    const imgButtonRDS = document.createElement('img')
    imgButtonRDS.src = '../../img/logo-DS.png'
    imgButtonRDS.alt = 'Logo Redes'

    const spanButtonRDS = document.createElement('span')
    spanButtonRDS.textContent = 'REDES'

    buttonRedes.append(imgButtonRDS, spanButtonRDS)

    heroRight.append(buttonDS, buttonRedes)

    hero.append(heroLeft, heroCenter, heroRight)

    return hero
}