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
    public class PacienteRepository : IPaciente
    {
        SPMedicalGroupContext ctx = new SPMedicalGroupContext();

        public void Atualizar(int id, Paciente pacienteAtualizado)
        {
            throw new NotImplementedException();
        }

        public Paciente BuscarPorId(int id)
        {
            return ctx.Pacientes.Find(id);
        }

        public void Cadastrar(UsuarioPacienteVM up)
        {
            Usuario u = new Usuario
            {
                IdTipoUsuario = up.IdTipoUsuario,
                Email = up.Email,
                Senha = up.Senha
            };

            ctx.Usuarios.Add(u);

            ctx.SaveChanges();

            Paciente p = new Paciente
            {
                IdUsuario = u.IdUsuario,
                Nome = up.Nome,
                DataNascimento = up.DataNascimento,
                Telefone = up.Telefone,
                Rg = up.Rg,
                Cpf = up.Cpf,
                Cep = up.Cep,
                Endereco = up.Endereco
            };

            ctx.Pacientes.Add(p);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Paciente paciente = BuscarPorId(id);

            ctx.Pacientes.Remove(paciente);

            ctx.SaveChanges();
        }

        public List<Paciente> ListarTodos()
        {
            return ctx.Pacientes.ToList();
        }
    }
}
