using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SPMedicalGroup_WebAPI.Domains;
using SPMedicalGroup_WebAPI.Interfaces;
using SPMedicalGroup_WebAPI.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
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
    public class ConsultasController : ControllerBase
    {
        private IConsulta _ConsultaRepository { get; set; }

        public ConsultasController()
        {
            _ConsultaRepository = new ConsultaRepository();
        }

        /// <summary>
        /// Lista todas as Consultas
        /// </summary>
        /// <returns>Um status code Ok(200) e uma lista de Consultas</returns>
        [HttpGet]
        // [Authorize(Roles = "1")]
        public IActionResult ListarTodos()
        {
            try
            {
                // Retorna um status code Ok(200) e uma lista de Consultas
                return Ok(_ConsultaRepository.ListarTodos());
            }
            catch (Exception erro)
            {
                // Retorna um status code BadRequest(400)
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Cadastra uma nova Consulta
        /// </summary>
        /// <param name="consulta">Consulta que será cadastrada</param>
        /// <returns>Um status code Created(201)</returns>
        [HttpPost]
        [Authorize(Roles = "1")]
        public IActionResult Cadastrar(Consulta consulta)
        {
            try
            {
                // Cadastra uma nova Consulta
                _ConsultaRepository.Cadastrar(consulta);

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
        /// Deleta uma Consulta existente
        /// </summary>
        /// <param name="id">Id da Consulta que será deletada</param>
        /// <returns>Um status code NoContent(204)</returns>
        [HttpDelete("{id}")]
        [Authorize(Roles = "1")]
        public IActionResult Deletar(int id)
        {
            try
            {
                // Cadastra um novo Usuario
                _ConsultaRepository.Deletar(id);

                // Retorna um status code NoContent(204)
                return StatusCode(204);
            }
            catch (Exception erro)
            {
                // Retorna um status code BadRequest(400)
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Atualiza a situação de uma Consulta
        /// </summary>
        /// <param name="idConsulta">Id da consulta que terá a situação atualizada</param>
        /// <param name="idSituacao">Id da nova situação dessa Consulta</param>
        /// <returns>Um status code NoContent(204)</returns>
        [HttpPatch("{idConsulta}/{idSituacao}")]
        [Authorize(Roles = "1")]
        public IActionResult AtualizarSituacao(int idConsulta, int idSituacao)
        {
            try
            {
                // Atualiza a situação de uma consulta
                _ConsultaRepository.AtualizarSituacao(idConsulta, idSituacao);

                // Retorna um status code NoContent(204)
                return StatusCode(204);
            }
            catch (Exception erro)
            {
                // Retorna um status code BadRequest(400)
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Atualiza a descrição de uma Consulta
        /// </summary>
        /// <param name="id">Id da Consulta que terá a descrição alterada</param>
        /// <param name="consulta">Objeto Consulta com a descrição que será atribuida à Consulta atualizada</param>
        /// <returns></returns>
        [HttpPatch("{id}")]
        [Authorize(Roles = "3")]
        public IActionResult AtualizarDescricao(int id, Consulta consulta)
        {
            try
            {
                // Atualiza a descrição de uma Consulta
                _ConsultaRepository.AtualizarDescricao(id, consulta.Descricao);

                // Retorna um status code NoContent(204)
                return StatusCode(204);
            }
            catch (Exception erro)
            {
                // Retorna um status code BadRequest(400)
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Lista as Consultas de um Usuario logado
        /// </summary>
        /// <returns>Retorna um status code Ok(200) e uma lista de Consultas</returns>
        [HttpGet("minhas-consultas")]
        [Authorize(Roles = "2, 3")]
        public IActionResult MinhasConsultas()
        {
            try
            {
                // Cria uma variável idUsuario que recebe o valor do ID do usuário que está logado
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                // Retorna um status code Ok(200) e uma lista de Consultas
                return Ok(_ConsultaRepository.MinhasConsultas(idUsuario));
            }
            catch (Exception erro)
            {
                // Retorna um status code BadRequest(400)
                return BadRequest(erro);
            }
        }
    }
}
