const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let proximoIdcarro = 1;
let Carros = [];

function mostrarMenu() {
    console.log("\n========================");
    console.log("TURBO CAR AURA 😊😊👍");
    console.log("==========================");
    console.log("1 - CADASTRAR CARRO");
    console.log("2 - LISTAR CARRO");
    console.log("3 - BUSCAR CARRO POR ID");
    console.log("4 - ATUALIZAR CARRO");
    console.log("5 - REMOVER CARRO");
    console.log("0 - SAIR");
    console.log("===========================")

    rl.question("Escolha uma opção: ", (opcao) => {
    if (opcao === "1") {
        cadastrarCarro();
    } else if (opcao === "2") {
        listarCarro();
    } else if (opcao === "3") {
        buscarCarroPorId();
    } else if (opcao === "4") {
        atualizarCarro();
    } else if (opcao === "5") {
        removerCarro();
    } else if (opcao === "0") {
        console.log("saindo...");
        rl.close()
    } else {
        console.log("opção inválida");
        mostrarMenu();
    }
})
}

function removerCarro() {
    console.log("Remover Carro");

    rl.question("Digite o id do Carro que quer remover: ", (id) => {
        id = Number(id);

        for (let i = 0; i < Carros.length; i++) {
            if (Carros[i].id === id) {
                Carros.splice(i, 1);
                console.log("Carro removido com sucesso");
                mostrarMenu();
                return;
            }
        }
        console.log("Carro não encontrado");
        mostrarMenu()
    })
}

function atualizarCarro() {
    console.log("Atualizar Carros")

    rl.question("Digite o ID do carro: ", (id) => {
        id = Number(id);

        let carro = encontrarCarroPorId(id);
        if (carro === null) {
            console.log("carros não encontrado");
            mostrarMenu();
            return;
        }
        rl.question("Digite o novo modelo: ", (novoModelo) => {
            rl.question("Digite a nova placa ", (novaPlaca) => {
                rl.question("Digite a novo ano: ", (novoAno) => {
                    rl.question("Digite a novo preco por dia: ", (novoPrecoPorDia)=> { 

                        novoAno = Number(novoAno);
                        novoPrecoPorDia = Number(novoPrecoPorDia);

                        if (novoModelo === "" || novaPlaca === "" || novoAno === "" || novoPrecoPorDia === "") {
                            console.log("Todos os dados precisam ser preenchidos");
                            mostrarMenu();
                            return;
                        }

                        if (novaPlaca === "" || novoAno <= 0 || novoPrecoPorDia < 0 ) {
                            console.log("ano ou preco por dia inválido");
                            mostrarMenu();
                            return;
                        }
                        carro.modelo = novoModelo;
                        carro.placa = novaPlaca;
                        carro.ano = novoAno;
                        carro.precoPorDia = novoPrecoPorDia;

                        console.log("atualizado com sucesso");
                        mostrarMenu();
                    })
                })
            })
        })
    })
}

function listarCarro() {
    console.log("Listar Carros");

    if (Carros.length === 0) {
        console.log("Nenhum carro cadastrado");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < Carros.length; i++) {

        console.log("\nID: " + Carros[i].id);
        console.log("Modelo: " + Carros[i].modelo)
        console.log("Placa: " + Carros[i].placa)
        console.log("Ano: " + Carros[i].ano)
        console.log("Preço por dia: " + Carros[i].precoPorDia)
    }

    mostrarMenu();
}

function cadastrarCarro() {
    console.log("Cadastrar Carro");
    rl.question("Digite o modelo do Carro: ", (modelo) => {
        rl.question("Digite a placa do carro: ", (placa) => {
            rl.question("Digite a ano do Carro: ", (ano) => {
                rl.question("Digite o preco por dia do carro: ", (PrecoPorDia) => {
                        ano = Number(ano);
                        PrecoPorDia = Number(PrecoPorDia);

                        if (modelo === "" || placa === "" || ano === "" || PrecoPorDia === "") {
                            console.log("ERRO: Não preencheu todas as infos");
                            mostrarMenu();
                            return;
                        }

                        if (ano <= 0) {
                            console.log("ERRO: Ano inválido");
                            mostrarMenu();
                            return;
                        }


                        let Carro = {
                            id: proximoIdcarro++,
                            modelo: modelo,
                            placa: placa,
                            ano: ano,
                            precoPorDia: PrecoPorDia
                        };

                         Carros.push(Carro);


                        console.log("Carro AURA👶👶 Cadastrado com sucesso");
                        mostrarMenu();
                    })
                })
        })
    })
}

function buscarCarroPorId() {
    console.log("Buscar carro por id");

    rl.question("Digite o ID do carro: ", (id) => {
        id = Number(id);

        let Carro = encontrarCarroPorId(id);

        if (Carro   === null) {
            console.log("Carro não encontrado");
            mostrarMenu();
            return;
        }

        console.log("\nCarro Encontrado");
        console.log("ID: " + Carro.id);
        console.log("Modelo: " + Carro.modelo)
        console.log("Placa: " + Carro.placa)
        console.log("Ano: " + Carro.ano)
        console.log("Preco por dia : " + Carro.precoPorDia)

        mostrarMenu()
    })
}

function encontrarCarroPorId(id) {
    for (let i = 0; i < Carros.length; i++) {
        if (Carros[i].id === id) {
            return Carros[i];
        }
    }

    return null;
}



mostrarMenu();

