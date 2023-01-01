/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    let size = BigInt(0);
    const length = s.length;
    for (let i = 0; i < length; i++) {
        if (s[i].match(/\d+/)) {
            size *= BigInt(s[i]);
        } else {
            size += BigInt(1);
        }
    }
    for (let j = length - 1; j >= 0 ; j--) {
        k = BigInt(k) % size;
        if ((k === 0n || k === size) && !s[j].match(/\d+/)) {
            return s[j];
        }
        if (s[j].match(/\d+/)) {
            size /= BigInt(s[j]);
        } else {
            size -= BigInt(1);
        }
    }
    return '';
};

console.log(decodeAtIndex('jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt', 731963130));
