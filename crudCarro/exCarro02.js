const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let proximoIdcliente = 1;
let Clientes = [];

function mostrarMenu() {
    console.log("\n========================");
    console.log("TURBO CAR AURA 😊😊👍");
    console.log("==========================");
    console.log("AREA DE CLIENTES");
    console.log("==========================");
    console.log("1 - CADASTRAR CLIENTE");
    console.log("2 - LISTAR CLIENTE");
    console.log("3 - BUSCAR CLIENTE POR ID");
    console.log("4 - ATUALIZAR CLIENTE");
    console.log("5 - DIGITE SEU ID ");
    console.log("6 - DIGITE SEU CPF");
    console.log("7 - TELEFONE DO  CLIENTE");
    console.log("8 - REMOVER CLIENTE");
    console.log("9 - SAIR");
    console.log("===========================")

    rl.question("Escolha uma opção: ", (opcao) => {
        if (opcao === "1") {
            cadastrarCliente();
        } else if (opcao === "2") {
            listarCliente();
        } else if (opcao === "3") {
            buscarClientePorId();
        } else if (opcao === "4") {
            atualizarCliente();
        } else if (opcao === "5") {
            removerCliente();
        } else if (opcao === "6") {
            DigiteSeuCpf();
        } else if (opcao === "7") {
            DigiteSeuTelefone();
        } else if (opcao === "8") {
            console.log("Remover Cliente");
        } else if (opcao === "9") {
            console.log("saindo...");
            rl.close();
            console.log("Cliente não encontrado");
            mostrarMenu();
        }
    }
    )
}



function removerCliente() {
    console.log("Remover Cliente");

    rl.question("Digite o id do Cliente que quer remover: ", (id) => {
        id = Number(id);

        for (let i = 0; i < Clientes.length; i++) {
            if (Clientes[i].id === id) {
                Clientes.splice(i, 1);
                console.log("Cliente removido com sucesso");
                mostrarMenu();
                return;
            }
        }
        console.log("Cliente não encontrado");
        mostrarMenu()
    })
}

function atualizarCliente() {
    console.log("Atualizar Cliente")

    rl.question("Digite o ID do cliente: ", (id) => {
        id = Number(id);

        let cliente = encontrarClientePorId(id);
        if (cliente === null) {
            console.log("cliente não encontrado");
            mostrarMenu();
            return;
        }
        rl.question("Digite o novo Nome: ", (NovoNome) => {
            rl.question("Digite a nova Idade: ", (NovaIdade) => {
                rl.question("Digite o novo cpf: ", (novoCpf) => {
                    rl.question("Digite o novo telefone: ", (novoTelefone) => {
                        rl.question("Digite o novo ID: ", (novoId) => {
                            novoId = Number(novoId);
                        novoTelefone = Number(telefone);

                        if (novoNome === "" || novaIdade === "" || novoCpf === "" || novoTelefone === "") {
                            console.log("Todos os dados precisam ser preenchidos");
                            mostrarMenu();
                            return;
                        }

                        if (novaPlaca === "" || novoAno <= 0 || novocliente < 0) {
                            console.log("ano ou preco por dia inválido");
                            mostrarMenu();
                            return;
                        }
                        cliente.Nome = novoNome;
                        cliente.idade = novaIdade;
                        cliente.ano = novoAno;
                        cliente.cpf = novoCpf;

                        console.log("atualizado com sucesso");
                        mostrarMenu();
                    })
                })
            })
        })
    })
})

}


function listarClientes() {
    console.log("Listar Clientes");

    if (Clientes.length === 0) {
        console.log("Nenhum cliente cadastrado");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < Clientes.length; i++) {

        console.log("\nID: " + Clientes[i].id);
        console.log("Nome: " + Clientes[i].nome)
        console.log("CPF: " + Clientes[i].cpf)
        console.log("Telefone: " + Clientes[i].telefone)
        console.log(": " + Clientes[i].Cpf)
    }

    mostrarMenu();
}

function cadastrarCliente() {
    console.log("Cadastrar CLIENTE");
 rl.question("Digite o nome do cliente: ", (nome) => {
    rl.question("Digite a idade do cliente: ", (idade) => {
        rl.question("Digite o CPF do cliente: ", (cpf) => {
            rl.question("Digite o telefone do cliente: ", (telefone) => {
                rl.question("Digite o ID do cliente: ", (id) => {
                    id = Number(id);

                    if (nome === "" || cpf === "" || telefone === "" || id === "") {
                        console.log("ERRO: Não preencheu todas as infos");
                        mostrarMenu();
                        return;
                    }

                    let cliente = {
                        id: id,
                        nome: nome,
                        cpf: cpf,
                        telefone: telefone
                    };

                    Clientes.push(cliente);


                    console.log("CLIENTE Cadastrado com sucesso");
                    mostrarMenu();
                


                    if (nome === "" || cpf === "" || telefone === "" || id === "") {
                        console.log("ERRO: Não preencheu todas as infos");
                        mostrarMenu();
                        return;
                    }

                    if (idade <= 0) {
                        console.log("ERRO: Idade inválida");
                        mostrarMenu();
                        return;
                    }
                )
            }    )
                    console.log("CLIENTE AURA👶👶 Cadastrado com sucesso");
                    mostrarMenu();
                })
            })
        })
    }


function buscarClientePorId() {
    console.log("Buscar cliente por id");

    rl.question("Digite o ID do cliente: ", (id) => {
        id = Number(id);

        let cliente = encontrarclientePorId(id);

        if (cliente === null) {
            console.log("Cliente não encontrado");
            mostrarMenu();
            return;
        }

        console.log("\nCliente Encontrado");
        console.log("ID: " + cliente.id);
        console.log("Nome: " + cliente.nome)
        console.log("CPF: " + cliente.cpf)
        console.log("Telefone: " + cliente.telefone)

        mostrarMenu()
    })
}

function encontrarclientePorId(id) {
    for (let i = 0; i < Clientes.length; i++) {
        if (Clientes[i].id === id) {
            return Clientes[i];
        }
    }

    return null;
}



mostrarMenu();

