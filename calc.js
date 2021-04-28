var a = '';
var b = '';
var num = [];
var ans;

function sendNum(digit){
    num.push(digit);
    if(num.length != 1){
        a = '';
        document.getElementById('display').innerHTML = a; 
    }
    for(i = 0; i< num.length; i++){
        a = a + num[i];
    }

document.getElementById('display').innerHTML = a;
}

function equals(){
    document.getElementById('display').innerHTML = '';
    for (i = 0; i< num.length; i++){
        b += num[i];
    }

    ans = eval(b);
    document.getElementById('display').innerHTML = ans;
    while (num.length > 0){
        num.pop();
    }

    num.push(ans.toString());

}
function allClear(){
    document.getElementById('display').innerHTML = '';
    while(num.length > 0){
        num.pop();
    }
    a = '';
    b = '';
}


        
    


