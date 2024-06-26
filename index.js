let bancoconsulta = [];
let consulta = {
  nomepaciente: "",
  nomemedico: "",
  data: "",
  horario: "",
};

let indiceAtualizar;
let atributoAtualizar;
let opcao = 0;
let step = 0;

console.log(
  `Qual operação você deseja fazer ? 
  1-Inserir consulta
  2-Listar consultas 
  3-Atualizar dados 
  4-Cancelar consulta
`
);

process.stdin.on("data", function (data) {
  let input = data.toString().trim();

  if (!opcao) {
    opcao = Number(input);

    switch (opcao) {
      case 1:
        process.stdout.write("Qual o nome do paciente? \n");
        break;
      case 2:
        console.log("Listar consultas:");
        bancoconsulta.forEach((consulta, index) => {
          console.log(`Consulta ${index}:`);
          console.log(consulta);
        });
        opcao = 0;
        break;
      case 3:
        console.log("Atualizar dados de consulta:");
        console.log("Escolha a consulta que deseja atualizar:");
        bancoconsulta.forEach((consulta, index) => {
          console.log(`${index}: ${consulta.nomepaciente}`);
        });
        break;
      case 4:
        console.log("Cancelar consulta:");
        console.log("Escolha a consulta que deseja cancelar:");
        bancoconsulta.forEach((consulta, index) => {
          console.log(`${index}: ${consulta.nomepaciente}`);
        });
        break;
      default:
        console.log("Opção inválida.");
        opcao = 0;
        break;
    }
  } else {
    switch (opcao) {
      case 1:
        if (step === 0) {
          consulta.nomepaciente = input;
          step++;
          process.stdout.write("Qual o nome do médico? \n");
        } else if (step === 1) {
          consulta.nomemedico = input;
          step++;
          process.stdout.write("Qual a data da consulta? \n");
        } else if (step === 2) {
          consulta.data = input;
          step++;
          process.stdout.write("Qual horário da consulta? \n");
        } else if (step === 3) {
          consulta.horario = input;
          console.log("Consulta inserida com sucesso!");
          bancoconsulta.push({
            nomepaciente: consulta.nomepaciente,
            nomemedico: consulta.nomemedico,
            data: consulta.data,
            horario: consulta.horario,
          });
          console.log(consulta);
          consulta = {
            nomepaciente: "",
            nomemedico: "",
            data: "",
            horario: "",
          };
          step = 0;
          opcao = 0;
        }
        break;
      case 3:
        if (!indiceAtualizar) {
          indiceAtualizar = Number(input);
          console.log(`Você escolheu atualizar a consulta ${indiceAtualizar}.`);
          console.log("Qual atributo você deseja atualizar?");
          console.log("1 - Nome do paciente");
          console.log("2 - Nome do médico");
          console.log("3 - Data da consulta");
          console.log("4 - Horário da consulta");
        } else if (!atributoAtualizar) {
          atributoAtualizar = Number(input);
          switch (atributoAtualizar) {
            case 1:
              console.log("Digite o novo nome do paciente:");
              break;
            case 2:
              console.log("Digite o novo nome do médico:");
              break;
            case 3:
              console.log("Digite a nova data da consulta:");
              break;
            case 4:
              console.log("Digite o novo horário da consulta:");
              break;
            default:
              console.log("Atributo inválido.");
              opcao = 0;
              indiceAtualizar = undefined;
              atributoAtualizar = undefined;
              break;
          }
        } else {
          switch (atributoAtualizar) {
            case 1:
              bancoconsulta[indiceAtualizar].nomepaciente = input;
              break;
            case 2:
              bancoconsulta[indiceAtualizar].nomemedico = input;
              break;
            case 3:
              bancoconsulta[indiceAtualizar].data = input;
              break;
            case 4:
              bancoconsulta[indiceAtualizar].horario = input;
              break;
          }
          console.log("Consulta atualizada com sucesso!");
          console.log(bancoconsulta[indiceAtualizar]);
          indiceAtualizar = undefined;
          atributoAtualizar = undefined;
          opcao = 0;
        }
        break;
      case 4:
        let indiceRemocao = Number(input);
        console.log(`Consulta ${indiceRemocao} cancelada.`);
        bancoconsulta.splice(indiceRemocao, 1);
        console.log("Consultas restantes:");
        console.log(bancoconsulta);
        opcao = 0;
        break;
      default:
        console.log("Opção inválida.");
        opcao = 0;
        break;
    }
  }
});
