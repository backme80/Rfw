let fna = (next) => { return next(1) },
    fnb = (a, next) => { return fna((val) => { return next((2 * a) + val) }) }
fnb(4, (val) => { console.log(val) })