// Dans src/services/userServices.js
import axios from "axios";
import UserInfos from "../models/userInfos";
import UserPerformance from "../models/userPerformance";
import UserAvgSessions from "../models/userAvgSessions.jsx";
import {
  USER_MAIN_DATA,
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
} from "../data/mockData.js";

export const getUserData = async (userId, env, dataType) => {
  let user;

  try {
    if (env === "development") {
      switch (dataType) {
        case "infos":
          user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
          if (!user) throw new Error("User not found in mock data.");
          break;
        case "performance":
          user = USER_PERFORMANCE.find(
            (user) => user.userId === parseInt(userId)
          );
          if (!user) throw new Error("User not found in mock data.");
          break;
        case "averageSessions":
          user = USER_AVERAGE_SESSIONS.find(
            (user) => user.userId === parseInt(userId)
          );
          if (!user) throw new Error("User not found in mock data.");
          break;
        default:
          throw new Error("Invalid data type");
      }
    } else if (env === "production") {
      let url;
      switch (dataType) {
        case "infos":
          url = `http://localhost:3000/user/${userId}`;
          break;
        case "performance":
          url = `http://localhost:3000/user/${userId}/performance`;
          break;
        case "averageSessions":
          url = `http://localhost:3000/user/${userId}/average-sessions`;
          break;
        default:
          throw new Error("Invalid data type");
      }
      const response = await axios.get(url);
      user = response.data.data;
      if (!user) throw new Error("User not found in production data.");
    } else {
      throw new Error("Invalid environment setting.");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }

  switch (dataType) {
    case "infos":
      return new UserInfos(user);
    case "performance":
      return new UserPerformance(user);
    case "averageSessions":
      return new UserAvgSessions(user);
    default:
      throw new Error("Invalid data type");
  }
};
