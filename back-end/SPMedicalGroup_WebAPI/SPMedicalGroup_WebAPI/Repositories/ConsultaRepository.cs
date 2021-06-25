using Microsoft.EntityFrameworkCore;
using SPMedicalGroup_WebAPI.Contexts;
using SPMedicalGroup_WebAPI.Domains;
using SPMedicalGroup_WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Repositories
{
    public class ConsultaRepository : IConsulta
    {
        SPMedicalGroupContext ctx = new SPMedicalGroupContext();

        public void Atualizar(int id, Consulta consultaAtualizada)
        {
            throw new NotImplementedException();
        }

        public void AtualizarDescricao(int id, string descricao)
        {
            Consulta consulta = BuscarPorId(id);

            Console.WriteLine(id.ToString(), descricao);

            if (consulta != null)
            {
                consulta.Descricao = descricao;
            }

            ctx.Consultas.Update(consulta);

            ctx.SaveChanges();
        }

        public void AtualizarSituacao(int idConsulta, int idSituacao)
        {
            Consulta consulta = BuscarPorId(idConsulta);

            if (consulta != null)
            {
                consulta.IdSituacao = idSituacao;
            }

            ctx.Consultas.Update(consulta);

            ctx.SaveChanges();
        }

        public Consulta BuscarPorId(int id)
        {
            return ctx.Consultas.Find(id);
        }

        public void Cadastrar(Consulta consulta)
        {
            consulta.IdSituacao = 1;

            ctx.Consultas.Add(consulta);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Consulta consulta = BuscarPorId(id);

            ctx.Consultas.Remove(consulta);

            ctx.SaveChanges();
        }

        public List<Consulta> ListarTodos()
        {
            return ctx.Consultas
                .Select(c => new Consulta
                {
                    IdConsulta = c.IdConsulta,
                    IdMedico = c.IdMedico,
                    IdPaciente = c.IdPaciente,
                    IdSituacao = c.IdSituacao,
                    DataAgendamento = c.DataAgendamento,
                    Descricao = c.Descricao,

                    IdMedicoNavigation = new Medico
                    {
                        IdMedico = c.IdMedicoNavigation.IdMedico,
                        IdUsuario = c.IdMedicoNavigation.IdUsuario,
                        IdEspecialidade = c.IdMedicoNavigation.IdEspecialidade,
                        Nome = c.IdMedicoNavigation.Nome,
                        Crm = c.IdMedicoNavigation.Crm,

                        IdEspecialidadeNavigation = new Especialidade
                        {
                            IdEspecialidade = c.IdMedicoNavigation.IdEspecialidadeNavigation.IdEspecialidade,
                            Titulo = c.IdMedicoNavigation.IdEspecialidadeNavigation.Titulo
                        }
                    },

                    IdPacienteNavigation = new Paciente
                    {
                        IdPaciente = c.IdPacienteNavigation.IdPaciente,
                        IdUsuario = c.IdPacienteNavigation.IdUsuario,
                        Nome = c.IdPacienteNavigation.Nome
                    },

                    IdSituacaoNavigation = new Situacao {
                        IdSituacao = c.IdSituacaoNavigation.IdSituacao,
                        Titulo = c.IdSituacaoNavigation.Titulo
                    }
                })
                .ToList();
        }

        public List<Consulta> MinhasConsultas(int id)
        {
            return ctx.Consultas
                .Select(c => new Consulta
                {
                    IdConsulta = c.IdConsulta,
                    IdMedico = c.IdMedico,
                    IdPaciente = c.IdPaciente,
                    IdSituacao = c.IdSituacao,
                    DataAgendamento = c.DataAgendamento,
                    Descricao = c.Descricao,

                    IdPacienteNavigation = new Paciente
                    {
                        IdPaciente = c.IdPacienteNavigation.IdPaciente,
                        Nome = c.IdPacienteNavigation.Nome,
                        IdUsuario = c.IdPacienteNavigation.IdUsuario
                    },

                    IdMedicoNavigation = new Medico
                    {
                        IdMedico = c.IdMedicoNavigation.IdMedico,
                        IdUsuario = c.IdMedicoNavigation.IdUsuario,
                        IdEspecialidade = c.IdMedicoNavigation.IdEspecialidade,
                        Nome = c.IdMedicoNavigation.Nome,
                        Crm = c.IdMedicoNavigation.Crm,

                        IdEspecialidadeNavigation = new Especialidade
                        {
                            IdEspecialidade = c.IdMedicoNavigation.IdEspecialidadeNavigation.IdEspecialidade,
                            Titulo = c.IdMedicoNavigation.IdEspecialidadeNavigation.Titulo
                        }                    
                    },

                    IdSituacaoNavigation = new Situacao {
                        IdSituacao = c.IdSituacaoNavigation.IdSituacao,
                        Titulo = c.IdSituacaoNavigation.Titulo
                    }
                })
                .Where(c => c.IdPacienteNavigation.IdUsuario == id || c.IdMedicoNavigation.IdUsuario == id)
                .ToList();
        }
    }
}
