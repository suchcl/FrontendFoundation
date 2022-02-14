function identify<T>(arg:T):T {
    return arg;
}

console.log(identify(11)); // 使用了类型推导
console.log(identify<string>('23'));

function logIdentiy<T>(arg: T[]): T[]{
    console.log(arg.length);
    return arg;
}

function logIdentify2<T>(arg:Array<T>):T[]{
    return arg;
}

function identify3<T>(arg: T):T {
    return arg;
}

const myIdentify:<T>(arg: T) => T = identify3;

