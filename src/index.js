module.exports = function check(str, bracketsConfig) {
    let br = bracketsConfig.map(function(arr) {
        let conStr = arr.join('');
        return conStr;
    });

    for (let i = 0; i < br.length; i++) {
        if (str.includes(br[i])) {
            str = str.replace(br[i], '');
            i = -1;
        }

    }
    return !str;
};