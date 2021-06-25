using SPMedicalGroup_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Interfaces
{
    interface IClinica
    {
        /// <summary>
        /// Lista todas as Clinicas
        /// </summary>
        /// <returns>Uma lista com todas as Clinicas</returns>
        List<Clinica> ListarTodos();

        /// <summary>
        /// Busca uma Clinica pelo id
        /// </summary>
        /// <param name="id">Id da Clinica que será buscada</param>
        /// <returns>Uma Clinica com suas informações</returns>
        Clinica BuscarPorId(int id);

        /// <summary>
        /// Cadastra uma nova Clinica
        /// </summary>
        /// <param name="clinica">Clinica que será cadastrada</param>
        void Cadastrar(Clinica clinica);

        /// <summary>
        /// Atualiza uma Clinica existente
        /// </summary>
        /// <param name="id">Id da Clinica que será atualizada</param>
        /// <param name="clinicaAtualizada">Uma Clinica com as novas informações</param>
        void Atualizar(int id, Clinica clinicaAtualizada);

        /// <summary>
        /// Deleta uma Clinica existente
        /// </summary>
        /// <param name="id">Id da Clinica que será deletada</param>
        void Deletar(int id);
    }
}
