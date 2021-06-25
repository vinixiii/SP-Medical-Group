CREATE DATABASE SP_Medical_Group;
GO

USE SP_Medical_Group;
GO

CREATE TABLE TiposUsuarios
(
	IdTipoUsuario		INT PRIMARY KEY IDENTITY,
	Titulo				VARCHAR(100) NOT NULL
);
GO

CREATE TABLE Usuarios
(
	IdUsuario			INT PRIMARY KEY IDENTITY,
	IdTipoUsuario		INT FOREIGN KEY REFERENCES TiposUsuarios (IdTipoUsuario) NOT NULL,
	Email				VARCHAR(150) NOT NULL,
	Senha				VARCHAR(150) NOT NULL
);
GO

CREATE TABLE Pacientes
(
	IdPaciente			INT PRIMARY KEY IDENTITY,
	IdUsuario			INT FOREIGN KEY REFERENCES Usuarios (IdUsuario) NOT NULL,
	Nome				VARCHAR(250) NOT NULL,
	DataNascimento		DATE NOT NULL,
	Telefone			VARCHAR(15) NOT NULL,
	RG					CHAR(9) NOT NULL,
	CPF					CHAR(11) NOT NULL,
	CEP					CHAR(8) NOT NULL,
	Endereco			VARCHAR(300) NOT NULL
);
GO

CREATE TABLE Clinicas
(
	IdClinica			INT PRIMARY KEY IDENTITY,
	Nome				VARCHAR(200) NOT NULL,
	CNPJ				CHAR(14) NOT NULL,
	RazaoSocial			VARCHAR(200) NOT NULL,
	HorarioAbertura		TIME NOT NULL,
	HorarioFechamento	TIME NOT NULL,
	Endereco			VARCHAR(300) NOT NULL
);
GO

CREATE TABLE Especialidades
(
	IdEspecialidade		INT PRIMARY KEY IDENTITY,
	Titulo				VARCHAR(300) NOT NULL
);
GO

CREATE TABLE Medicos
(
	IdMedico			INT PRIMARY KEY IDENTITY,
	IdUsuario			INT FOREIGN KEY REFERENCES Usuarios (IdUsuario) NOT NULL,
	IdClinica			INT FOREIGN KEY REFERENCES Clinicas (IdClinica) NOT NULL,
	IdEspecialidade		INT FOREIGN KEY REFERENCES Especialidades (IdEspecialidade) NOT NULL,
	Nome				VARCHAR(250) NOT NULL,
	CRM					CHAR(5) NOT NULL,
	Estado				CHAR(2) NOT NULL
);
GO

CREATE TABLE Situacoes
(
	IdSituacao			INT PRIMARY KEY IDENTITY,
	Titulo				VARCHAR(150) NOT NULL
);
GO

CREATE TABLE Consultas
(
	IdConsulta			INT PRIMARY KEY IDENTITY,
	IdPaciente			INT FOREIGN KEY REFERENCES Pacientes (IdPaciente) NOT NULL,
	IdMedico			INT FOREIGN KEY REFERENCES Medicos (IdMedico) NOT NULL,
	IdSituacao			INT FOREIGN KEY REFERENCES Situacoes (IdSituacao) DEFAULT(1),
	DataAgendamento		DATETIME NOT NULL,
	Descricao			VARCHAR(350)
);
GO

CREATE FUNCTION QuantidadeDeMedicos(@Especialidade VARCHAR(300))
RETURNS INT
AS
BEGIN
	DECLARE @Number		INT

	SELECT 
		@Number = COUNT(IdMedico) 
	FROM Medicos M
	INNER JOIN Especialidades E
	ON M.IdEspecialidade = E.IdEspecialidade
	WHERE E.Titulo = @Especialidade

	RETURN @Number
END;

CREATE PROCEDURE BuscaIdade (@Email	VARCHAR(150))
AS
SELECT P.Nome, DATEDIFF(year, DataNascimento, GETDATE()) AS [Idade] FROM Pacientes P
INNER JOIN Usuarios U
ON P.IdUsuario = U.IdUsuario
WHERE U.Email = @Email;