var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  let current = startEl
  if(matchFunc(current)) resultSet.push(current)
  for(let i=0; i<current.children.length; i++){
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc,current.children[i]))
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]==='#') return 'id'
  if(selector[0]==='.') return 'class'
  if(selector.includes('.')) return 'tag.class'
  // if(selector.split('.').length === 2) return 'tag.class'
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  
  if (selectorType === "id") { 
    // matchFunc = function(elemento){
    //   if(('#'+elemento.id) === selector) return true
    //   return false
    // }
    matchFunction = elem => '#'+elem.id === selector
   
  } else if (selectorType === "class") {
    matchFunction = elem => {
      let clases = elem.classList
      if(clases.contains(selector.slice(1))) return true
      return false
    }
    
  } else if (selectorType === "tag.class") { 
    matchFunction = elem => {
      let [t,c] = selector.split('.') // t = tag c = class
      let clases = elem.classList
      
      return matchFunctionMaker(t)(elem) && matchFunctionMaker('.'+c)(elem)
    }

  } else if (selectorType === "tag") {
    matchFunction = elem => elem.tagName.toLowerCase() === selector 
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
