let bancoconsulta = [];
let consulta = {
  nomepaciente: "",
  nomemedico: "",
  data: "",
  horario: "",
};

let opcao = 0;
let passoConsulta = 0; // Variável para controlar o passo do processo de inserção de consulta

console.log(
  `Qual operação você deseja fazer ? 
  1-Inserir consulta
  2-Listar consultas 
  3-Atualizar dados 
  4-Cancelar consulta
`);

process.stdin.on("data", function (data) {
  let input = data.toString().trim();
  
  if (!opcao) {
    opcao = Number(input);
    switch (opcao){
        case 1:
       process.stdout.write("Qual o nome do paciente? \n");
    }
  } else {
    switch (opcao) {
      case 1:
        if (passoConsulta === 0) {
          consulta.nomepaciente = input;
          passoConsulta++;
          process.stdout.write("Qual o nome do médico? \n");
        } else if (passoConsulta === 1) {
          consulta.nomemedico = input;
          passoConsulta++;
          process.stdout.write("Qual a data da consulta? \n");
        } else if (passoConsulta === 2) {
            process.stdout.write("Qual horário da consulta? \n");
          consulta.data = input;
          passoConsulta++;
        } else if (passoConsulta === 3) {
          
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
          passoConsulta = 0;
          opcao = 0;
        }
        break;
      case 2:
        console.log("Listar consultas:");
        console.log(bancoconsulta);
        opcao = 0;
        break;
      case 3:
        console.log("Opção de atualização de dados selecionada.");
        opcao = 0;
        break;
      case 4:
        console.log("Opção de cancelamento de consulta selecionada.");
        opcao = 0;
        break;
      default:
        console.log("Opção inválida.");
        opcao = 0;
        break;
    }
  }
});
