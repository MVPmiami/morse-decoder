const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.split('');
    let wordBySymbol = [];
    let size = 10;
    let symbols = '';
    let result = '';
  
    /* Разбиваем переданую строку на подмассивы длиной по 10 , т.е. в 1 символ*/
  
    for (let i = 0; i <expr.length/size; i++){
      wordBySymbol[i] = expr.slice((i*size), (i*size) + size);
    }
    
    /* Делаем строку из точек тире и пробелов */
  
    for(let i = 0; i < wordBySymbol.length; i++){
      for(let n = 0; n < wordBySymbol[i].length; n = n + 2){
        if( (wordBySymbol[i][n] + wordBySymbol[i][n + 1]) === '10'){
          symbols += '.';
        }else if( (wordBySymbol[i][n] + wordBySymbol[i][n + 1]) === '11'){
          symbols += '-';
        }else if( (wordBySymbol[i][n] + wordBySymbol[i][n + 1]) === '**'){
          symbols += ' ';
          n = 10;
        }else{
          continue;
        }
      }
      
      /* Перебираем обьект и добавляем в строку нужный символ по шифру */
  
      for( key in MORSE_TABLE) {
        if(key === symbols){
          result += MORSE_TABLE[key]
        }
      }
      if(symbols === ' '){
        result += ' ';
      }
      symbols = ''
    }
  
    return result;
    
  }

module.exports = {
    decode
}