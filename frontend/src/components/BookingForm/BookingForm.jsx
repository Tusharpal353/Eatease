import Axios from "axios";
import { useState } from "react";
import "./BookingForm.css";
import { Link } from "react-router-dom";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    phone: "",
    people: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/bookings", formData)
      .then(() => {
        alert("Booking successful");
      })
      .catch((error) => {
        console.error("There was an error making the request", error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card p-3">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="heading text-center">User Details</h2>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="form-card">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name "
                      className="form-control mb-3"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label>Name</label>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="input-group">
                    <input
                      type="date"
                      name="date"
                      className="form-control mb-3"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                    <label>Date</label>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="input-group">
                    <input
                      type="time"
                      name="time"
                      className="form-control mb-3"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                    <label>Time</label>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter Phone Number "
                      className="form-control mb-3"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <label>Phone Number</label>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="input-group">
                    <input
                      type="number"
                      name="people"
                      className="form-control mb-3"
                      value={formData.people}
                      onChange={handleChange}
                      required
                    />
                    <label>People</label>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <input
                    type="submit"
                    value="Book Table"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
