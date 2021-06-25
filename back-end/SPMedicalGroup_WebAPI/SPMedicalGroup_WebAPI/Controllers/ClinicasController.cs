using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SPMedicalGroup_WebAPI.Domains;
using SPMedicalGroup_WebAPI.Interfaces;
using SPMedicalGroup_WebAPI.Repositories;
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
    public class ClinicasController : ControllerBase
    {
        private IClinica _ClinicaRepository { get; set; }

        public ClinicasController()
        {
            _ClinicaRepository = new ClinicaRepository();
        }

        /// <summary>
        /// Lista todas as Clinicas
        /// </summary>
        /// <returns>Uma lista com todas as Clinicas</returns>
        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                // Retorna um status code Ok(200) e uma lista de Usuarios
                return Ok(_ClinicaRepository.ListarTodos());
            }
            catch (Exception erro)
            {
                // Retorna um status code BadRequest(400)
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Cadastra uma nova Clinica
        /// </summary>
        /// <param name="clinica">Clinica que será cadastrada</param>
        /// <returns>Um status code Created(201)</returns>
        [HttpPost]
        [Authorize(Roles = "1")]
        public IActionResult Cadastrar(Clinica clinica)
        {
            try
            {
                // Cadastra um novo Usuario
                _ClinicaRepository.Cadastrar(clinica);

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
        /// Deleta uma Clinica existente
        /// </summary>
        /// <param name="id">Id da Clinica que será deletada</param>
        /// <returns>Um status code NoContent(204)</returns>
        [HttpDelete("{id}")]
        [Authorize(Roles = "1")]
        public IActionResult Deletar(int id)
        {
            try
            {
                // Cadastra um novo Usuario
                _ClinicaRepository.Deletar(id);

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
