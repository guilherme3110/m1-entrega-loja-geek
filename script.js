/* 

- DOM ( Modelo de objeto do documento)
-window.document
  -window.document.write('ola mundo)
  -window.document.body.style = "background;"
  -document.title = titulo da pagina";
  -window.location
  -window.location. href

  -Seleltores 
    - querySelector();
        -tag('tag)
        - class('.classe')
        - id('#id')
*/        

// CreateElement();


let p = document.createElement('p'); // criamos a tag de paragrafo
console.log(p);

p.innerHTML = "Esse é um texto de teste";
console.log(p);

p.setAttribute('name', 'paragrafo');


