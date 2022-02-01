import Style from './Navbar.module.css'
import {Outlet, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions';
import Cookies from 'js-cookie';
import useAuth from '../../hooks/useAuth';


export default function Navbar(){
    const {logOut} = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function HandleClick(e){
        navigate(`/home/${e.target.value}`);
    };

    const logOutHandler = async()=>{
        try{
            await logOut()
        } catch(err){
            console.log(err)
        }
        navigate('/')
    }

    return(
        <>
        <div className={Style.container}>
            <div>
                <h1>ADMIN E- COMMERCE</h1>
                <button onClick={logOutHandler}>Log Out</button>
            </div>
            
            <div>
                <button type='button' value='Users' onClick={(e) =>HandleClick(e)}>Users</button>
                <button type='button' value='Inventory' onClick={(e) =>HandleClick(e)}>Inventory</button>
                <button type='button' value='Orders' onClick={(e) =>HandleClick(e)}>Orders</button>
                <button type='button' value='Category' onClick={(e) =>HandleClick(e)}>Category</button>
                <button type='button' value='SalesBanner' onClick={(e) =>HandleClick(e)}>Sales Banner</button>
            </div>
        </div>
        <Outlet/>
        </>
        
    )
}