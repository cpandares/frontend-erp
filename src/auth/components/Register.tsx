import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore, useForm } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { AuthLayout } from "../index";
import { toast } from "react-toastify";

export const Register = () => {
  const { startRegister } = useAuthStore();
  const { name, email, password, last_name, document, onInputChange, reset } = useForm({
    name: '',
    email: '',
    password: '',
    last_name: '',
    document: ''
  });

  // Obtén el mensaje de error del estado global
  const { errorMessage } = useSelector((state: RootState) => state.auth);

  // Mostrar el mensaje de error en un toast cuando cambie
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage); // Muestra el mensaje de error en un toast
    }
  }, [errorMessage]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission prevented");
    await startRegister({ name, email, password, last_name, document });
    if (!errorMessage) {
      reset(); // Resetea el formulario solo si no hay error
    }
};

  return (
    <AuthLayout>
      <form onSubmit={onSubmit} className="space-y-5 dark:text-white">
        <div>
          <label htmlFor="Name">Name</label>
          <div className="relative text-white-dark">
            <input
              id="Name"
              type="text"
              placeholder="Enter Name"
              className="form-input ps-10 placeholder:text-white-dark"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="Name">Last Name</label>
          <div className="relative text-white-dark">
            <input
              id="last_name"
              type="text"
              placeholder="Enter Last Name"
              className="form-input ps-10 placeholder:text-white-dark"
              name="last_name"
              value={last_name}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="Name">Document</label>
          <div className="relative text-white-dark">
            <input
              id="document"
              type="text"
              placeholder="Enter Document"
              className="form-input ps-10 placeholder:text-white-dark"
              name="document"
              value={document}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="Email">Email</label>
          <div className="relative text-white-dark">
            <input
              id="Email"
              type="email"
              placeholder="Enter Email"
              className="form-input ps-10 placeholder:text-white-dark"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <div className="relative text-white-dark">
            <input
              id="Password"
              type="password"
              placeholder="Enter Password"
              className="form-input ps-10 placeholder:text-white-dark"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
        >
          Sign Up
        </button>
        <div className="text-center dark:text-white">
          Ya Posees cuenta?&nbsp;
          <Link
            to="/auth/login"
            className="uppercase text-primary underline transition hover:text-black dark:hover:text-white"
          >
            Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};