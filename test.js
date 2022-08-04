test('dates of dictionary', () => {
    const tempResult = {};

    const data = {
        '2020-01-01': 6,
        '2020-01-04': 12,
        '2020-01-05': 14,
        '2020-01-06': 2,
        '2020-01-07': 4,


    };
    const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


    for (let key in data) {
        const year = key.substring(0, 4);
        const month = key.substring(5, 7);
        const day = key.substring(8, 10);
        const date = new Date(year, month - 1, day - 1);
        if (tempResult.hasOwnProperty(weekday[date.getDay()])) {
            tempResult[weekday[date.getDay()]] += data[key];
        }
        else {
            tempResult[weekday[date.getDay()]] = data[key];
        }

    }

    const result = {};

    weekday.forEach((w, index) => {
        if (tempResult[w]) {
            result[w] = tempResult[w];
        }
        else {
            if (index > 0) {
                result[w] = tempResult[weekday[index - 1]] + tempResult[weekday[index + 1]];
            }
        }
    })

    expect(result).toEqual({
        Monday: 2,
        Tuesday: -6,
        Wednesday: 2,
        Thursday: 2,
        Friday: 4,
        Saturday: 6,
        Sunday: 8
    });

})