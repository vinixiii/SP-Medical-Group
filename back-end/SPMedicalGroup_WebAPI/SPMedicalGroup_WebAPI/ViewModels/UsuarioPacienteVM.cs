using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.ViewModels
{
    public class UsuarioPacienteVM
    {
        // Usuario
        public int IdTipoUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        //Paciente
        public string Nome { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Telefone { get; set; }
        public string Rg { get; set; }
        public string Cpf { get; set; }
        public string Cep { get; set; }
        public string Endereco { get; set; }
    }
}
