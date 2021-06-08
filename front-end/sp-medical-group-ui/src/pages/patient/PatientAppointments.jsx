import React from 'react';

import '../../styles/pages/Appointments.css';

//Components
import Button from '../../components/Button';
import Table from '../../components/Table';

const data = [
  {
    medico: 'Helena Strada',
    especialidades: 'Pediatria',
    data: '20/01/2020',
    horario: '15:00',
    status: 'Agendada',
  },
];

const PatientAppointments = () => {
  return (
    <div className="appointments__container">
      <div className="appointments__header">
        <h1>Consultas</h1>
        <Button title="+ Nova consulta" />
      </div>
      <Table
        data={data}
        columns={['Médico', 'Especialidade', 'Data', 'Horário', 'Status']}
      />
    </div>
  );
};

export default PatientAppointments;
