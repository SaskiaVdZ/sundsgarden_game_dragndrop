import { useState } from "react"; // uses the useState hook to add a variable to update the value.
import { NavLink, useNavigate, useParams } from "react-router-dom"; //to allow users to access different components
import { useAuth } from "../../reducers/AuthProvider";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // to store and display any error messages
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const [isAuthenticated, setAuthenticated] = useState(false);
  // const { userId } = useParams();

  //const checkUser = (users) => {
    // Function to validate the user
    //const user = users.find(
     // (user) => user.email === email && user.password === password
   // );
   // console.log(user);


   const checkUser = () => {
    const validCredentials = {
      email: "imagine@gmail.com",
      password: "imagine123",
    };
    const handleLogin = (email, password) => {
      if (email === 'imagine@gmail.com' && password === 'imagine123') {
        setAuthenticated(true);
      }
    };
  
    if (email === validCredentials.email && password === validCredentials.password) {
      handleLogin(email, password); // Call handleLogin function for successful login
      return {
        username: "John",
        id: 1,
      };
    } else {
      navigate("/login");
      return null;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the default behavior of a form when it is submitted.

    try {
      //checking if the login credentials are valid
     // const response = await axios.get("http://localhost:6001/users");
      //const user = checkUser(response.data);

      if (email && password) {
        const user = checkUser(); // Call checkUser
  
        if (user) {
          successMessage(user);
        } else {
          errorMessage("Invalid username or password. Please try again!");
        }
      } else {
        alert("All fields are required!");
        resetForm();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    // to do not repeat code
    setEmail("");
    setPassword("");
  };

  const successMessage = (user) => {
    dispatch({ type: "LOGIN", payload: { user } });
    alert(`Welcome back ${user.username}!`);
    navigate(`/game/${user.id}`); //  access to the user's game page after login

    // localStorage.setItem("user", JSON.stringify(user.id));
    // localStorage.setItem("userName", JSON.stringify(user.username)); //I've put an extra line of code in here to catch the username/Saskia
    // localStorage.setItem("userEmail", JSON.stringify(user.email)); //Same for the email adress
    resetForm();
  };

  const errorMessage = (message) => {
    alert("Invalid username or password. Please try again!");
    setError(message); //save error message

    resetForm();
  };

  return (
    <>
      <form
        className="form-container"
        onSubmit={handleSubmit}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
      >
        <label>
          <input
            value={email}
            type="text"
            placeholder="To log in type this email address: imagine@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            value={password}
            type="Password"
            placeholder="and this password: imagine123"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
      <div className="Login-button-container">
        <NavLink to="/login" className="btn" onClick={handleSubmit}>
          Login
        </NavLink>
        <p className="Login-p">or</p>
        <NavLink to="/register-account" className="btn">
          Create Account
        </NavLink>
      </div>
    </>
  ); //onChange is used to listen for user input in a text input box., onFormSwitch to switch to other page
};
export default Login;
