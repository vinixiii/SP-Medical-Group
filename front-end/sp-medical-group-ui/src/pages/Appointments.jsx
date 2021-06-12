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

//Adm table columns data
const admColumns = [
  '#',
  'Paciente',
  'Médico',
  'Especialidade',
  'Data',
  'Horário',
  'Status',
  'Descrição',
];

//Patient table columns data
const patientColumns = ['Médico', 'Especialidade', 'Data', 'Horário', 'Status'];

//Doctor table columns data
const doctorColumns = [
  '#',
  'Paciente',
  'Data',
  'Horário',
  'Status',
  'Descrição',
];

const Appointments = () => {
  //User role authorization
  const role = parseJWT().role;

  //Appointments List
  const [appointmentsList, setAppointmentsList] = useState([]);

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Form
  const [patientsList, setPatientsList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);

  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const listAppointments = (role) => {
    if (role === '1') {
      //Get the list of all appointments
      axios('http://localhost:5000/api/consultas', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then((res) => {
          //If the status code from response is 200:
          if (res.status === 200) {
            //Map the res.data array and store just the necessary properties
            //in a new array referring 'allAppointments'
            const allAppointments = res.data.map((a) => {
              //Create an object named 'appointment' to store the necessary properties
              const appointment = {
                id: a.idConsulta,
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
                descricao: a.descricao !== undefined ? a.descricao : 'N/A',
              };

              //Return the 'appointment' object
              return appointment;
            });

            //Set 'appointmentsList' with the value of 'allAppointments'
            setAppointmentsList(allAppointments);
          }
        })
        .catch((err) => console.log(err));
    } else if (role === '2' || role === '3') {
      //Get the list of appointments based on the doctor/patient id
      axios('http://localhost:5000/api/consultas/minhas-consultas', {
        //Define authorization method passing the JWT token to the API
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then((res) => {
          //If the status code from response is 200:
          if (res.status === 200) {
            if (role === '2') {
              //Map the res.data array and store just the necessary properties
              //in a new array referring 'patientAppointments'
              const patientAppointments = res.data.map((a) => {
                //Create an object named 'appointment' to store the necessary properties
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

                //Return the 'appointment' object
                return appointment;
              });

              //Set 'appointmentsList' with the value of 'patientAppointments'
              setAppointmentsList(patientAppointments);
            } else if (role === '3') {
              //Map the res.data array and store just the necessary properties
              //in a new array referring 'doctorAppointments'
              const doctorAppointments = res.data.map((a) => {
                //Create an object named 'appointment' to store the necessary properties
                const appointment = {
                  id: a.idConsulta,
                  paciente: a.idPacienteNavigation.nome,
                  data: new Date(a.dataAgendamento).toLocaleDateString(),
                  horario: new Date(a.dataAgendamento).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  }),
                  status: a.idSituacaoNavigation.titulo,
                  descricao: a.descricao !== undefined ? a.descricao : 'N/A',
                };

                //Return the 'appointment' object
                return appointment;
              });

              //Set 'appointmentsList' with the value of 'doctorAppointments'
              setAppointmentsList(doctorAppointments);
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const listPatients = () => {
    //Get the list of all patients
    axios('http://localhost:5000/api/pacientes', {
      //Define authorization method passing the JWT token to the API
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        //If the status code from response is 200:
        if (res.status === 200) {
          setPatientsList(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listDoctors = () => {
    //Get the list of all doctors
    axios('http://localhost:5000/api/medicos', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        //If the status code from response is 200:
        if (res.status === 200) {
          setDoctorsList(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetFormStates = () => {
    setPatient('');
    setDoctor('');
    setDate('');
    setTime('');
  };

  const registerAppointment = (e) => {
    e.preventDefault();

    const appointment = {
      idPaciente: patient,
      idMedico: doctor,
      dataAgendamento: `${date} ${time}`,
    };

    axios
      .post('http://localhost:5000/api/consultas', appointment, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((res) => {
        if (res.status === 201) {
          listAppointments(role);
        }
      });

    setIsModalOpen(false);
    resetFormStates();
  };

  useEffect(() => {
    listAppointments(role);

    if (role === '1') {
      listDoctors();
      listPatients();
    }
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
        columns={
          (role === '1' && admColumns) ||
          (role === '2' && patientColumns) ||
          (role === '3' && doctorColumns)
        }
        reloadTable={listAppointments}
      />
      {role === '1' && (
        <Modal isOpen={isModalOpen}>
          <h2 className="appointments__modal-title">Nova consulta</h2>
          <form
            className="appointments__form"
            onSubmit={(e) => registerAppointment(e)}
          >
            <label>Paciente</label>
            <select
              value={patient}
              onChange={(e) => setPatient(e.target.value)}
            >
              <option value="0">Selecione o paciente</option>
              {patientsList.map((p) => {
                return (
                  <option key={p.idPaciente} value={p.idPaciente}>
                    {p.nome}
                  </option>
                );
              })}
            </select>
            <label>Médico</label>
            <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
              <option value="0">Selecione o médico</option>
              {doctorsList.map((d) => {
                return (
                  <option key={d.idMedico} value={d.idMedico}>
                    {d.idEspecialidadeNavigation.titulo} - {d.nome}
                  </option>
                );
              })}
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
                onClick={() => {
                  setIsModalOpen(false);
                  resetFormStates();
                }}
              >
                Cancelar
              </button>
              <button type="submit" className="appointments__btn-send">
                Enviar
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Appointments;
