import React, { useState } from 'react';
import Modal from './Modal';

const Table = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className="tableContainer">
        <table className="tableContent">
          <thead className="tableHeader">
            <tr>
              <th className="tableHeadItem">Check</th>
              <th className="tableHeadItem">SR</th>
              <th className="tableHeadItem">Name</th>
              <th className="tableHeadItem">Phone</th>
              <th className="tableHeadItem">Email</th>
              <th className="tableHeadItem">Hobbies</th>
              <th className="tableHeadItem">Action</th>
            </tr>
          </thead>
          <tbody className="tableInfo">
            <tr>
              <td className="tableInfoItem">
                <input type="checkbox" />
              </td>
              <td className="tableInfoItem">50</td>
              <td className="tableInfoItem">Arfan Roky</td>
              <td className="tableInfoItem">+8801611695544</td>
              <td className="tableInfoItem">arfanrok0@gmail.com</td>
              <td className="tableInfoItem">Football, Cricket</td>

              <td className="tableInfoItem">
                <button onClick={() => setOpen(true)}>+</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {open ? <Modal open={open} setOpen={setOpen} /> : ''}
    </>
  );
};

export default Table;
