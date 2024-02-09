const friuts = ['apple', 'pear', 'pawpaw', 'orange']
const [ first, second, ...rest ] = friuts;

console.log(first, second, rest)

const people = {'name': "john"}

const getAverage = (name, ...scores) => {
    console.log(name);
    total = scores.reduce((total, score) => {
        total += score;
        return total;
    })
    console.log(total);
} // ..scores is a rest operator.

johnScores = [1, 2, 3, 56]
getTotal(people.name, 89, 30, 60, 50);
