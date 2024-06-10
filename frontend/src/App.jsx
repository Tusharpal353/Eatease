import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import BookingForm from "./components/BookingForm/BookingForm";
import ShowAdmin from "./components/Admin/ShowAdmin/ShowAdmin";
import EditAdmin from "./components/Admin/EditAdmin/EditAdmin";
import Animation from "./components/Animation/Animation";
import Modal from "./components/Modal/Modal";
import { jwtDecode } from "jwt-decode";

const getUserRole = async (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.role;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};

function App() {
  const [role, setRole] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem("token");
  const location = useLocation();

  useEffect(() => {
    if (token) {
      getUserRole(token).then((decodedRole) => {
        setRole(decodedRole);
      });
    }
  }, [token]);

  useEffect(() => {
    if (location.pathname.startsWith("/admin") && role !== 1) {
      setShowModal(true);
    }
  }, [location, role]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/booking-form" element={<BookingForm />} />
            {role === 1 ? (
              <>
                <Route path="/admin" element={<ShowAdmin />} />
                <Route path="/update/:id" element={<EditAdmin />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
            {/* <Route path="/Animation/" element={<Animation />} /> */}
          </>
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
      {showModal && (
        <Modal
          message="You are not an admin. Access to this page is restricted."
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
