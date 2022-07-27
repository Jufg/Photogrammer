export const arraysIncludes = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;

    for (let i = 0; i < b.length; ++i) {
        if (!a.includes(b[i])) return false;
    }
    return true;
}

export const arraySplit =(array, partLength) => {
    return Array(Math.ceil(array.length / partLength))
        .fill()
        .map(_ => array.splice(0, partLength))
}
