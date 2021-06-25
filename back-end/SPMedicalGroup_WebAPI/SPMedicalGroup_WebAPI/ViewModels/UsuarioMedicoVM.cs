using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.ViewModels
{
    public class UsuarioMedicoVM
    {
        // Usuario
        public int IdTipoUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        //Médico
        public int IdClinica { get; set; }
        public int IdEspecialidade { get; set; }
        public string Nome { get; set; }
        public string Crm { get; set; }
        public string Estado { get; set; }
    }
}
