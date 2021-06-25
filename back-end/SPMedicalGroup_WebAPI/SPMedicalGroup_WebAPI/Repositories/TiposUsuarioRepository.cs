using SPMedicalGroup_WebAPI.Contexts;
using SPMedicalGroup_WebAPI.Domains;
using SPMedicalGroup_WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Repositories
{
    public class TiposUsuarioRepository : ITiposUsuario
    {
        SPMedicalGroupContext ctx = new SPMedicalGroupContext();

        public void Atualizar(int id, TiposUsuario tipoUsuarioAtualizado)
        {
            TiposUsuario tipoUsuario = BuscarPorId(id);

            if (tipoUsuarioAtualizado.Titulo != null)
            {
                tipoUsuario.IdTipoUsuario = tipoUsuarioAtualizado.IdTipoUsuario;
                tipoUsuario.Titulo = tipoUsuarioAtualizado.Titulo;
            }

            ctx.TiposUsuarios.Update(tipoUsuario);

            ctx.SaveChanges();
        }

        public TiposUsuario BuscarPorId(int id)
        {
            return ctx.TiposUsuarios.Find(id);
        }

        public void Cadastrar(TiposUsuario tipoUsuario)
        {
            ctx.TiposUsuarios.Add(tipoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            TiposUsuario tipoUsuario = BuscarPorId(id);

            ctx.TiposUsuarios.Remove(tipoUsuario);

            ctx.SaveChanges();
        }

        public List<TiposUsuario> ListarTodos()
        {
            return ctx.TiposUsuarios.ToList();
        }
    }
}
