//Libs
import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Styles
import '../styles/pages/Appointments.css';

//Components
import Button from '../components/Button';
import Table from '../components/Table';
import Modal from '../components/Modal';

const role = 'admin';

const Appointments = () => {
  //Appointments List
  const [appointmentsList, setAppointmentsList] = useState([]);

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Form
  // const [patient, setPatient] = useState('');
  // const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  //List of appointments
  const listAppointments = () => {
    //Make a request from API to get the appointments data
    axios('http://localhost:5000/api/consultas').then(async (res) => {
      //If the status code is 200:
      if (res.status === 200) {
        //Store just the necessary properties in the mappedAppointment array
        const mappedAppointments = await res.data.map((a) => {
          //Create an object with just the necessary props that are coming from res.data
          const appointment = {
            paciente: a.idPacienteNavigation.nome,
            medico: a.idMedicoNavigation.nome,
            especialidade:
              a.idMedicoNavigation.idEspecialidadeNavigation.titulo,
            data: new Date(a.dataAgendamento).toLocaleDateString(),
            horario: new Date(a.dataAgendamento).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
            status: a.idSituacaoNavigation.titulo,
            descricao: a.descricao,
          };

          //Return the appointment object
          return appointment;
        });

        //Set appointmentsList with the value of mappedAppointments
        setAppointmentsList(mappedAppointments);
      }
    });
  };

  useEffect(listAppointments, []);

  console.log(appointmentsList);

  return (
    <div className="appointments__container">
      <div className="appointments__header">
        <h1>Consultas</h1>
        {role === 'admin' && (
          <Button
            title="+ Nova consulta"
            onClick={() => setIsModalOpen(true)}
          />
        )}
      </div>
      <Table
        role={role}
        data={appointmentsList}
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
      {role === 'admin' && (
        <Modal isOpen={isModalOpen}>
          <h2 className="appointments__modal-title">Nova consulta</h2>
          <form className="appointments__form">
            <label>Paciente</label>
            <select>
              <option value="0">Selecione o paciente</option>
              <option value="1">Mariana</option>
              <option value="2">Alexandre</option>
              <option value="3">João</option>
            </select>
            <label>Médico</label>
            <select>
              <option value="0">Selecione o médico</option>
              <option value="1">Roberto</option>
              <option value="2">Helena</option>
              <option value="3">Ricardo</option>
            </select>
            <label>Data</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Horário</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <div className="appointments__btns">
              <button
                className="appointments__btn-cancel"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </button>
              <button className="appointments__btn-send">Enviar</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Appointments;
