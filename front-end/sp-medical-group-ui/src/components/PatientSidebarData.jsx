//Libs
import React from 'react';
import { FaHome, FaNotesMedical } from 'react-icons/fa';

const PatientSidebarData = [
  {
    title: 'Início',
    icon: <FaHome />,
    path: '/inicio',
  },
  {
    title: 'Consultas',
    icon: <FaNotesMedical />,
    path: '/consultas',
  },
  // {
  //   title: 'Sair',
  //   icon: <FiLogOut />,
  //   path: '',
  // },
];

export default PatientSidebarData;
