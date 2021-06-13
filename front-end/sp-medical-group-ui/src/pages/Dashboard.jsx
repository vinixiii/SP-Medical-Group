//Libs
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiStethoscopeFill } from 'react-icons/ri';
import { FaUserMd, FaUserPlus, FaHospital } from 'react-icons/fa';

//Styles
import '../styles/pages/Dashboard.css';

//Components
import Card from '../components/Card';

const Dashboard = () => {
  const [doctorsNumber, setDoctorsNumber] = useState(0);
  const [patientsNumber, setPatientsNumber] = useState(0);
  const [clinicsNumber, setClinicsNumber] = useState(0);
  const [specialtiesNumber, setSpecialtiesNumber] = useState(0);

  const getDoctorsNumber = () => {
    axios('http://localhost:5000/api/medicos', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setDoctorsNumber(res.data.length);
        }
      })
      .catch((err) => console.log(err));
  };

  const getPatientsNumber = () => {
    axios('http://localhost:5000/api/pacientes', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setPatientsNumber(res.data.length);
        }
      })
      .catch((err) => console.log(err));
  };

  const getClinicsNumber = () => {
    axios('http://localhost:5000/api/clinicas', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setClinicsNumber(res.data.length);
        }
      })
      .catch((err) => console.log(err));
  };

  const getSpecialtiesNumber = () => {
    axios('http://localhost:5000/api/especialidades', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setSpecialtiesNumber(res.data.length);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDoctorsNumber();
    getPatientsNumber();
    getClinicsNumber();
    getSpecialtiesNumber();
  });

  return (
    <section className="dashboard__container">
      <h1>Dashboard</h1>
      <div className="dashboard__content">
        <Card
          number={doctorsNumber}
          title={doctorsNumber > 1 ? 'Médicos' : 'Médico'}
          icon={<FaUserMd />}
        />
        <Card
          number={patientsNumber}
          title={patientsNumber > 1 ? 'Pacientes' : 'Paciente'}
          icon={<FaUserPlus />}
        />
        <Card
          number={clinicsNumber}
          title={clinicsNumber > 1 ? 'Clínicas' : 'Clínica'}
          icon={<FaHospital />}
        />
        <Card
          number={specialtiesNumber}
          title="Especialidades"
          icon={<RiStethoscopeFill />}
        />
      </div>
    </section>
  );
};

export default Dashboard;
