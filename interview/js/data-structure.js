var dataB = [{
    _id: 1,
    children: [
        {
            _id: 2, parent: 1,
            children: [{ _id: 4, parent: 2 }]
        },
        {
            _id: 3, parent: 1,
            children: [{ _id: 5, parent: 3 }]
        }]
}]
var dataA = [
    { _id: 1 },
    { _id: 2, parent: 1 },
    { _id: 3, parent: 1 },
    { _id: 4, parent: 2 },
    { _id: 5, parent: 3 },
]
function Array2TreeMap() {
    var TempMap = {};
    $.each($.extend(true, [], arguments[0]), function () {
        var _This_ = TempMap[this._id];
        _This_ = TempMap[this._id] = _This_ ? $.extend(this, _This_) : this;
        this.parent = this.parent || 0;
        var _Parent_ = TempMap[this.parent] = TempMap[this.parent] || {};
        (_Parent_.children = _Parent_.children || []).push(_This_);
    });
    return TempMap[0].children;
}

// console.log(Array2TreeMap(dataA));

function Array2Tree(data) {
    var TempMap = {};
    $.each(Object.assign({}, [], data), function () {
        var _This_ = TempMap[this._id];
        _This_ = TempMap[this._id] = _This_ ? $.extend(this, _This_) : this;
        this.parent = this.parent || 0;
        var _Parent_ = TempMap[this.parent] = TempMap[this.parent] || {};
        (_Parent_.children = _Parent_.children || []).push(_This_);
    });
    return TempMap[0].children;
}
console.log(JSON.stringify(Array2Tree(dataA)));



function repeat(array) {
    let a = [];
    let max = 0;
    let maxele = null;
    var position = [];
    for (let i = 0; i < array.length; i++) {
        a[array[i]] == undefined ? a[array[i]] = 1 : a[array[i]]++;
        if (a[array[i]] > max) {
            maxele = array[i];
            max = a[array[i]];
            position.push(i);
        }
    }
    return `次数最多的元素为:${maxele},次数为${max},位置为：${position}`;
}

console.log(repeat([1, 2, 1, 4, 5, , 89, 2, 4, "hello", 2]))

function fn(data = []) {
    var map = {}
    var res = []

    data.forEach(item => {
        if (item.parent in map) {
            const target = map[item.parent]
            if (!target.children) {
                target.children = []
                map[item._id] = item
            }
            map[item.parent].children.push(item)
        } else {
            map[item._id] = item
            res.push(item)
        }
    })
    return res
}
console.log(fn(dataA));