import React, { useState } from 'react';
import axios from 'axios';

import { FiEdit, FiCheck, FiTrash } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import '../styles/components/Table.css';

const Table = ({ columns, data, role, reloadTable }) => {
  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [desc, setDesc] = useState(null);

  const onEdit = ({ id, currentDesc }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });

    setDesc(currentDesc);
  };

  const updateDescription = ({ id, newDesc }) => {
    axios
      .patch(
        'http://localhost:5000/api/consultas/' + id,
        { descricao: newDesc },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        if (res.status === 204) {
          onCancel();
          reloadTable(role);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSave = ({ id, newDesc }) => {
    updateDescription({ id, newDesc });
  };

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    });

    // reset the unit price state value
    setDesc(null);
  };

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
        {items.slice(1).map((row, index) => (
          <td key={index}>
            <span
              className={
                row.value === 'Administrador'
                  ? 'table__admin-type'
                  : '' || row.value === 'Médico'
                  ? 'table__doctor-type'
                  : '' || row.value === 'Paciente'
                  ? 'table__patient-type'
                  : '' || row.value === 'Agendada'
                  ? 'table__scheduled-type'
                  : '' || row.value === 'Realizada'
                  ? 'table__fullfield-type'
                  : '' || row.value === 'Cancelada'
                  ? 'table__canceled-type'
                  : '' || row.value === 'N/A'
                  ? 'table__no-description'
                  : ''
              }
            >
              {row.key === 'Descrição' &&
              inEditMode.status &&
              inEditMode.rowKey === item.id ? (
                <input
                  className="table__input"
                  type="text"
                  defaultValue={row.value}
                  onChange={(e) => setDesc(e.target.value)}
                />
              ) : (
                row.value
              )}
            </span>
          </td>
        ))}
        {role === '1' && (
          <td className="table__icons">
            <FiEdit className="table__edit-icon" />
            <FiTrash className="table__delete-icon" />
          </td>
        )}
        {role === '3' && (
          <td className="table__icons">
            {inEditMode.status && inEditMode.rowKey === item.id ? (
              <>
                <FiCheck
                  className="table__save-icon"
                  onClick={() => {
                    onSave({ id: item.id, newDesc: desc });
                  }}
                />
                <AiOutlineClose
                  className="table__delete-icon"
                  onClick={() => {
                    onCancel();
                  }}
                />
              </>
            ) : (
              <FiEdit
                className="table__edit-icon"
                onClick={() =>
                  onEdit({ id: item.id, currentDesc: item.descricao })
                }
              />
            )}
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
            {columns.slice(1).map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            {(role === '1' || role === '3') && <th>Ações</th>}
          </tr>
        </thead>
        <tbody>{mappedData}</tbody>
      </table>
    </div>
  );
};

export default Table;
