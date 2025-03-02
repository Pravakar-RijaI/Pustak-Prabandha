import React, { useEffect, useState } from 'react';
import { backend_server } from '../../main';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const ClientDashboard = ({ userBookData }) => {
  const DELETE_BOOK_API = `${backend_server}/api/v1/requestBooks`;
  const [loading, setLoading] = useState(false);

  const handleRemoveBook = async (transactionId, issueStatus) => {
    setLoading(true);
    try {
      const response = await axios.patch(DELETE_BOOK_API, {
        id: transactionId,
        issueStatus,
      });

      if (issueStatus === 'DELETE') {
        toast.success('Cancel Success');
      } else {
        toast.success('Removed Successfully');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container my-3'>
      <Toaster />
      {loading && (
        <div className='text-center'>
          <ClipLoader color='#007bff' size={50} />
        </div>
      )}
      {userBookData.length > 0 ? (
        <div className='row my-4'>
          <div className='table-responsive'>
            <table className='table table-hover'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Book Title</th>
                  <th scope='col'>Issue Status</th>
                  <th scope='col'>Issue Date</th>
                  <th scope='col'>Return Due</th>
                  <th scope='col'>Returned Status</th>
                  <th scope='col'>Extra Charge</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userBookData.map((users, index) => {
                  const {
                    bookTitle,
                    _id,
                    issueStatus,
                    isReturned,
                    extraCharge,
                    issueDate,
                    returnDate,
                  } = users;

                  const bookissuedate = new Date(issueDate).toDateString();
                  const returnOrNot = isReturned ? 'True' : 'False';
                  const updatedReturnDate = returnDate ? new Date(returnDate).toDateString() : 'NONE';

                  return (
                    <tr key={_id}>
                      <th scope='row'>{index + 1}</th>
                      <td>{bookTitle}</td>
                      <td>{issueStatus}</td>
                      <td>{bookissuedate}</td>
                      <td>{updatedReturnDate}</td>
                      <td>{returnOrNot}</td>
                      <td>Nrs.{extraCharge} /-</td>
                      <td>
                        {(issueStatus === 'PENDING' || issueStatus === 'READY') && (
                          <button
                            className='btn btn-danger btn-sm'
                            onClick={() => handleRemoveBook(_id, 'DELETE')}
                          >
                            Cancel
                          </button>
                        )}
                        {(issueStatus === 'RETURNED' || issueStatus === 'CANCELLED') && (
                          <button
                            className='btn btn-dark btn-sm'
                            onClick={() =>
                              handleRemoveBook(
                                _id,
                                issueStatus === 'RETURNED' ? 'ALREADYRETURNED' : 'ADMINCANCELLED'
                              )
                            }
                          >
                            Remove
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className='text-center mt-4'>
          <h5>No Books Found</h5>
          <p>You have not issued any books yet.</p>
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;