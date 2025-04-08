import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useAuthStore, useForm } from "../../hooks";
import { AuthLayout } from "../index";

import IconMail from "../../common/Icon/IconMail";
import IconLockDots from "../../common/Icon/IconLockDots";
import { useEffect } from "react";
import { toast } from "react-toastify";




export const Login = () => {


  const { startLogin,errorMessage } = useAuthStore();

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
      if (errorMessage) {
        toast.error(errorMessage); // Muestra el mensaje de error en un toast
      }
    }, [errorMessage]);
  
  
    const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
      
      startLogin({ email, password });
    };


  return (
    <AuthLayout>

      <form 
        onSubmit={submitForm}
        className="space-y-5 dark:text-white" >
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
            <span className="absolute start-4 top-1/2 -translate-y-1/2">
              <IconMail fill={true} />
            </span>
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
            <span className="absolute start-4 top-1/2 -translate-y-1/2">
              <IconLockDots fill={true} />
            </span>
          </div>
        </div>
        <div>
          <label className="flex cursor-pointer items-center">
            <input type="checkbox" className="form-checkbox bg-white dark:bg-black" />
            <span className="text-white-dark">Subscribe to weekly newsletter</span>
          </label>
        </div>
        <button type="submit" className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
          Sign in
        </button>
      </form>


      <div className="text-center dark:text-white mt-2">
               No tienes cuenta ?&nbsp;
                <Link to="/auth/register" className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                 Registrate
                </Link>
              </div>


    </AuthLayout>
  )
}
