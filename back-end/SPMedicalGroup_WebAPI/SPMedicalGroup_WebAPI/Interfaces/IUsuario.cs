using SPMedicalGroup_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Interfaces
{
    interface IUsuario
    {
        /// <summary>
        /// Lista todos os Usuarios
        /// </summary>
        /// <returns>Uma lista com todos os Usuarios</returns>
        List<Usuario> ListarTodos();

        /// <summary>
        /// Busca um Usuario pelo id
        /// </summary>
        /// <param name="id">Id do Usuario que será buscado</param>
        /// <returns>Um Usuario com suas informações</returns>
        Usuario BuscarPorId(int id);

        /// <summary>
        /// Cadastra um novo Usuario
        /// </summary>
        /// <param name="usuario">Usuario que será cadastrado</param>
        void Cadastrar(Usuario usuario);

        /// <summary>
        /// Atualiza um Usuario existente
        /// </summary>
        /// <param name="id">Id do Usuario que será atualizado</param>
        /// <param name="usuarioAtualizado">Um Usuario com as novas informações</param>
        void Atualizar(int id, Usuario usuarioAtualizado);

        /// <summary>
        /// Deleta um Usuario existente
        /// </summary>
        /// <param name="id">Id do Usuario que será deletado</param>
        void Deletar(int id);

        /// <summary>
        /// Valida um Usuario de acordo com o e-mail e senha
        /// </summary>
        /// <param name="email">E-mail do Usuario que deseja fazer o Login</param>
        /// <param name="senha">Senha do Usuario que deseja fazer o Login</param>
        /// <returns></returns>
        Usuario Login(string email, string senha);
    }
}
