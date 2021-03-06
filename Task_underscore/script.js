(function () {
    "use strict";

    var people = [
        {
            name: "Ivan",
            lastName: "Ivanov",
            age: 25
        },
        {
            name: "Petr",
            lastName: "Petrov",
            age: 42
        },
        {
            name: "Maria",
            lastName: "Smirnova",
            age: 19
        },
        {
            name: "Vasiliy",
            lastName: "Krasnov",
            age: 30
        },
        {
            name: "Irina",
            lastName: "Motylova",
            age: 37
        },
        {
            name: "Nick",
            lastName: "Bloitre",
            age: 47
        },
        {
            name: "Olga",
            lastName: "Orlova",
            age: 22
        },
        {
            name: "Stepan",
            lastName: "Anisimanov",
            age: 66
        },
        {
            name: "Kristina",
            lastName: "Votova",
            age: 56
        },
        {
            name: "Alex",
            lastName: "Kiruanov",
            age: 48
        }
    ];

    console.log("Список людей, отсортированный по возрасту:");
    var sorted = _.sortBy(people, "age");
    console.log(sorted);

    console.log("Средний возраст людей: " + getAverageAge(people));

    console.log("Люди от 20 до 30 включительно, по возрастанию возраста:");
    console.log(getPeopleFrom20To30Asc(people));

    console.log("Добавить fullName: ");
    console.log(addFullName(people));

    function getAverageAge(people) {
        var sum = _.chain(people)
            .pluck("age")
            .reduce(function (memo, num) {
                return memo + num;
            }, 0)
            .value();

        return sum / people.length;
    }

    function getPeopleFrom20To30Asc(people) {
        return _.chain(people)
            .filter(function (p) {
                return p.age >= 20 && p.age <= 30;
            })
            .sortBy("age")
            .value();
    }

    function addFullName(people) {
        return _.each(people, function (element) {
            element.fullName = element.name + " " + element.lastName;
        });
    }
})();