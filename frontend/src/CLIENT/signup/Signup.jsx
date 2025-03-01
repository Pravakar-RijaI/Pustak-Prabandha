import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const API_URL = "http://localhost:5000/api/v1/signup";
  const refUsername = useRef(null);

  const Empty_Form_Field = {
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  };

  const navigate = useNavigate();
  const [textField, setTextField] = useState(Empty_Form_Field);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const showLoadingToast = () => {
    return toast.loading("Registering User...", {
      position: "top-center",
      duration: Infinity,
    });
  };

  const HandleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
      if (!emailRegex.test(textField.email)) {
        setLoading(false);
        return toast("Invalid Email Format", { icon: "ℹ️" });
      }

      const alphanumericRegex =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      if (!alphanumericRegex.test(textField.password)) {
        setLoading(false);
        return toast(
          "Password must be alphanumeric with one special character",
          { icon: "ℹ️" }
        );
      }

      if (textField.password !== textField.confirm_password) {
        setLoading(false);
        return toast("Password doesn't match", { icon: "ℹ️" });
      }

      const loadingToastId = showLoadingToast();

      const { username, email, phone, password } = textField;

      const response = await axios.post(API_URL, {
        username,
        email,
        phone,
        password,
      });

      toast.dismiss(loadingToastId);
      setTextField(Empty_Form_Field);
      setLoading(false);

      if (response.data.GOTO_LOGIN) {
        navigate("/login", { replace: true });
        toast("Account Already Exists, You can Login!", { icon: "ℹ️" });
      } else {
        navigate("/otp", { replace: true });
        toast(response.data.message, { icon: "ℹ️" });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again!");
    }
  };

  const HandleOnChange = (event) => {
    const { name, value } = event.target;
    setTextField({ ...textField, [name]: value });
  };

  useEffect(() => {
    refUsername.current.focus();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 mt-5 bottom-margin">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "500px" }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Sign Up</h2>
        </div>

        <form onSubmit={HandleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={textField.username}
              onChange={HandleOnChange}
              className="form-control"
              placeholder="Enter your username"
              required
              ref={refUsername}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={textField.email}
              onChange={HandleOnChange}
              className="form-control"
              placeholder="e.g. user@gmail.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={textField.password}
                onChange={HandleOnChange}
                className="form-control pe-5"
                placeholder="Enter password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <BsEye /> : <BsEyeSlash />}
              </span>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">
              Confirm Password
            </label>
            <div className="position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirm_password"
                value={textField.confirm_password}
                onChange={HandleOnChange}
                className="form-control pe-5"
                placeholder="Confirm your password"
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                {showConfirmPassword ? <BsEye /> : <BsEyeSlash />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-4">
          <span>Already have an account?</span>
          <Link to="/login" className="ms-1 text-decoration-none">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
