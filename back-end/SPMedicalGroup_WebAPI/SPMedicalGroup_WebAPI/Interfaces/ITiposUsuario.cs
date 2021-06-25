using SPMedicalGroup_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Interfaces
{
    interface ITiposUsuario
    {
        /// <summary>
        /// Lista todos os TiposUsuarios
        /// </summary>
        /// <returns>Uma lista com todos os TiposUsuarios</returns>
        List<TiposUsuario> ListarTodos();

        /// <summary>
        /// Busca um TipoUsuario pelo id
        /// </summary>
        /// <param name="id">Id do TipoUsuario que será buscado</param>
        /// <returns>Um TipoUsuario com suas informações</returns>
        TiposUsuario BuscarPorId(int id);

        /// <summary>
        /// Cadastra um novo TipoUsuario
        /// </summary>
        /// <param name="tipoUsuario">TipoUsuario que será cadastrado</param>
        void Cadastrar(TiposUsuario tipoUsuario);

        /// <summary>
        /// Atualiza um TipoUsuario existente
        /// </summary>
        /// <param name="id">Id do TipoUsuario que será atualizado</param>
        /// <param name="tipoUsuarioAtualizado">Um TipoUsuario com as novas informações</param>
        void Atualizar(int id, TiposUsuario tipoUsuarioAtualizado);

        /// <summary>
        /// Deleta um TipoUsuario existente
        /// </summary>
        /// <param name="id">Id do TipoUsuario que será deletado</param>
        void Deletar(int id);
    }
}
