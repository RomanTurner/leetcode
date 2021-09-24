function containsDuplicates(arr) {
    let checkSet = new Set(...arr);
    if (checkSet.size !== arr.length) return false
    return true
}