const input = document.querySelector(".text-input");
const container = document.querySelector(".text-container");


input.addEventListener("input", onInputChange);

function onInputChange(e) {
e.preventDefault();
const text = e.target.value;
const result = searchUniqueSymbol(text);
const markup = result?`<p class="text">Перший унікальний символ: <span class="accent-text">"${result}"</span></p>`:`<p class="text">У тексті немає символа, що відповідає вимогам</p>`
container.innerHTML = markup
console.log(result);
}

function firstNonRepeatingLetter(str){
    const arr=str.split('')
  const result = arr.find((n, i, a) => a.indexOf(n) === a.lastIndexOf(n)) || '';
    return result;
};

function searchUniqueSymbol(string){
const array = string.split(' ');
const arrayOfUniqueSymbols = array.map((el) => firstNonRepeatingLetter(el));
const uniqueSymbol = firstNonRepeatingLetter(arrayOfUniqueSymbols.join(''));
// console.log(uniqueSymbol);
return uniqueSymbol;
}

