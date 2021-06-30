using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SPMedicalGroup_WebAPI.Domains;
using SPMedicalGroup_WebAPI.Interfaces;
using SPMedicalGroup_WebAPI.Repositories;
using SPMedicalGroup_WebAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Controllers
{
    // Define que a resposta da API será no formato JSON
    [Produces("application/json")]

    // Define que a rota de uma requesição será no formato: dominio/api/nomedocontroller
    [Route("api/[controller]")]

    // Define que é um Controller de API
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuario _UsuarioRepository { get; set; }

        public LoginController()
        {
            _UsuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Valida um Usuario de acordo com o e-mail e senha
        /// </summary>
        /// <param name="login">Objeto LoginViewModel que contém o e-mail e a senha do usuário</param>
        /// <returns>Um Token com as informações do Usuario ou um status code NotFound(400) com uma mensagem de erro personalizada</returns>
        [HttpPost]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                // Valida o Usuario de acordo com o e-mail e senha
                Usuario usuarioLogin = _UsuarioRepository.Login(login.Email, login.Senha);

                Paciente pacienteLogin = new Paciente();
                Medico medicoLogin = new Medico();

                if (usuarioLogin.IdTipoUsuario == 2)
                {
                    pacienteLogin = _UsuarioRepository.BuscarPacientePorId(usuarioLogin.IdUsuario);
                }

                if (usuarioLogin.IdTipoUsuario == 3)
                {
                    medicoLogin = _UsuarioRepository.BuscarMedicoPorId(usuarioLogin.IdUsuario);
                }

                if (usuarioLogin == null)
                {
                    // Retorna um status code NotFound(400) com uma mensagem de erro personalizada
                    return NotFound("E-mail ou senha inválidos!");
                };

                // Payload -> Define os dados que serão definidos no Token
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioLogin.IdUsuario.ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, usuarioLogin.Email),
                    new Claim(ClaimTypes.Role, usuarioLogin.IdTipoUsuario.ToString()),
                    new Claim("role", usuarioLogin.IdTipoUsuario.ToString()),
                    new Claim("nomePaciente", usuarioLogin.IdTipoUsuario == 2 ? $"{pacienteLogin.Nome}" : "" ),
                    new Claim("nomeMedico", usuarioLogin.IdTipoUsuario == 3 ? $"{medicoLogin.Nome}" : "" ),
                };

                // Define a chave de acesso do Token
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("spmed-chave-de-acesso"));

                // Header -> Define as credenciais do Token
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                // Define a composição do Token
                var token = new JwtSecurityToken(
                    issuer: "SPMedicalGroup",
                    audience: "SPMedicalGroup",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds
                );

                // Retorna um status code Ok(200) com o token criado
                return Ok(new
                {
                    // Gera o token com base nas informações definidas anteriormente e retorna junto com o status code
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception erro)
            {
                // Retorna um status code BadRequest(400)
                return BadRequest(erro);
            }
        }
    }
}
