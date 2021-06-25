using SPMedicalGroup_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Interfaces
{
    interface ISituacao
    {
        /// <summary>
        /// Lista todas as Situacoes
        /// </summary>
        /// <returns>Uma lista com todas as Situacoes</returns>
        List<Situacao> ListarTodos();

        /// <summary>
        /// Busca uma Situacao pelo id
        /// </summary>
        /// <param name="id">Id da Situacao que será buscada</param>
        /// <returns>Uma Situacao com suas informações</returns>
        Situacao BuscarPorId(int id);

        /// <summary>
        /// Cadastra uma nova Situacao
        /// </summary>
        /// <param name="situacao">Situacao que será cadastrada</param>
        void Cadastrar(Situacao situacao);

        /// <summary>
        /// Atualiza uma Situacao existente
        /// </summary>
        /// <param name="id">Id da Situacao que será atualizada</param>
        /// <param name="situacaoAtualizada">Uma Situacao com as novas informações</param>
        void Atualizar(int id, Situacao situacaoAtualizada);

        /// <summary>
        /// Deleta uma Situacao existente
        /// </summary>
        /// <param name="id">Id da Situacao que será deletada</param>
        void Deletar(int id);
    }
}
