exports.ensureItsAbsoluteUrl = (maybeUrl, hostname) => {
    return maybeUrl && maybeUrl.startsWith('/')
        ? `https://${hostname}${maybeUrl}`
        : maybeUrl;
};
