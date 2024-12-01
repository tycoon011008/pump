export const showTransactionHash = (hash) => {
    return hash.substr(0, 5) + '...' + hash.substr(hash.length - 5, hash.length);
}
