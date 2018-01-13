module.exports = function (arrayToRandomize) {
    arrayToRandomize.sort(() => 0.5 - Math.random());

    return arrayToRandomize;
};