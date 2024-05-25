export default class UserActivity {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}
