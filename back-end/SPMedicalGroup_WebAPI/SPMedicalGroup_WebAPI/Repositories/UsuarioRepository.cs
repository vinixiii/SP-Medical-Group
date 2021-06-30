using Microsoft.EntityFrameworkCore;
using SPMedicalGroup_WebAPI.Contexts;
using SPMedicalGroup_WebAPI.Domains;
using SPMedicalGroup_WebAPI.Interfaces;
using SPMedicalGroup_WebAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Repositories
{
    public class UsuarioRepository : IUsuario
    {
        SPMedicalGroupContext ctx = new SPMedicalGroupContext();

        public void Atualizar(int id, Usuario usuarioAtualizado)
        {
            throw new NotImplementedException();
        }

        public Medico BuscarMedicoPorId(int id)
        {
            return ctx.Medicos.FirstOrDefault(m => m.IdUsuario == id);
        }

        public Paciente BuscarPacientePorId(int id)
        {
            return ctx.Pacientes.FirstOrDefault(p => p.IdUsuario == id);
        }

        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuarios.Find(id);
        }

        public void Cadastrar(Usuario usuario)
        {
            ctx.Usuarios.Add(usuario);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Usuario usuario = BuscarPorId(id);

            ctx.Usuarios.Remove(usuario);

            ctx.SaveChanges();
        }

        public List<Usuario> ListarTodos()
        {
            return ctx.Usuarios
                .Include(u => u.IdTipoUsuarioNavigation)
                .Select(u => new Usuario
                {
                    IdUsuario = u.IdUsuario,
                    IdTipoUsuario = u.IdTipoUsuario,
                    Email = u.Email,
                    IdTipoUsuarioNavigation = new TiposUsuario
                    {
                        IdTipoUsuario = u.IdTipoUsuarioNavigation.IdTipoUsuario,
                        Titulo = u.IdTipoUsuarioNavigation.Titulo
                    }
                })
                .ToList();
        }

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
