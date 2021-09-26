(() => {
    let test = 'valor função'
    console.log(`Valor dentro da função "${test}"`);
    // retorna valor função

    if (true) {
        let test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }
    // retorna valor if

    console.log(`Valor após a execução do if "${test}"`)
    // retorna valor função
})();
//o let respeita todos os escopos