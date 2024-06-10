import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ShowAdmin.css";

function AdminPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/bookings/fetchdata"
      );
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching booking data", error);
    }
  };

  return (
    <div>
      <h1 className="display-6 heading ">Admin Page - View Bookings</h1>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Number of People</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr scope="row" key={booking._id}>
              <td>{booking.name}</td>
              <td>{new Date(booking.date).toLocaleDateString()}</td>
              <td>{booking.time}</td>
              <td>{booking.people}</td>
              <td>
                <Link className="btn btn-primary" to={`/update/${booking._id}`}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
