USE SP_Medical_Group;
GO

SELECT * FROM TiposUsuarios;
SELECT * FROM Usuarios;
SELECT * FROM Pacientes;
SELECT * FROM Clinicas;
SELECT * FROM Especialidades;
SELECT * FROM Medicos;
SELECT * FROM Situacoes;
SELECT * FROM Consultas;

-- Nº de usuários
SELECT COUNT(IdUsuario) FROM Usuarios;

-- Usuários
SELECT IdUsuario, TU.Titulo AS Tipo, Email FROM Usuarios U
INNER JOIN TiposUsuarios TU
ON U.IdTipoUsuario = TU.IdTipoUsuario;

-- Pacientes
SELECT 
	IdPaciente, 
	Nome, 
	U.Email,
	DATEDIFF(year, DataNascimento, GETDATE()) AS [Idade],
	FORMAT(DataNascimento, 'd', 'pt-bt') AS [Data de Nascimento],
	Telefone,
	RG,
	CPF,
	CEP,
	Endereco
FROM Pacientes P
INNER JOIN Usuarios U
ON P.IdUsuario = U.IdUsuario;

-- Clínicas
SELECT 
	IdClinica,
	Nome,
	CNPJ,
	RazaoSocial,
	CONVERT(VARCHAR(5), HorarioAbertura, 108) AS [Horário de Abertura],
	CONVERT(VARCHAR(5), HorarioFechamento, 108) AS [Horário de Fechamento],
	Endereco
FROM Clinicas;

-- Médicos
SELECT 
	IdMedico,
	M.Nome,
	U.Email,
	CRM,
	Estado,
	E.Titulo AS Especialidade,
	C.Nome AS [Clínica]
FROM Medicos M
INNER JOIN Usuarios U
ON M.IdUsuario = U.IdUsuario
INNER JOIN Clinicas C
ON M.IdClinica = C.IdClinica
INNER JOIN Especialidades E
ON M.IdEspecialidade = E.IdEspecialidade;

-- Consultas
SELECT
	IdConsulta,
	P.Nome AS Paciente,
	M.Nome AS [Médico],
	S.Titulo AS [Situação],
	FORMAT(DataAgendamento, 'd', 'pt-bt') AS [Data de Agendamento],
	FORMAT(DataAgendamento, 'hh:mm') AS [Horário],
	Descricao
FROM Consultas C
INNER JOIN Pacientes P
ON C.IdPaciente = P.IdPaciente
INNER JOIN Medicos M
ON C.IdMedico = M.IdMedico
INNER JOIN Situacoes S
ON C.IdSituacao = S.IdSituacao;

-- Quantidade de médicos em determinada especialidade
SELECT dbo.QuantidadeDeMedicos('Anestesiologia') AS [Quantidade de Médicos];

-- Nome e idade de um paciente de acordo com email
EXEC BuscaIdade 'henrique@gmail.com'
