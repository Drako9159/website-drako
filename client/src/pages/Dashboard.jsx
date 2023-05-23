import ModalLogin from "../components/Dashboard/ModalLogin";
import { useDashboardStore } from "../store/dashboard";
import Card1 from "../components/Dashboard/Card1";

export default function Dashboard(){
    const isAuth = useDashboardStore(state => state.isAuth)
    if(!isAuth) return <ModalLogin />
    
    return <Card1 />
}