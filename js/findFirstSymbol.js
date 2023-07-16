function findFirstUniqueSymbol(text) {
  const uniqueSymbols = findFirstUniqueSymbolInWords(text);
  const firstUniqueSymbol = findFirstUniqueSymbolInCollection(uniqueSymbols);
  return firstUniqueSymbol;
}

function findFirstUniqueSymbolInWords(text) {
 const words = text.split(" "); 
 const nonRepeatedSymbols = [];
  for (const word of words) {
    for (symbol of word) {
      let arr = word.split('').filter(s => s === symbol);
      if (arr.length === 1) {
        nonRepeatedSymbols.push(symbol);
        break;
      }
    }
  }
  return nonRepeatedSymbols;
}

function findFirstUniqueSymbolInCollection(nonRepeatedSymbols) {
  for (const symbol of nonRepeatedSymbols) {
    let arr = nonRepeatedSymbols.filter(s => s === symbol)
    if (arr.length === 1) {
      return symbol; 
    }
  }
  return null
}

const cleanInput = () => {
  const inputUserText = document.getElementById("inputUserText");
  inputUserText.value = ''; 
  const resultComponent = document.getElementById('resultComponent');
  resultComponent.innerHTML = '';
}

const onResultClick = () => {
  const userText = document.getElementById("inputUserText").value;
  const result = findFirstUniqueSymbol(userText);
  showResult(result);
}

function showResult(result) {
  const resultComponent = document.getElementById('resultComponent');
  resultComponent.innerHTML = result;
}