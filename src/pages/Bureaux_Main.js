import React from 'react';
import './Bureaux_Main.css'; // Inclure le fichier CSS pour le style
//import 'boxicons/css/boxicons.min.css'; // Importer les styles Boxicons

const Bureaux_Main = () => {
  return (
    <main style={{ position: 'relative', height: '100vh', width: '100%' }}>
     
     {/*     */}
      <ul className="box-info">
        <li>
          <i className="bx bxs-calendar-check"></i>
          <span className="text">
            <h3>1020</h3>
            <p>New Order</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-group"></i>
          <span className="text">
            <h3>2834</h3>
            <p>Visitors</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle"></i>
          <span className="text">
            <h3>$2543</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>
    {/*     */}
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Recent Orders</h3>
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Date Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Array(5).fill(null).map((_, index) => (
                <tr key={index}>
                  <td>
                    <img src="img/people.png" alt="User" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span
                      className={`status ${index % 2 === 0 ? 'completed' : 'pending'}`}
                    >
                      {index % 2 === 0 ? 'Completed' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="todo">
          <div className="head">
            <h3>Todos</h3>
            <i className="bx bx-plus"></i>
            <i className="bx bx-filter"></i>
          </div>
          <ul className="todo-list">
            {Array(5).fill(null).map((_, index) => (
              <li
                key={index}
                className={index % 2 === 0 ? 'completed' : 'not-completed'}
              >
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Bureaux_Main;
