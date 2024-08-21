// src/pages/page/Read.jsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Read() {
  const [people, setPeople] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/person');
        const data = await response.json();
        setPeople(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/person?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setPeople(people.filter(person => person._id !== id));
      } else {
        console.error('Failed to delete person');
      }
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  };

  const handleUpdate = (id) => {
    router.push(`/Page/update/${id}`); // Redirect to the dynamic route
  };

  return (
    <div className='flex items-center justify-center mt-20'>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={person._id}>
                <th>{index + 1}</th>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.email}</td>
                <td>{person.country}</td>
                <td>
                  <button
                    className='btn btn-primary px-2 py-0'
                    onClick={() => handleUpdate(person._id)}
                  >
                    Update
                  </button>
                  {' '}
                  <button
                    className='text-sm btn btn-error px-2 py-0'
                    onClick={() => handleDelete(person._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Read;
