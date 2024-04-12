// just to sort using this

let totalTimeFilter = [];
let recentFilter = [];
const ascending = (a, b) => a - b;
const descending = (a, b) => b - a;
function filterData(data, array, sort) {
data.filter((value, index) => {
array.push(value.totalTime);
});
array.sort(sort);
}
filterData(data, totalTimeFilter, ascending);
console.log(totalTimeFilter);

// better and optimized way used sorting()
