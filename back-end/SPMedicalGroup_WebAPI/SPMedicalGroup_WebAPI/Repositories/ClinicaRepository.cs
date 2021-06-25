using SPMedicalGroup_WebAPI.Contexts;
using SPMedicalGroup_WebAPI.Domains;
using SPMedicalGroup_WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Repositories
{
    public class ClinicaRepository : IClinica
    {
        SPMedicalGroupContext ctx = new SPMedicalGroupContext();

        public void Atualizar(int id, Clinica clinicaAtualizada)
        {
            throw new NotImplementedException();
        }

        public Clinica BuscarPorId(int id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Clinica clinica)
        {
            ctx.Clinicas.Add(clinica);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Clinica clinica = BuscarPorId(id);

            ctx.Clinicas.Remove(clinica);

            ctx.SaveChanges();
        }

        public List<Clinica> ListarTodos()
        {
            return ctx.Clinicas.ToList();
        }
    }
}
