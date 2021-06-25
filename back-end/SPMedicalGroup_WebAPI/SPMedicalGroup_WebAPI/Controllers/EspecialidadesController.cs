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
    public class EspecialidadesController : ControllerBase
    {
        private IEspecialidade _EspecialidadeRepository { get; set; }

        public EspecialidadesController()
        {
            _EspecialidadeRepository = new EspecialidadeRepository();
        }

        /// <summary>
        /// Lista todas as Especialidades
        /// </summary>
        /// <returns>Uma lista com todas as Especialidades</returns>
        [HttpGet]
        [Authorize(Roles = "1")]
        public IActionResult ListarTodos()
        {
            try
            {
                // Retorna um status code Ok(200) e uma lista de Especialidades
                return Ok(_EspecialidadeRepository.ListarTodos());
            }
            catch (Exception erro)
            {
                // Retorna um status code BadRequest(400)
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Cadastra uma nova Especialidade
        /// </summary>
        /// <param name="especialidade">Especialidade que será cadastrada</param>
        /// <returns>Um status code Created(201)</returns>
        [HttpPost]
        [Authorize(Roles = "1")]
        public IActionResult Cadastrar(Especialidade especialidade)
        {
            try
            {
                // Cadastra uma nova Especialidade
                _EspecialidadeRepository.Cadastrar(especialidade);

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
        /// Deleta uma Especialidade existente
        /// </summary>
        /// <param name="id">Id da Especialidade que será deletada</param>
        /// <returns>Um status code NoContent(204)</returns>
        [HttpDelete("{id}")]
        [Authorize(Roles = "1")]
        public IActionResult Deletar(int id)
        {
            try
            {
                // Cadastra uma nova Especialidade
                _EspecialidadeRepository.Deletar(id);

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
