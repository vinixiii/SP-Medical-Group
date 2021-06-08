import React from 'react';

import { FiEdit, FiTrash } from 'react-icons/fi';

import '../styles/components/Table.css';

const Table = ({ columns, data, role }) => {
  const mappedData = data.map((item, index) => {
    const items = [];
    let i = 0;

    for (const key in item) {
      items.push({
        key: columns[i],
        value: item[key],
      });

      i++;
    }
    console.log(items);
    return (
      <tr key={index}>
        {items.map((item, index) => (
          <td key={index}>
            <span
              className={
                item.value === 'Administrador'
                  ? 'table__admin-type'
                  : '' || item.value === 'Médico'
                  ? 'table__doctor-type'
                  : '' || item.value === 'Paciente'
                  ? 'table__patient-type'
                  : '' || item.value === 'Agendada'
                  ? 'table__scheduled-type'
                  : '' || item.value === 'Realizada'
                  ? 'table__fullfield-type'
                  : '' || item.value === 'Cancelada'
                  ? 'table__canceled-type'
                  : ''
              }
            >
              {item.value}
            </span>
          </td>
        ))}
        {role === 'admin' && (
          <td className="table__icons">
            <FiEdit className="table__edit-icon" />
            <FiTrash className="table__delete-icon" />
          </td>
        )}
      </tr>
    );
  });

  return (
    <div className="table__container">
      <table className="table__data-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            {role === 'admin' && <th>Ações</th>}
          </tr>
        </thead>
        <tbody>{mappedData}</tbody>
      </table>
    </div>
  );
};

export default Table;
