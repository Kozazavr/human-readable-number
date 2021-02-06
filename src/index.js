module.exports = function toReadable (number) {
   const arrNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const arrDozen = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   const hundred = 'hundred';

   let strNumber = String(number);
   let arrWord = [];

   if( number == 0) {
       return 'zero';
   }

   if (number < 20) {
       return arrNumbers[number];
   }

   if (number >= 20 && number < 100) {
      arrWord.push(arrDozen[strNumber[0] - 1]);
      arrWord.push(arrNumbers[strNumber[1]]);  
      return arrWord.join(' ').trim();
   }

   if (number >= 100) {
       arrWord.push(arrNumbers[strNumber[0]]);
       arrWord.push(hundred);
       if ((number - strNumber[0] * 100) > 19) {
           arrWord.push(arrDozen[strNumber[1] - 1]);
           arrWord.push(arrNumbers[strNumber[2]]);  
       } else if (strNumber[1] > 0) {
          arrWord.push(arrNumbers[strNumber[1] + strNumber[2]]);
       } else {
          arrWord.push(arrNumbers[strNumber[2]]);
       }
       return arrWord.join(' ').trim();
   }
};
