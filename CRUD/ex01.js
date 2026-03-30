const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let proximoId = 1;
let alunos = [];


function mostrarMenu() {
    console.log("\n==================");
    console.log("SISTEMA ESCOLAR");
    console.log("===================");
    console.log("1 - cadastrar aluno");
    console.log("2 - listar Aluno");
    console.log("3 - Buscar Por ID");
    console.log("4 - Atualizar Alunos");
    console.log("5 - Remover Alunos");
    console.log("6 - Mostrar Alunos Reprovados");
    console.log("7 -Mostrar Alunos Reprovado");
    console.log("0 - Sair");
    console.log("===================");

    rl.question("Escolha uma opcao: ", (opcao) => {
        if (opcao === "1") {
            cadastrarAluno();
        } else if (opcao === "2") {
            listarAluno();
        } else if (opcao == "3") {
            buscarAlunoPorId();
        }

    })

}
function listarAluno() {
    console.log("Listar Alunos")

    if (alunos.length === 0) {
        console.log("nenhum aluno cadastrado")
        mostrarMenu();
        return;
    } else {
        for (let i = 0; i < alunos.length; i++) {
            console.log("\nID: " + alunos[i].id)
            console.log("nome: " + alunos[i].nome)
            console.log("idade: " + alunos[i].idade)
            console.log("turma:" + alunos[i].turma)
            console.log("nota: " + alunos[i].nota)
        }
    }


    mostrarMenu();
}
function cadastrarAluno() {
    console.log("Cadastra Aluno")

    rl.question("Digite o nome do aluno: ", (nome) => {
        rl.question("Digite a idade do aluno", (idade) => {
            rl.question("Digite a turma do aluno", (turma) => {
                rl.question("Digite a nota do aluno", (nota) => {
                    idade = Number(idade);
                    nota = Number(nota);

                    if (nome === "" || idade === "" || idade === "" || nota === "") {
                        console.log("ERRO: Nao preencheu todas as infos");
                        mostrarMenu();
                        return;
                    }

                    if (idade <= 0 || nota < 0 || nota > 10) {
                        console.log("ERRO: idade ou nota invalida")
                        mostrarMenu();
                        return;

                    }

                    let aluno = {
                        id: proximoId,
                        nome: nome,
                        idade: idade,
                        turma: turma,
                        nota: nota,

                    };

                    alunos.push(aluno);
                    proximoId++;

                    console.log("Aluno Cadastrado com sucesso")
                    mostrarMenu();

                })
            })
        })
    })
}

function buscarAlunoPorId() {

    rl.question("Digite o ID do aluno:", (id) => {
        id = Number(id);

        let aluno = encontrarAlunoporId (id);

        if(aluno === null) {
            console.log("Aluno nao encontrado");
            mostrarMenu()
            return
        }
            console.log("\nAluno Encontrado: ")
            console.log("ID: " + aluno.id)
            console.log("nome: " + aluno.nome)
            console.log("idade: " + aluno.idade)
            console.log("turma:" + aluno.turma)
            console.log("nota: " + aluno.nota)

    });
}

function encontrarAlunoporId() {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].id === id) {
            return alunos[i];
    }

    }



}

mostrarMenu();