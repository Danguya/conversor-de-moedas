const valor = document.querySelector("#valor");
const button = document.querySelector("#Converter");
const display = document.querySelector("#display");
const from = document.querySelector('#from');
const codigo = document.querySelector('#code');
const convertFor = document.querySelector('#convertFor');
const reset = document.querySelector('#reset');
const dolar = 0.0018;
const kwanza = 567.46;
var code = '';
function init(){
    code = '';
    valor.value = '';
    display.innerHTML = '';
    from.innerHTML = '';
    codigo.innerHTML = '';
    reset.style.display = 'none';
}
function converter(valor,code = 'USD'){
    var resultado;
    if('USD' === code.toUpperCase()){
        resultado = valor * dolar;
    }
    if('AOA' === code.toUpperCase()){
        resultado = valor * kwanza;
    }
    return resultado;
}
convertFor.addEventListener('change',function(){
    code = this.value;
});
button.addEventListener('click',function(){
    switch(code){
        case 'AOA':{
            from.innerHTML = `${valor.value} dollares equivale`
            display.innerHTML = new Intl.NumberFormat('pt-ao', { style: 'currency', currency: code }).format(converter(valor.value,code)); 
            codigo.innerHTML = code;
            reset.style.display = 'block';
            break;
        }
        case 'USD':{
            from.innerHTML = `${valor.value} kwanzas equivale`
            display.innerHTML = new Intl.NumberFormat('EN', { style: 'currency', currency: code }).format(converter(valor.value,code)); 
            codigo.innerHTML = code;
            reset.style.display = 'block';
            break;
        }
        default:{
            alert('Seleccione a moeda que deseja converter!');
            
        }
        
    }
});
reset.addEventListener('click',init);
init();