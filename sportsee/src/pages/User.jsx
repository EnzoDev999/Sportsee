import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import KeyDataCard from "../components/KeyDataCard";
import ScoreChart from "../components/scoreChart";
import PerformanceChart from "../components/RadarChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import ActivityChart from "../components/ActivityChart";
import calorieIcon from "../assets/calorie.svg";
import proteinIcon from "../assets/chicken.svg";
import carbIcon from "../assets/apple.svg";
import fatIcon from "../assets/cheeseburger.svg";
import "../sass/components/RadarChart.scss";
import "../sass/components/AverageSessionsChart.scss";
import "../sass/pages/user.scss";

const User = () => {
  const { id } = useParams();
  const {
    setUserId,
    userInfos,
    userActivity,
    userPerformance,
    userAvgSessions,
    error,
    env,
  } = useDataContext();

  useEffect(() => {
    if (id) {
      setUserId(parseInt(id));
    }
    console.log(`L'environnement actuel est: ${env}`);
  }, [id, setUserId, env]);

  if (error) {
    return <div>Failed to load user data. Please try again later.</div>;
  }

  if (!userInfos || !userPerformance || !userAvgSessions || !userActivity) {
    return <div>Loading user data...</div>;
  }

  return (
    <main className="profile">
      <header className="profile_title">
        <h1>
          Bonjour <span>{userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <div className="profile_main">
        <div className="profile_main_activity">
          <ActivityChart sessions={userActivity.sessions} />
        </div>
        <div className="profile_main_averageSessions">
          <AverageSessionsChart sessions={userAvgSessions.sessions} />
        </div>
        <div className="profile_main_performance">
          <PerformanceChart performanceData={userPerformance.performanceData} />
        </div>
        <div className="profile_main_chart">
          <ScoreChart score={userInfos.score || userInfos.todayScore} />
        </div>
        <div className="profile_main_keydata">
          <KeyDataCard
            value={userInfos.calorieCount}
            title="Calories"
            img={calorieIcon}
            unit="kCal"
          />
          <KeyDataCard
            value={userInfos.proteinCount}
            title="Proteines"
            img={proteinIcon}
            unit="g"
          />
          <KeyDataCard
            value={userInfos.carbohydrateCount}
            title="Glucides"
            img={carbIcon}
            unit="g"
          />
          <KeyDataCard
            value={userInfos.lipidCount}
            title="Lipides"
            img={fatIcon}
            unit="g"
          />
        </div>
      </div>
    </main>
  );
};

export default User;
