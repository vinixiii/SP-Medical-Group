//Libs
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { FaHome, FaNotesMedical } from 'react-icons/fa';

const PatientSidebarData = [
  {
    title: 'Início',
    icon: <FaHome />,
    path: '/inicio-paciente',
  },
  {
    title: 'Consultas',
    icon: <FaNotesMedical />,
    path: '/consultas-paciente',
  },
  // {
  //   title: 'Sair',
  //   icon: <FiLogOut />,
  //   path: '',
  // },
];

export default PatientSidebarData;
