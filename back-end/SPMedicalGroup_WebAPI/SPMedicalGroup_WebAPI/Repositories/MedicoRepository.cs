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
    public class MedicoRepository : IMedico
    {
        SPMedicalGroupContext ctx = new SPMedicalGroupContext();

        public void Atualizar(int id, Medico medicoAtualizado)
        {
            throw new NotImplementedException();
        }

        public Medico BuscarPorId(int id)
        {
            return ctx.Medicos.Find(id);
        }

        public void Cadastrar(UsuarioMedicoVM um)
        {
            Usuario u = new Usuario
            {
                IdTipoUsuario = um.IdTipoUsuario,
                Email = um.Email,
                Senha = um.Senha
            };

            ctx.Usuarios.Add(u);

            ctx.SaveChanges();

            Medico m = new Medico
            {
                IdUsuario = u.IdUsuario,
                IdClinica = um.IdClinica,
                IdEspecialidade = um.IdEspecialidade,
                Nome = um.Nome,
                Crm = um.Crm,
                Estado = um.Estado
            };

            ctx.Medicos.Add(m);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Medico medico = BuscarPorId(id);

            ctx.Medicos.Remove(medico);

            ctx.SaveChanges();
        }

        public List<Medico> ListarTodos()
        {
            return ctx.Medicos
                .Select(m => new Medico
                {
                    IdMedico = m.IdMedico,
                    IdUsuario = m.IdUsuario,
                    IdClinica = m.IdClinica,
                    IdEspecialidade = m.IdEspecialidade,
                    Nome = m.Nome,
                    Crm = m.Crm,
                    Estado = m.Estado,

                    IdUsuarioNavigation = new Usuario
                    {
                        IdUsuario = m.IdUsuarioNavigation.IdUsuario,
                        IdTipoUsuario = m.IdUsuarioNavigation.IdTipoUsuario,
                        Email = m.IdUsuarioNavigation.Email
                    },

                    IdClinicaNavigation = new Clinica
                    {
                        IdClinica = m.IdClinicaNavigation.IdClinica,
                        Nome = m.IdClinicaNavigation.Nome
                    },

                    IdEspecialidadeNavigation = new Especialidade
                    {
                        IdEspecialidade = m.IdEspecialidadeNavigation.IdEspecialidade,
                        Titulo = m.IdEspecialidadeNavigation.Titulo
                    }
                })
                .ToList();
        }
    }
}
