//Libs
import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Services
import { parseJWT } from '../services/Auth';

//Styles
import '../styles/pages/Appointments.css';

//Components
import Button from '../components/Button';
import Table from '../components/Table';
import Modal from '../components/Modal';

const Appointments = () => {
  //User role authorization
  const role = parseJWT().role;

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
  useEffect(() => {
    const listAppointments = () => {
      if (role === '1') {
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
      } else {
        if (role === '2') {
          axios('http://localhost:5000/api/consultas/minhas-consultas', {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }).then(async (res) => {
            //If the status code is 200:
            if (res.status === 200) {
              //Store just the necessary properties in the mappedAppointment array
              const patientAppointments = await res.data.map((a) => {
                //Create an object with just the necessary props that are coming from res.data
                const appointment = {
                  medico: a.idMedicoNavigation.nome,
                  especialidade:
                    a.idMedicoNavigation.idEspecialidadeNavigation.titulo,
                  data: new Date(a.dataAgendamento).toLocaleDateString(),
                  horario: new Date(a.dataAgendamento).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  }),
                  status: a.idSituacaoNavigation.titulo,
                };

                //Return the appointment object
                return appointment;
              });

              //Set appointmentsList with the value of patientAppointments
              setAppointmentsList(patientAppointments);
            }
          });
        } else {
          axios('http://localhost:5000/api/consultas/minhas-consultas', {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }).then(async (res) => {
            //If the status code is 200:
            if (res.status === 200) {
              //Store just the necessary properties in the mappedAppointment array
              const doctorAppointments = await res.data.map((a) => {
                //Create an object with just the necessary props that are coming from res.data
                const appointment = {
                  paciente: a.idPacienteNavigation.nome,
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

              //Set appointmentsList with the value of doctorAppointments
              setAppointmentsList(doctorAppointments);
            }
          });
        }
      }
    };

    listAppointments();
  }, [role]);

  return (
    <div className="appointments__container">
      <div className="appointments__header">
        <h1>Consultas</h1>
        {role === '1' && (
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
      {role === '1' && (
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
