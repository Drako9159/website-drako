import styles from "./ModalLogin.module.css";
//import { loginRequest } from "../../api/auth"
import { dashboardRequest } from "../../api/auth";
import { useDashboardStore } from "../../store/dashboard";

export default function ModalLogin() {
  const setToken = useDashboardStore((state) => state.setToken);
  const token = useDashboardStore((state) => state.token);
  async function handleLogin(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    if (!username || !password) return alert("Please fill all fields");
    //const reponse = await loginRequest(username, password)
    try {
      await dashboardRequest(username, password).then((res) => {
        setToken({ token: res.headers.authorization });
        console.log(token);
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={styles.container}>
      <h2>Please Login</h2>
      <form className={styles.form} onSubmit={handleLogin}>
        <input type="text" placeholder="Username" />

        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
