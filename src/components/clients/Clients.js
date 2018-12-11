import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: '13254',
        firstName: 'Kevin',
        lastName: 'Smith',
        email: 'test1@test.com',
        phone: '456-465-6322',
        balance: '30'
      },
      {
        id: '1325454',
        firstName: 'Uno',
        lastName: 'Sims',
        email: 'test13@test.com',
        phone: '456-555-6322',
        balance: '70'
      },
      {
        id: '132223454',
        firstName: 'Gao',
        lastName: 'Uta',
        email: 'test12@test.com',
        phone: '456-555-6322',
        balance: '60'
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users" />
                Clients
              </h2>
            </div>
            <div className="col-md-6" />
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="bth btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />
                      Detailes
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
