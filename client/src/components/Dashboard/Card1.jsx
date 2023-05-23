import styles from "./Card1.module.css";
import { useDashboardStore } from "../../store/dashboard";
import { useState } from "react";
import { syncDrive } from "../../api/posts";

export default function Card1() {
  const logout = useDashboardStore((state) => state.logout);

  const [buttonActive, setButtonActive] = useState(0);
  const [message, setMessage] = useState("");

  function handleButtonActive(value) {
    setButtonActive(value);
  }

  async function handleSync() {
    const response = await syncDrive();
    setMessage(response.data.message);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Dashboard</h2>

        <button
          disabled={buttonActive === 1}
          onClick={() => handleButtonActive(1)}
        >
          Google Drive
        </button>
        <button onClick={logout}>Logout</button>
      </div>
      <div className={styles.right}>
        {buttonActive === 0 ? (
          <div>
            <h2 className={styles.title}>Check your dashboard</h2>
          </div>
        ) : (
          buttonActive === 1 && (
            <div>
              <h2 className={styles.title}>Google Drive</h2>
              <div className={styles.gdrive}>
                <p>Sync posts in your Google Drive</p>
                <button onClick={handleSync}>Sync</button>
                <p className={styles.feedback}>{message}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
