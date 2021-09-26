function fn() {
    console.log(text);

    var text = 'Hoisting de variáveis';

    console.log(text);
}

fn();

/*

function fn(){
    var text;
    console.log(text);

    text = 'Hoisting de variáceis';

    console.log (text);
}

*/