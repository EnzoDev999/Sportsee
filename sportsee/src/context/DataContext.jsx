import { createContext, useContext, useEffect, useState } from "react";
import { getUserData } from "../services/userServices";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [userId, setUserId] = useState();
  const [error, setError] = useState(false);
  const [env, setEnv] = useState(localStorage.getItem("env") || "development");
  const [userInfos, setUserInfos] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userAvgSessions, setUserAvgSessions] = useState(null);
  const [userActivity, setUserActivity] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const userInfoData = await getUserData(userId, env, "infos");
        setUserInfos(userInfoData);

        const userPerformanceData = await getUserData(
          userId,
          env,
          "performance"
        );
        setUserPerformance(userPerformanceData);

        const userAvgSessionsData = await getUserData(
          userId,
          env,
          "averageSessions"
        );
        setUserAvgSessions(userAvgSessionsData);

        const userActivityData = await getUserData(userId, env, "activity");
        setUserActivity(userActivityData);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setError(error.message || "Failed to fetch data");
      }
    };
    fetchData();
  }, [userId, env]);

  useEffect(() => {
    localStorage.setItem("env", env);
    console.log(`localStorage mis à jour avec env: ${env}`);
  }, [env]);

  return (
    <DataContext.Provider
      value={{
        userId,
        setUserId,
        env,
        setEnv,
        userInfos,
        userPerformance,
        userAvgSessions,
        userActivity,
        setError,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
