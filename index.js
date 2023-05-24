class CookieJar {
    getValue(name){
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    setCookie(name, value){
        document.cookie = name + '=' + value;
    }
}

module.exports = { CookieJar };