import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

function EditAdmin() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    people: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:5000/api/bookings/${id}`)
      .then((res) => {
        const booking = res.data;
        setFormData({
          name: booking.name,
          date: booking.date.split("T")[0], // Assuming date format needs adjustment
          time: booking.time,
          people: booking.people,
        });
      })
      .catch((error) => {
        console.error("Error fetching booking data", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.patch(`http://localhost:5000/api/bookings/update/${id}`, formData)
      .then(() => {
        navigate("/admin"); // Redirect to admin page after update
      })
      .catch((error) => {
        console.error("Error updating booking", error);
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="my-5">
          <input
            type="date"
            className="form-control"
            name="date"
            placeholder="Date"
            onChange={handleChange}
            value={formData.date}
          />
        </div>
        <div className="my-5">
          <input
            type="time"
            className="form-control"
            name="time"
            placeholder="Time"
            onChange={handleChange}
            value={formData.time}
          />
        </div>
        <div className="my-5">
          <input
            type="number"
            className="form-control"
            name="people"
            placeholder="People"
            onChange={handleChange}
            value={formData.people}
          />
        </div>
        <div className="my-5">
          <button type="submit" className="btn btn-success">
            Update Booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditAdmin;
