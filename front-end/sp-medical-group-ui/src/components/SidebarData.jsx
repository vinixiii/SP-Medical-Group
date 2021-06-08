//Libs
import React from 'react';
import { RiDashboardLine, RiStethoscopeFill } from 'react-icons/ri';
// import { FiLogOut } from 'react-icons/fi';
import {
  FaUsers,
  FaUserShield,
  FaUserMd,
  FaUserPlus,
  FaNotesMedical,
  FaHospital,
} from 'react-icons/fa';

const SidebarData = [
  {
    title: 'Dashboard',
    icon: <RiDashboardLine />,
    path: '/dashboard',
  },
  {
    title: 'Usuários',
    icon: <FaUsers />,
    path: '/usuarios',
  },
  {
    title: 'Admin',
    icon: <FaUserShield />,
    path: '/admin',
  },
  {
    title: 'Médicos',
    icon: <FaUserMd />,
    path: '/medicos',
  },
  {
    title: 'Pacientes',
    icon: <FaUserPlus />,
    path: '/pacientes',
  },
  {
    title: 'Consultas',
    icon: <FaNotesMedical />,
    path: '/consultas',
  },
  {
    title: 'Clínicas',
    icon: <FaHospital />,
    path: '/clinicas',
  },
  {
    title: 'Especialidades',
    icon: <RiStethoscopeFill />,
    path: '/especialidades',
  },
  // {
  //   title: 'Sair',
  //   icon: <FiLogOut />,
  //   path: '',
  // },
];

export default SidebarData;
