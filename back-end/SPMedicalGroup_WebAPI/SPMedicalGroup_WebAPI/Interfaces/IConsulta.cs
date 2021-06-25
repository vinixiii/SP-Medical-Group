using SPMedicalGroup_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Interfaces
{
    interface IConsulta
    {
        /// <summary>
        /// Lista todas as Consultas
        /// </summary>
        /// <returns>Uma lista com todas as Consultas</returns>
        List<Consulta> ListarTodos();

        /// <summary>
        /// Busca uma Consulta pelo id
        /// </summary>
        /// <param name="id">Id da Consulta que será buscada</param>
        /// <returns>Uma Consulta com suas informações</returns>
        Consulta BuscarPorId(int id);

        /// <summary>
        /// Cadastra uma nova Consulta
        /// </summary>
        /// <param name="consulta">Consulta que será cadastrada</param>
        void Cadastrar(Consulta consulta);

        /// <summary>
        /// Atualiza uma Consulta existente
        /// </summary>
        /// <param name="id">Id da Consulta que será atualizada</param>
        /// <param name="consultaAtualizada">Uma Consulta com as novas informações</param>
        void Atualizar(int id, Consulta consultaAtualizada);

        /// <summary>
        /// Deleta uma Consulta existente
        /// </summary>
        /// <param name="id">Id da Consulta que será deletada</param>
        void Deletar(int id);

        /// <summary>
        /// Lista as consultas de um Usuario logado
        /// </summary>
        /// <param name="id">Id do Usuario logado que terá as consultas listadas</param>
        /// <returns></returns>
        List<Consulta> MinhasConsultas(int id);

        /// <summary>
        /// Atualiza a descrição de uma Consulta
        /// </summary>
        /// <param name="id">Id da Consulta que terá a descrição alterada</param>
        /// <param name="descricao">Descrição que será atribuida à Consulta</param>
        void AtualizarDescricao(int id, string descricao);

        /// <summary>
        /// Atualiza a situação de uma consulta
        /// </summary>
        /// <param name="idConsulta">Id da consulta que terá a situação atualizada</param>
        /// <param name="idSituacao">Id da nova situação dessa Consulta</param>
        void AtualizarSituacao(int idConsulta, int idSituacao);
    }
}
