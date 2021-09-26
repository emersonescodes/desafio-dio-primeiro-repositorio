(() => {
    const test = 'valor função'
    console.log(`Valor dentro da função "${test}"`);
    // retorna valor função

    if (true) {
        const test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }
    // retorna valor if

    console.log(`Valor após a execução do if "${test}"`)
    // retorna valor função
})();
//o const respeita todos os escopos e não pode ser reatribuído