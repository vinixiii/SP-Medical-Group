using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SPMedicalGroup_WebAPI.Interfaces;
using SPMedicalGroup_WebAPI.Repositories;
using SPMedicalGroup_WebAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMedicalGroup_WebAPI.Controllers
{
    // Define que a resposta da API será no formato JSON
    [Produces("application/json")]

    // Define que a rota de uma requesição será no formato: dominio/api/nomedocontroller
    [Route("api/[controller]")]

    // Define que é um Controller de API
    [ApiController]
    public class PacientesController : ControllerBase
    {
        private IPaciente _PacienteRepository { get; set; }

        public PacientesController()
        {
            _PacienteRepository = new PacienteRepository();
        }

        /// <summary>
        /// Lista todos os Pacientes
        /// </summary>
        /// <returns>Uma lista com todos os Pacientes</returns>
        [HttpGet]
        [Authorize(Roles = "1")]
        public IActionResult ListarTodos()
        {
            try
            {
                // Retorna um status code Ok(200) e uma lista de Pacientes
                return Ok(_PacienteRepository.ListarTodos());
            }
            catch (Exception erro)
            {
                // Retorna um status code BadRequest(400)
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Cadastra um novo Usuario/Paciente
        /// </summary>
        /// <param name="up">Usuario/Paciente que será cadastrado</param>
        /// <returns>Um status code Created(201)</returns>
        [HttpPost]
        [Authorize(Roles = "1")]
        public IActionResult Cadastrar(UsuarioPacienteVM up)
        {
            try
            {
                // Cadastra um novo Usuario
                _PacienteRepository.Cadastrar(up);

                // Retorna um status code Created(201)
                return StatusCode(201);
            }
            catch (Exception erro)
            {
                // Retorna um status code BadRequest(400)
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Deleta um Paciente existente
        /// </summary>
        /// <param name="id">Id do Paciente que será deletado</param>
        /// <returns>Um status code NoContent(204)</returns>
        [HttpDelete("{id}")]
        [Authorize(Roles = "1")]
        public IActionResult Deletar(int id)
        {
            try
            {
                // Cadastra um novo Paciente
                _PacienteRepository.Deletar(id);

                // Retorna um status code NoContent(204)
                return StatusCode(204);
            }
            catch (Exception erro)
            {
                // Retorna um status code BadRequest(400)
                return BadRequest(erro);
            }
        }
    }
}
