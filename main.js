function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

let start = 0

let titleInterval = setInterval(() => {
    if (start < 10){
        document.title = makeid(4);
    } else if (start < 15){
        document.title = 'H' + makeid(3);
    } else if (start < 20){
        document.title = 'Ho' + makeid(2);
    } else if (start < 25){
        document.title = 'Hol' + makeid(1);
    } else if (start < 30){
        document.title = 'Hola';
    } else {
        stop();
    }
    start++;
}, 100)

function stop(){
    clearInterval(titleInterval);
}
