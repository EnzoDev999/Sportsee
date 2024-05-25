export default class UserInfos {
    constructor(user) {
        this.firstName = user.userInfos.firstName;
        this.lastName = user.userInfos.lastName;
        this.age = user.userInfos.age;
        this.score = user.todayScore ? user.todayScore : user.score;
        this.calorieCount = user.keyData.calorieCount.toLocaleString('en-US');
        this.proteinCount = user.keyData.proteinCount;
        this.carbohydrateCount = user.keyData.carbohydrateCount;
        this.lipidCount = user.keyData.lipidCount;
    }
}