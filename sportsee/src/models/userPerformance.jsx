export default class UserPerformance {
    constructor(data) {
        this.userId = data.userId;
        this.performanceData = data.data.map(item => ({
            value: item.value,
            kind: data.kind[item.kind],
        }));
    }
}