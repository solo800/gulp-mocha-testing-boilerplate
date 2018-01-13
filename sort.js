module.exports = function (arrayToSort) {
    if ('[object Array]' !== Object.prototype.toString.call(arrayToSort)) {
        return null;
    }

    arrayToSort.sort();

    return arrayToSort;
};
