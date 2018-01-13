module.exports = function (arrayToRandomize) {
    const randomizedArray = arrayToRandomize.sort(() => 0.5 * Math.random());

    return randomizedArray;
};