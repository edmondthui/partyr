const validText = arg => {
    return typeof arg === 'string' && arg.trim().length>0;
}

module.exports = validText