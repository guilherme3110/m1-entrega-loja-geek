const listaItens = [
  {
    image: 'assets/img/painting/clock.jpg',
    name: 'clock',
    price: 10,
    type: 'quadro',
  },
  {
    image: 'assets/img/painting/gamepad.jpg',
    name: 'clock',
    price: 12,
    type: 'quadro',
  },
  {
    image: 'assets/img/painting/personagem.jpg',
    name: 'clock',
    price: 14,
    type: 'quadro',
  },
  {
    image: 'assets/img/actions/animewoman.jpg',
    name: 'animewoman',
    price: 20,
    type: 'acao',
  },
  {
    image: 'assets/img/actions/dragonballpersonagem.jpg',
    name: 'dragonball',
    price: 22,
    type: 'acao',
  },
  {
    image: 'assets/img/actions/starwarspersonagem.jpg',
    name: 'starwars',
    price: 24,
    type: 'acao',
  }
];

let listFigures = [];
let listFrames = [];

function separaItens(listaItens){
  for(let i = 0;i < listaItens.length; i++){
      if(listaItens[i].type == 'quadro' ) {
       listFrames.push(listaItens[i])
      }else if(listaItens[i].type == "acao"){
        listFigures.push(listaItens[i])
      }
  } 
  
}

separaItens(listaItens)

let secaoListPaintings = document.querySelector('.paintingsUl')
  for( let i = 0 ;i < listFrames.length; i ++){
    let liFrames = document.createElement('li')

    let boxItem = document.createElement('div')
    liFrames.appendChild(boxItem)

    let img = document.createElement('img')
    img.src = listFrames[i].image

    let titulo = document.createElement('h3')
    titulo.classList = 'color'
    titulo.innerHTML = `<strong>${listFrames[i].name} </strong>` 

    let p = document.createElement('p')
    p.classList = 'colorValor'
    p.innerText = `R$ ${listFrames[i].price},00`

    boxItem.appendChild(img)
    boxItem.appendChild(titulo)
    boxItem.appendChild(p)
    liFrames.appendChild(boxItem)
    secaoListPaintings.appendChild(liFrames)
  }

  let secaolistFigure = document.querySelector('.actionFiguresUl')
  
   for( let i = 0; i < listFigures.length; i++){
      let liFigures = document.createElement('li')

      let boxFigures = document.createElement('div')

      liFigures.appendChild(boxFigures)

      let imgFigures = document.createElement('img')
      imgFigures.src = listFigures[i].image

      let tituloFigures = document.createElement('h3')
      tituloFigures.classList = 'color'
      tituloFigures.innerHTML = '${listFigures[i].name}'

      let pFigures = document.createElement('p')
      pFigures.classList = 'colorValor'
      pFigures.innerText = `R$ ${listFigures[i].price}.00`

      boxFigures.appendChild(imgFigures)
      boxFigures.appendChild(tituloFigures)
      boxFigures.appendChild(pFigures)
      liFigures.appendChild(boxFigures)
      secaolistFigure.appendChild(liFigures)
   }

