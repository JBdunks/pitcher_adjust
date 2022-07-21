//2.5 - 3.5
const aa = .1715
//3.5 - 4.5
const bb = .1471
//4.5 - 5.5
const cc = .1386
//5.5 -6.5
const dd = .1245
//6.5 - 7.5
const ee = .1227
//7.5 - 8.5
const ff = .1131

let final;
let american;
let start_value;
let end_value;




const calc =(f,a)=>{
    f = first_input.value
    a = second_input.value
    console.log(`given odds ${f} and ${a}`)
    if(f == -100){f = 100};
    if(a == -100){a = 100};
    f > 0 ? hero = (100/(Math.abs(f)+100))*100 : hero = (Math.abs(f)/(Math.abs(f)+100))*100
    a > 0 ? villian =(100/(Math.abs(a)+100))*100 : villian = (Math.abs(a)/(Math.abs(a)+100))*100
    vig = (hero+villian)-100
    final = hero/(hero+villian)
    console.log(final)
    document.getElementById('percentage').innerHTML = final.toFixed(4)
    final <.50 ? american = (100 /final) - 100 : american = -100*final/(1-final)
    console.log(american)
    document.getElementById('american').innerHTML = american.toFixed(2)
    if(document.getElementById('american_new').innerHTML /= 'NaN'){
        document.getElementById('american_new').innerHTML = 'NaN'
    };
    if(document.getElementById('adjusted').innerHTML /= 'NaN'){
        document.getElementById('adjusted').innerHTML = 'NaN'
    };
    return american
}

const modify = () =>{
    x = final
    //start value two_a
    if(start_value == 'two_a' && end_value == 'three_b'){x = x - aa;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'two_a' && end_value == 'four_b'){x = x - aa -bb;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'two_a' && end_value == 'five_b'){x = x - aa - bb - cc;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };

    //start value three_a
    if(start_value == 'three_a' && end_value == 'two_b'){x = x + aa;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'three_a' && end_value == 'four_b'){x = x - bb;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'three_a' && end_value == 'five_b'){x = x -bb -cc;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'three_a' && end_value == 'six_b'){x = x -bb -cc -dd;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    //start value four_a
    if(start_value == 'four_a' && end_value == 'two_b'){x = x + bb + aa;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'four_a' && end_value == 'three_b'){x = x + bb;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'four_a' && end_value == 'five_b'){x = x -cc;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'four_a' && end_value == 'six_b'){x = x - cc -dd;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'four_a' && end_value == 'seven_b'){x = x - cc -dd - ee;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    //start value five_a
    if(start_value == 'five_a' && end_value == 'four_b'){x = x + cc;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'five_a' && end_value == 'three_b'){x = x + cc + bb;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };if(start_value == 'five_a' && end_value == 'two_b'){x = x + cc + bb + aa;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'five_a' && end_value == 'six_b'){x = x - dd ;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'five_a' && end_value == 'seven_b'){x = x - dd - ee ;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'five_a' && end_value == 'eight_b'){x = x - dd - ee - ff;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    //start value six_a
    if(start_value == 'six_a' && end_value == 'five_b'){x = x + dd;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'six_a' && end_value == 'four_b'){x = x +dd + cc;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'six_a' && end_value == 'three_b'){x = x + dd + cc + bb;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'six_a' && end_value == 'seven_b'){x = x - ee;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'six_a' && end_value == 'eight_b'){x = x - ee - ff;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };if(start_value == 'six_a' && end_value == 'nine_b'){x = x - ee - ff * 2 ;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    //start value seven_a
    if(start_value == 'seven_a' && end_value == 'six_b'){x = x + ee ;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'seven_a' && end_value == 'five_b'){x = x + ee + dd;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };if(start_value == 'seven_a' && end_value == 'four_b'){x = x + ee + dd + cc;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'seven_a' && end_value == 'eight_b'){x = x  - ff;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };if(start_value == 'seven_a' && end_value == 'nine_b'){x = x - ff * 2;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };if(start_value == 'seven_a' && end_value == 'ten_b'){x = x - ff * 3;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    //start value eight_a
    if(start_value == 'eight_a' && end_value == 'seven_b'){x = x + ff;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'eight_a' && end_value == 'six_b'){x = x + ff + ee;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'eight_a' && end_value == 'five_b'){x = x + ff + ee + dd;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'eight_a' && end_value == 'nine_b'){x = x - ff;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'eight_a' && end_value == 'ten_b'){x = x  - ff * 2;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'eight_a' && end_value == 'eleven_b'){x = x - ff * 3;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    //start value nine_a
    if(start_value == 'nine_a' && end_value == 'eight_b'){x = x + ff;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'nine_a' && end_value == 'seven_b'){x = x + ff * 2;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'nine_a' && end_value == 'six_b'){x = x  + ee + ff * 2;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'nine_a' && end_value == 'ten_b'){x = x - ff;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    if(start_value == 'nine_a' && end_value == 'eleven_b'){x = x - ff * 2;
        x <.50 ? y = (100 /x) - 100 : y = -100*x/(1-x);
        document.getElementById('adjusted').innerHTML = x.toFixed(4);
        document.getElementById('american_new').innerHTML = y.toFixed(2);
    };
    

    console.log(`starting point is ${start_value}`)
    console.log(`ending point is ${end_value}`)
    
}


const two_a = () => {
    document.getElementById('two_a').style.backgroundColor = 'green';
    document.getElementById('three_a').style.backgroundColor = 'white'; 
    document.getElementById('four_a').style.backgroundColor = 'white'; 
    document.getElementById('five_a').style.backgroundColor = 'white';
    document.getElementById('six_a').style.backgroundColor = 'white';
    document.getElementById('seven_a').style.backgroundColor = 'white';
    document.getElementById('eight_a').style.backgroundColor = 'white';
    document.getElementById('nine_a').style.backgroundColor = 'white';
    start_value = 'two_a'
};

const three_a = () => {
    document.getElementById('two_a').style.backgroundColor = 'white';
    document.getElementById('three_a').style.backgroundColor = 'green'; 
    document.getElementById('four_a').style.backgroundColor = 'white'; 
    document.getElementById('five_a').style.backgroundColor = 'white';
    document.getElementById('six_a').style.backgroundColor = 'white';
    document.getElementById('seven_a').style.backgroundColor = 'white';
    document.getElementById('eight_a').style.backgroundColor = 'white';
    document.getElementById('nine_a').style.backgroundColor = 'white';
    start_value = 'three_a'
};

const four_a = () => {
    document.getElementById('two_a').style.backgroundColor = 'white';
    document.getElementById('three_a').style.backgroundColor = 'white'; 
    document.getElementById('four_a').style.backgroundColor = 'green'; 
    document.getElementById('five_a').style.backgroundColor = 'white';
    document.getElementById('six_a').style.backgroundColor = 'white';
    document.getElementById('seven_a').style.backgroundColor = 'white';
    document.getElementById('eight_a').style.backgroundColor = 'white';
    document.getElementById('nine_a').style.backgroundColor = 'white';
    start_value = 'four_a'
};

const five_a = () => {
    document.getElementById('two_a').style.backgroundColor = 'white';
    document.getElementById('three_a').style.backgroundColor = 'white'; 
    document.getElementById('four_a').style.backgroundColor = 'white'; 
    document.getElementById('five_a').style.backgroundColor = 'green';
    document.getElementById('six_a').style.backgroundColor = 'white';
    document.getElementById('seven_a').style.backgroundColor = 'white';
    document.getElementById('eight_a').style.backgroundColor = 'white';
    document.getElementById('nine_a').style.backgroundColor = 'white';
    start_value = 'five_a'
};

const six_a = () => {
    document.getElementById('two_a').style.backgroundColor = 'white';
    document.getElementById('three_a').style.backgroundColor = 'white'; 
    document.getElementById('four_a').style.backgroundColor = 'white'; 
    document.getElementById('five_a').style.backgroundColor = 'white';
    document.getElementById('six_a').style.backgroundColor = 'green';
    document.getElementById('seven_a').style.backgroundColor = 'white';
    document.getElementById('eight_a').style.backgroundColor = 'white';
    document.getElementById('nine_a').style.backgroundColor = 'white';
    start_value = 'six_a'
};

const seven_a = () => {
    document.getElementById('two_a').style.backgroundColor = 'white';
    document.getElementById('three_a').style.backgroundColor = 'white'; 
    document.getElementById('four_a').style.backgroundColor = 'white'; 
    document.getElementById('five_a').style.backgroundColor = 'white';
    document.getElementById('six_a').style.backgroundColor = 'white';
    document.getElementById('seven_a').style.backgroundColor = 'green';
    document.getElementById('eight_a').style.backgroundColor = 'white';
    document.getElementById('nine_a').style.backgroundColor = 'white';
    start_value = 'seven_a'
};

const eight_a = () => {
    document.getElementById('two_a').style.backgroundColor = 'white';
    document.getElementById('three_a').style.backgroundColor = 'white'; 
    document.getElementById('four_a').style.backgroundColor = 'white'; 
    document.getElementById('five_a').style.backgroundColor = 'white';
    document.getElementById('six_a').style.backgroundColor = 'white';
    document.getElementById('seven_a').style.backgroundColor = 'white';
    document.getElementById('eight_a').style.backgroundColor = 'green';
    document.getElementById('nine_a').style.backgroundColor = 'white';
    start_value = 'eight_a'
};

const nine_a = () => {
    document.getElementById('two_a').style.backgroundColor = 'white';
    document.getElementById('three_a').style.backgroundColor = 'white'; 
    document.getElementById('four_a').style.backgroundColor = 'white'; 
    document.getElementById('five_a').style.backgroundColor = 'white';
    document.getElementById('six_a').style.backgroundColor = 'white';
    document.getElementById('seven_a').style.backgroundColor = 'white';
    document.getElementById('eight_a').style.backgroundColor = 'white';
    document.getElementById('nine_a').style.backgroundColor = 'green';
    start_value = 'nine_a'
};

//second set of buttons start

const two_b = () => {
    document.getElementById('two_b').style.backgroundColor = 'green';
    document.getElementById('three_b').style.backgroundColor = 'white'; 
    document.getElementById('four_b').style.backgroundColor = 'white'; 
    document.getElementById('five_b').style.backgroundColor = 'white';
    document.getElementById('six_b').style.backgroundColor = 'white';
    document.getElementById('seven_b').style.backgroundColor = 'white';
    document.getElementById('eight_b').style.backgroundColor = 'white';
    document.getElementById('nine_b').style.backgroundColor = 'white';
    document.getElementById('ten_b').style.backgroundColor = 'white';
    document.getElementById('eleven_b').style.backgroundColor = 'white';
    end_value = 'two_b'
};

const three_b = () => {
    document.getElementById('two_b').style.backgroundColor = 'white';
    document.getElementById('three_b').style.backgroundColor = 'green'; 
    document.getElementById('four_b').style.backgroundColor = 'white'; 
    document.getElementById('five_b').style.backgroundColor = 'white';
    document.getElementById('six_b').style.backgroundColor = 'white';
    document.getElementById('seven_b').style.backgroundColor = 'white';
    document.getElementById('eight_b').style.backgroundColor = 'white';
    document.getElementById('nine_b').style.backgroundColor = 'white';
    document.getElementById('ten_b').style.backgroundColor = 'white';
    document.getElementById('eleven_b').style.backgroundColor = 'white';
    end_value = 'three_b'
};

const four_b = () => {
    document.getElementById('two_b').style.backgroundColor = 'white';
    document.getElementById('three_b').style.backgroundColor = 'white'; 
    document.getElementById('four_b').style.backgroundColor = 'green'; 
    document.getElementById('five_b').style.backgroundColor = 'white';
    document.getElementById('six_b').style.backgroundColor = 'white';
    document.getElementById('seven_b').style.backgroundColor = 'white';
    document.getElementById('eight_b').style.backgroundColor = 'white';
    document.getElementById('nine_b').style.backgroundColor = 'white';
    document.getElementById('ten_b').style.backgroundColor = 'white';
    document.getElementById('eleven_b').style.backgroundColor = 'white';
    end_value = 'four_b'
};

const five_b = () => {
    document.getElementById('two_b').style.backgroundColor = 'white';
    document.getElementById('three_b').style.backgroundColor = 'white'; 
    document.getElementById('four_b').style.backgroundColor = 'white'; 
    document.getElementById('five_b').style.backgroundColor = 'green';
    document.getElementById('six_b').style.backgroundColor = 'white';
    document.getElementById('seven_b').style.backgroundColor = 'white';
    document.getElementById('eight_b').style.backgroundColor = 'white';
    document.getElementById('nine_b').style.backgroundColor = 'white';
    document.getElementById('ten_b').style.backgroundColor = 'white';
    document.getElementById('eleven_b').style.backgroundColor = 'white';
    end_value = 'five_b'
};

const six_b = () => {
    document.getElementById('two_b').style.backgroundColor = 'white';
    document.getElementById('three_b').style.backgroundColor = 'white'; 
    document.getElementById('four_b').style.backgroundColor = 'white'; 
    document.getElementById('five_b').style.backgroundColor = 'white';
    document.getElementById('six_b').style.backgroundColor = 'green';
    document.getElementById('seven_b').style.backgroundColor = 'white';
    document.getElementById('eight_b').style.backgroundColor = 'white';
    document.getElementById('nine_b').style.backgroundColor = 'white';
    document.getElementById('ten_b').style.backgroundColor = 'white';
    document.getElementById('eleven_b').style.backgroundColor = 'white';
    end_value = 'six_b'
};

const seven_b = () => {
    document.getElementById('two_b').style.backgroundColor = 'white';
    document.getElementById('three_b').style.backgroundColor = 'white'; 
    document.getElementById('four_b').style.backgroundColor = 'white'; 
    document.getElementById('five_b').style.backgroundColor = 'white';
    document.getElementById('six_b').style.backgroundColor = 'white';
    document.getElementById('seven_b').style.backgroundColor = 'green';
    document.getElementById('eight_b').style.backgroundColor = 'white';
    document.getElementById('nine_b').style.backgroundColor = 'white';
    document.getElementById('ten_b').style.backgroundColor = 'white';
    document.getElementById('eleven_b').style.backgroundColor = 'white';
    end_value = 'seven_b'
};

const eight_b = () => {
    document.getElementById('two_b').style.backgroundColor = 'white';
    document.getElementById('three_b').style.backgroundColor = 'white'; 
    document.getElementById('four_b').style.backgroundColor = 'white'; 
    document.getElementById('five_b').style.backgroundColor = 'white';
    document.getElementById('six_b').style.backgroundColor = 'white';
    document.getElementById('seven_b').style.backgroundColor = 'white';
    document.getElementById('eight_b').style.backgroundColor = 'green';
    document.getElementById('nine_b').style.backgroundColor = 'white';
    document.getElementById('ten_b').style.backgroundColor = 'white';
    document.getElementById('eleven_b').style.backgroundColor = 'white';
    end_value = 'eight_b'
};

const nine_b = () => {
    document.getElementById('two_b').style.backgroundColor = 'white';
    document.getElementById('three_b').style.backgroundColor = 'white'; 
    document.getElementById('four_b').style.backgroundColor = 'white'; 
    document.getElementById('five_b').style.backgroundColor = 'white';
    document.getElementById('six_b').style.backgroundColor = 'white';
    document.getElementById('seven_b').style.backgroundColor = 'white';
    document.getElementById('eight_b').style.backgroundColor = 'white';
    document.getElementById('nine_b').style.backgroundColor = 'green';
    document.getElementById('ten_b').style.backgroundColor = 'white';
    document.getElementById('eleven_b').style.backgroundColor = 'white';
    end_value = 'nine_b'
};

const ten_b = () => {
    document.getElementById('two_b').style.backgroundColor = 'white';
    document.getElementById('three_b').style.backgroundColor = 'white'; 
    document.getElementById('four_b').style.backgroundColor = 'white'; 
    document.getElementById('five_b').style.backgroundColor = 'white';
    document.getElementById('six_b').style.backgroundColor = 'white';
    document.getElementById('seven_b').style.backgroundColor = 'white';
    document.getElementById('eight_b').style.backgroundColor = 'white';
    document.getElementById('nine_b').style.backgroundColor = 'white';
    document.getElementById('ten_b').style.backgroundColor = 'green';
    document.getElementById('eleven_b').style.backgroundColor = 'white';
    end_value = 'ten_b'
};

const eleven_b = () => {
    document.getElementById('two_b').style.backgroundColor = 'white';
    document.getElementById('three_b').style.backgroundColor = 'white'; 
    document.getElementById('four_b').style.backgroundColor = 'white'; 
    document.getElementById('five_b').style.backgroundColor = 'white';
    document.getElementById('six_b').style.backgroundColor = 'white';
    document.getElementById('seven_b').style.backgroundColor = 'white';
    document.getElementById('eight_b').style.backgroundColor = 'white';
    document.getElementById('nine_b').style.backgroundColor = 'white';
    document.getElementById('ten_b').style.backgroundColor = 'white';
    document.getElementById('eleven_b').style.backgroundColor = 'green';
    end_value = 'eleven_b'
};
