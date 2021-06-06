//Libs
import React from 'react';
import { RiDashboardLine, RiStethoscopeFill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import {
  FaUsers,
  FaUserShield,
  FaUserMd,
  FaUserPlus,
  FaFileMedical,
  FaHospital,
} from 'react-icons/fa';

const SidebarData = [
  {
    title: 'Dashboard',
    icon: <RiDashboardLine />,
    link: '/dashboard',
  },
  {
    title: 'Usuários',
    icon: <FaUsers />,
    link: '/usuarios',
  },
  {
    title: 'Admin',
    icon: <FaUserShield />,
    link: '/admin',
  },
  {
    title: 'Médicos',
    icon: <FaUserMd />,
    link: '/medicos',
  },
  {
    title: 'Pacientes',
    icon: <FaUserPlus />,
    link: '/pacientes',
  },
  {
    title: 'Consultas',
    icon: <FaFileMedical />,
    link: '/consultas',
  },
  {
    title: 'Clínicas',
    icon: <FaHospital />,
    link: '/clinicas',
  },
  {
    title: 'Especialidades',
    icon: <RiStethoscopeFill />,
    link: '/especialidades',
  },
  {
    title: 'Sair',
    icon: <FiLogOut />,
    link: '',
  },
];

export default SidebarData;
