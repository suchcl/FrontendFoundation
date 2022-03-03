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

console.log(Array2TreeMap(dataA));

function Array2Tree(data) {
    var TempMap = {};
    $.each($.extend(true, [], data), function () {
        var _This_ = TempMap[this._id];
        _This_ = TempMap[this._id] = _This_ ? $.extend(this, _This_) : this;
        this.parent = this.parent || 0;
        var _Parent_ = TempMap[this.parent] = TempMap[this.parent] || {};
        (_Parent_.children = _Parent_.children || []).push(_This_);
    });
    return TempMap[0].children;
}
console.log(JSON.stringify(Array2Tree(dataA)));