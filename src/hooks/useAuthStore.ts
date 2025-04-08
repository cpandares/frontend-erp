import { useDispatch, useSelector } from "react-redux";
import { checkingCredentials, login, logout, RootState } from "../store";
import { apiUrl } from "../api";

interface LoginType {
    email: string;
    password: string;
}
interface RegisterType {
    name: string;
    email: string;
    password: string;
    last_name: string;
    document: string;
}

export const useAuthStore = () => {
 
        const { status, user, errorMessage } = useSelector((state: RootState) => state.auth);
        const dispatch = useDispatch();

        const startLogin = async ({ email, password }:LoginType) => {
            
            dispatch( checkingCredentials() );

            try {
                const { data  } = await apiUrl.post('/login', { email, password });
                localStorage.setItem('token', data.token);
                dispatch( login({ name: data.user.name, email: data.user.email }) );
            } catch (error: string | unknown) {                
                dispatch(logout('Credenciales incorrectas'));
               
            }


        }


        const startRenewToken  = async ()=>{
            dispatch( checkingCredentials() );

            try {
                const token = localStorage.getItem('token') || '';
                if(!token) return dispatch(logout(undefined));
                const { data } = await apiUrl.post('/renewToken', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                localStorage.setItem('token', data.token);
               
                dispatch( login({ name: data.user.name, email: data.user.email }) );
            } catch (error) {
                console.log(error);
                localStorage.removeItem('token');
               dispatch(logout(''));
            }
        }

        const startLogout = () => {
            localStorage.removeItem('token');
            dispatch( logout('End session') );
        }


        const startRegister = async ({ name, email, password,last_name,document }:RegisterType) => {
            dispatch(checkingCredentials());
            try {
                const { data } = await apiUrl.post('/users/register', { name, email, password,last_name,document });
                localStorage.setItem('token', data.token);                
                dispatch( login({ name: data.user.name, email: data.user.email }) );
            } catch (error) {
                
                dispatch( logout( error.response.data.error ) );
               
            }
    
        }



        return {
            startLogin,
            startRenewToken,
            startLogout, 
            startRegister,
            status,
            user,
            errorMessage,
        }


}
