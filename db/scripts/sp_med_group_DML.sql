USE SP_Medical_Group;
GO

INSERT INTO TiposUsuarios (Titulo)
VALUES ('Administrador'),
	   ('Paciente'),
	   ('Médico');
GO

INSERT INTO Usuarios (IdTipoUsuario, Email, Senha)
VALUES (1, 'adm@adm.com', 'adm123'),
	   (2, 'ligia@gmail.com', 'ligia123'),
	   (2, 'alexandre@gmail.com', 'alexandre123'),
	   (2, 'fernando@gmail.com', 'fernando123'),
	   (2, 'henrique@gmail.com', 'henrique123'),
	   (2, 'joao@gmail.com', 'joao123'),
	   (2, 'bruno@gmail.com', 'bruno123'),
	   (2, 'mariana@gmail.com', 'mariana123'),
	   (3, 'ricardo.lemos@spmedicalgroup.com.br', 'ricardolemos123'),
	   (3, 'roberto.possarle@spmedicalgroup.com.br', 'robertopossarle123'),
	   (3, 'helena.souza@spmedicalgroup.com.br', 'helenastrada123');
GO

INSERT INTO Pacientes (IdUsuario, Nome, DataNascimento, Telefone, RG, CPF, CEP, Endereco)
VALUES (2, 'Ligia', '13/10/1983', '1134567654', '435225435', '94839859000', '04022000', 'R. Estado de Israel, 240 - Vila Mariana, São Paulo - SP'),
	   (3, 'Alexandre', '23/07/2001', '11987656543', '326543457', '73556944057', '01310200', 'Av. Paulista, 1578 - Bela Vista, São Paulo - SP'),
	   (4, 'Fernando', '10/10/1978', '11972084453', '546365253', '16839338002', '04029200', 'Av. Ibirapuera , 2927 - Indianópolis, São Paulo - SP'),
	   (5, 'Henrique', '13/10/1985', '1134566543', '543663625', '14332654765', '06402030', 'R. Vitória, 120 - Vila Sao Jorge, Barueri - SP'),
	   (6, 'João', '27/08/1975', '1176566377', '325444441', '91305348010', '09405380', 'R. Ver. Geraldo de Camargo, 66 - Santa Luzia, Ribeirão Pires - SP'),
	   (7, 'Bruno', '21/03/1972', '11954368769', '545662667', '79799299004', '04524001', 'Al. dos Arapanés, 945 - Indianópolis, São Paulo - SP'),
	   (8, 'Mariana', '05/03/2018', 'xxxxxxxxxxx', '545662668', '13771913039', '06407140', 'R. Sao Antonio, 232 - Vila Universal, Barueri - SP');
GO

INSERT INTO Clinicas (Nome, CNPJ, RazaoSocial, HorarioAbertura, HorarioFechamento, Endereco)
VALUES ('Clínica Possarle', '86400902000130', 'SP Medical Group', '06:00', '22:00', 'Av. Barão Limeira, 532, São Paulo, SP');
GO

INSERT INTO Especialidades (Titulo)
VALUES ('Acunpuntura'),
	   ('Anestesiologia'),
	   ('Angiologia'),
	   ('Cardiologia'),
	   ('Cirurgia Cardiovascular'),
	   ('Cirurgia da Mão'),
	   ('Cirurgia do Aparelho Disgestivo'),
	   ('Cirurgia Geral'),
	   ('Cirurgia Pediátrica'),
	   ('Cirurgia Plástica'),
	   ('Cirurgia Torácica'),
	   ('Cirurgia Vascular'),
	   ('Dermatologia'),
	   ('Radioterapia'),
	   ('Urologia'),
	   ('Pediatria'),
	   ('Psiquiatria');
GO

INSERT INTO Medicos (IdUsuario, IdClinica, IdEspecialidade, Nome, CRM, Estado)
VALUES (9, 1, 2, 'Ricardo Lemos', '54356', 'SP'),
	   (10, 1, 17, 'Roberto Possarle', '53452', 'SP'),
	   (11, 1, 16, 'Helena Strada', '65463', 'SP');
GO

INSERT INTO Situacoes (Titulo)
VALUES ('Agendada'),
	   ('Realizada'),
	   ('Cancelada');
GO

INSERT INTO Consultas (IdPaciente, IdMedico, IdSituacao, DataAgendamento)
VALUES (7, 3, 2, '20/01/2020  15:00'),
	   (2, 2, 3, '06/01/2020  10:00'),
	   (3, 2, 2, '07/02/2020  11:00'),
	   (2, 2, 2, '06/02/2018  10:00'),
	   (4, 1, 3, '07/02/2019  11:00'),
	   (7, 3, 1, '08/03/2020  15:00'),
	   (4, 1, 1, '09/03/2020  11:00');
GO