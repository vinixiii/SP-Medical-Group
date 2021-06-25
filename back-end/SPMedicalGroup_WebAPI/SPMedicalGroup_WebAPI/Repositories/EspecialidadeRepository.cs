using SPMedicalGroup_WebAPI.Contexts;
using SPMedicalGroup_WebAPI.Domains;
using SPMedicalGroup_WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Repositories
{
    public class EspecialidadeRepository : IEspecialidade
    {
        SPMedicalGroupContext ctx = new SPMedicalGroupContext();

        public void Atualizar(int id, Especialidade especialidadeAtualizada)
        {
            throw new NotImplementedException();
        }

        public Especialidade BuscarPorId(int id)
        {
            return ctx.Especialidades.Find(id);
        }

        public void Cadastrar(Especialidade especialidade)
        {
            ctx.Especialidades.Add(especialidade);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Especialidade especialidade = BuscarPorId(id);

            ctx.Especialidades.Remove(especialidade);

            ctx.SaveChanges();
        }

        public List<Especialidade> ListarTodos()
        {
            return ctx.Especialidades.ToList();
        }
    }
}
