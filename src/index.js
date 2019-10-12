module.exports =  function zeros(expression) {
    function calcZero(objNumSett){
        let { mult, number, even} = objNumSett;
        let i;

        if(mult == 1){i = 1}else{
            i = even;
        }
 
        for(; i <= number; i+=mult){
            if(i % 5 == 0){
                five++;
                let temp = i/5;
                while(temp>1){
                    if(temp % 5 == 0)five++;
                    temp /=5
                }
            }


            if(i % 2 == 0){
                two++;
                let temp = i/2;
                while(temp>1){
                    if(temp% 2 == 0)two++;
                    temp /=2
                }
            }


        }

    }
    let two = 0;
    let five = 0;
    let arrExpSpread = [];
    let arrExp = expression.split("*");
  
    arrExp.forEach(function(item) {
        let number = +item.slice(0, item.indexOf("!"));
        let mult = item.indexOf("!!") == -1 ? 1 : 2;
        let even = number % 2 == 0 ? 2:1
        arrExpSpread.push({
            number,
            mult,
            even
        });
    });

    arrExpSpread.forEach(function(objNumSett){
        calcZero(objNumSett);
    });

    return Math.min(two, five);
}
