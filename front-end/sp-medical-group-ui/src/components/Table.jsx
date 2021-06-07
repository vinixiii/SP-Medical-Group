import React from 'react';

import { FiEdit, FiTrash } from 'react-icons/fi';

import '../styles/components/Table.css';

const Table = ({ columns, data }) => {
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

    return (
      <tr key={index}>
        {items.map((item) => (
          <td>{item.value}</td>
        ))}
        <td className="table__icons">
          <FiEdit className="table__edit-icon" />
          <FiTrash className="table__delete-icon" />
        </td>
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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{mappedData}</tbody>
      </table>
    </div>
  );
};

export default Table;
