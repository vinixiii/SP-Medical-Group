using SPMedicalGroup_WebAPI.Domains;
using SPMedicalGroup_WebAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Interfaces
{
    interface IPaciente
    {
        /// <summary>
        /// Lista todos os Pacientes
        /// </summary>
        /// <returns>Uma lista com todos os Pacientes</returns>
        List<Paciente> ListarTodos();

        /// <summary>
        /// Busca um Paciente pelo id
        /// </summary>
        /// <param name="id">Id do Paciente que será buscado</param>
        /// <returns>Um Paciente com suas informações</returns>
        Paciente BuscarPorId(int id);

        /// <summary>
        /// Cadastra um novo Paciente
        /// </summary>
        /// <param name="up">Paciente que será cadastrado</param>
        void Cadastrar(UsuarioPacienteVM up);

        /// <summary>
        /// Atualiza um Paciente existente
        /// </summary>
        /// <param name="id">Id do Paciente que será atualizado</param>
        /// <param name="pacienteAtualizado">Um Paciente com as novas informações</param>
        void Atualizar(int id, Paciente pacienteAtualizado);

        /// <summary>
        /// Deleta um Paciente existente
        /// </summary>
        /// <param name="id">Id do Paciente que será deletado</param>
        void Deletar(int id);
    }
}
