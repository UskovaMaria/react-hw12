import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import { History } from "./History";
import { LastViewedPost } from "./LastViewedPost";

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, pathname } = location;

  const [history, setHistory] = useState([]);
  const [lastViewedPost, setLastViewedPost] = useState(null);

  useEffect(() => {
    setHistory(prevHistory => [...prevHistory, location]);
  }, [location]);

  const backHandler = () => {
    const lastLocation = history[history.length - 2];
    navigate(lastLocation?.pathname || '/', { state: { from: pathname } });
    setHistory(prevHistory => prevHistory.slice(0, -1));
  }

  return (
    <div className="container">
      <Header />
      <div className="history-block">
        {history.length > 1 && <button onClick={backHandler}>Назад</button>}
      </div>
      <History history={history} />
      <LastViewedPost post={lastViewedPost} />
      <main className="main">
        <Outlet context={[lastViewedPost, setLastViewedPost]} />
      </main>
      <Footer />
    </div>
  );
};