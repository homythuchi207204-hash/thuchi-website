import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [weather, setWeather] = useState("Đang tải...");
  const [fitPrice, setFitPrice] = useState("Đang cập nhật...");

  // 🌤 Thời tiết giả lập (offline)
  useEffect(() => {
    const fakeTemp = (Math.random() * (35 - 25) + 25).toFixed(1);
    const descs = ["nắng nhẹ", "mát mẻ", "âm u", "trời trong"];
    const desc = descs[Math.floor(Math.random() * descs.length)];
    setWeather(`${fakeTemp}°C, ${desc}`);
  }, []);

  // 💸 Fit Price ngẫu nhiên
  useEffect(() => {
    const price = (Math.random() * (55 - 45) + 45).toFixed(1);
    setFitPrice(`${price}k / buổi`);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/541393652_2523658934674690_8951115482164881138_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SiYWZ6AyRQoQ7kNvwHjJrTy&_nc_oc=AdlAejpQ1B36xR1BYU6XasNuCXpWWQxVEqTGAZ0gA74FpCyQIGmdZrEjv6ER1wSp4Dv3Bnw15gInfpRqxnmkAdpr&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=QSMIqYRp81onWuWV8-2Lyg&oh=00_AfcemvuIA17BR-A5dm9LfH7wE8wNjpjJqWDpRRjTaVHhiw&oe=69080DF9"
          alt="avatar"
          style={styles.avatar}
        />
        <h1 style={styles.name}>Hồ Mỹ Thu Chi</h1>
        <p style={styles.city}>🌆 Sống tại Thành phố Hồ Chí Minh</p>

        <div style={styles.info}>
          <h2 style={styles.sectionTitle}>🌤 Thời tiết hôm nay</h2>
          <p style={styles.text}>{weather}</p>

          <h2 style={styles.sectionTitle}>💸 Giá Fit</h2>
          <p style={styles.text}>{fitPrice}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #b3e5fc, #f8bbd0)",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    background: "white",
    borderRadius: 25,
    padding: 30,
    boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
    textAlign: "center",
    width: 320,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    marginBottom: 5,
  },
  city: {
    color: "#555",
    marginBottom: 20,
  },
  info: {
    marginTop: 10,
  },
  sectionTitle: {
    color: "#1976d2",
    fontSize: 18,
    marginTop: 15,
  },
  text: {
    color: "#444",
    fontSize: 16,
    margin: "5px 0 15px",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
