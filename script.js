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

let secaoListPaintings = document.querySelector('.frames')
  for( let i = 0 ;i < listFrames.length; i ++){
    let liFrames = document.createElement('li')

    let boxItem = document.createElement('figure')
    liFrames.appendChild(boxItem)

    let img = document.createElement('img')
    img.src = listFrames[i].image

    let titulo = document.createElement('p')
    titulo.classList = 'color'
    titulo.innerHTML = `<strong>${listFrames[i].name} </strong>` 

    let span = document.createElement('span')
    span.classList = 'colorValor'
    span.innerText = `R$ ${listFrames[i].price},00`

    boxItem.appendChild(img)
    boxItem.appendChild(titulo)
    boxItem.appendChild(span)
    secaoListPaintings.appendChild(liFrames)
  }

  let secaolistFigure = document.querySelector('.action')
  
   for( let i = 0; i < listFigures.length; i++){
      let liFigures = document.createElement('li')

      let boxFigures = document.createElement('figure')

      liFigures.appendChild(boxFigures)

      let imgFigures = document.createElement('img')
      imgFigures.src = listFigures[i].image

      let tituloFigures = document.createElement('p')
      tituloFigures.classList = 'color'
      tituloFigures.innerHTML = listFigures[i].name

      let spanFigures = document.createElement('span')
      spanFigures.classList = 'colorValor'
      spanFigures.innerText = `R$ ${listFigures[i].price}.00`

      boxFigures.appendChild(imgFigures)
      boxFigures.appendChild(tituloFigures)
      boxFigures.appendChild(spanFigures)
      liFigures.appendChild(boxFigures)
      secaolistFigure.appendChild(liFigures)
   }