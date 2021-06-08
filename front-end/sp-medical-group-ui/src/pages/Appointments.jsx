//Libs
import React from 'react';

//Styles
import '../styles/pages/Appointments.css';

//Components
import Button from '../components/Button';
import Table from '../components/Table';

const data = [
  {
    paciente: 'Mariana',
    medico: 'Helena Strada',
    especialidades: 'Pediatria',
    data: '20/01/2020',
    horario: '15:00',
    status: 'Agendada',
    descricao: 'Início do tratamento',
  },
  {
    paciente: 'Mariana',
    medico: 'Helena Strada',
    especialidades: 'Pediatria',
    data: '20/01/2020',
    horario: '15:00',
    status: 'Agendada',
    descricao: 'Início do tratamento',
  },
  {
    paciente: 'Mariana',
    medico: 'Helena Strada',
    especialidades: 'Pediatria',
    data: '20/01/2020',
    horario: '15:00',
    status: 'Cancelada',
    descricao: 'Início do tratamento',
  },
];

const role = 'admin';

const Appointments = () => {
  return (
    <div className="appointments__container">
      <div className="appointments__header">
        <h1>Consultas</h1>
        {role === 'admin' && <Button title="+ Nova consulta" />}
      </div>
      <Table
        role={role}
        data={data}
        columns={[
          'Paciente',
          'Médico',
          'Especialidade',
          'Data',
          'Horário',
          'Status',
          'Descrição',
        ]}
      />
    </div>
  );
};

export default Appointments;
