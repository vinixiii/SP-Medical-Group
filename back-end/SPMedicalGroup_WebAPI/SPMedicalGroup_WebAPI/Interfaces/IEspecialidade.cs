using SPMedicalGroup_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Interfaces
{
    interface IEspecialidade
    {
        /// <summary>
        /// Lista todas as Especialidades
        /// </summary>
        /// <returns>Uma lista com todas as Especialidades</returns>
        List<Especialidade> ListarTodos();

        /// <summary>
        /// Busca uma Especialidade pelo id
        /// </summary>
        /// <param name="id">Id da Especialidade que será buscada</param>
        /// <returns>Uma Especialidade com suas informações</returns>
        Especialidade BuscarPorId(int id);

        /// <summary>
        /// Cadastra uma nova Especialidade
        /// </summary>
        /// <param name="especialidade">Especialidade que será cadastrada</param>
        void Cadastrar(Especialidade especialidade);

        /// <summary>
        /// Atualiza uma Especialidade existente
        /// </summary>
        /// <param name="id">Id da Especialidade que será atualizada</param>
        /// <param name="especialidadeAtualizada">Uma Especialidade com as novas informações</param>
        void Atualizar(int id, Especialidade especialidadeAtualizada);

        /// <summary>
        /// Deleta uma Especialidade existente
        /// </summary>
        /// <param name="id">Id da Especialidade que será deletada</param>
        void Deletar(int id);
    }
}
