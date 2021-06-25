using SPMedicalGroup_WebAPI.Domains;
using SPMedicalGroup_WebAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Interfaces
{
    interface IMedico
    {
        /// <summary>
        /// Lista todos os Medicos
        /// </summary>
        /// <returns>Uma lista com todos os Medicos</returns>
        List<Medico> ListarTodos();

        /// <summary>
        /// Busca um Medico pelo id
        /// </summary>
        /// <param name="id">Id do Medico que será buscado</param>
        /// <returns>Um Medico com suas informações</returns>
        Medico BuscarPorId(int id);

        /// <summary>
        /// Cadastra um novo Medico
        /// </summary>
        /// <param name="um">Medico que será cadastrado</param>
        void Cadastrar(UsuarioMedicoVM um);

        /// <summary>
        /// Atualiza um Medico existente
        /// </summary>
        /// <param name="id">Id do Medico que será atualizado</param>
        /// <param name="medicoAtualizado">Um Medico com as novas informações</param>
        void Atualizar(int id, Medico medicoAtualizado);

        /// <summary>
        /// Deleta um Medico existente
        /// </summary>
        /// <param name="id">Id do Medico que será deletado</param>
        void Deletar(int id);
    }
}
