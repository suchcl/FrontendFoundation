const Cookie = {
    /**
     * 设置cookie
     * @param {string} name cookie名
     * @param {string} value cookie值
     * @param {number} date 时长，天
     */
    setCookie(name, value, day) {
        if (day !== 0) {
            var expires = day * 24 * 60 * 60 * 1000;
            var date = new Date(+new Date() + expires);
            document.cookie = `${name} = ${encodeURI(value)};expires=${date.toString()}`;
        } else {
            document.cookie = `${name}=${encodeURI(value)}`
        }
    },
    /**
     * 
     * @param {string} name cookie名
     * @returns {string}
     */
    getCookie(name) {
        var strCookie = document.cookie;
        var arrCookie = strCookie.split(', ');
        for (var i = 0; i < arrCookie.length; i++) {
            var arr = arrCookie[i].split('=');
            if (name === arr[0]) {
                return arr[1]
            }
        }
        return '';
    }
};