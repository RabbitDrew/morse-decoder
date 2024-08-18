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
};3

function decode(expr) {
    let newDataList = {}
    let arrOfexpr = []
    let gap = '**********'
    let word =''
    /*list*/
   const dataList = {
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
/*create datalist with new  keys*/
   for (let k in dataList) {
       let convertK = ''
       let newK = ''
       let space = ''
       let currKey = k
       for (let j = 0; j < currKey.length; j++) {
           if (currKey[j] === '.') {
                convertK +='10'
           } else if (currKey[j] === ('-')) {
               convertK +='11'
           }
        }

       space = '0'.repeat(10 - convertK.length)
       newK = space+convertK
       newDataList[newK] = dataList[k]
  }
/*devide the expr*/
   for (let i = 0; i < expr.length; i+=10) {
       arrOfexpr.push(expr.slice(i, i+10))
   }
/*get right letter*/
   arrOfexpr.forEach((keyExp, i) => {
       if (newDataList.hasOwnProperty(keyExp)) {
           const value = newDataList[keyExp];
           word +=value 
       }else if (!newDataList.hasOwnProperty(keyExp) && keyExp === gap) {
           word +=' '
       }
   })

   return word
}

module.exports = {
    decode
}