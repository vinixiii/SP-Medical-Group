using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace SPMedicalGroup_WebAPI.Domains
{
    public partial class Consulta
    {
        public int IdConsulta { get; set; }

        [Required(ErrorMessage = "É obrigatório informar um id do paciente!")]
        public int IdPaciente { get; set; }

        [Required(ErrorMessage = "É obrigatório informar o id do médico!")]
        public int IdMedico { get; set; }

        public int? IdSituacao { get; set; }

        [Required(ErrorMessage = "É obrigatório informar uma data de agendamento!")]
        public DateTime DataAgendamento { get; set; }

        public string Descricao { get; set; }

        public virtual Medico IdMedicoNavigation { get; set; }
        public virtual Paciente IdPacienteNavigation { get; set; }
        public virtual Situacao IdSituacaoNavigation { get; set; }
    }
}
