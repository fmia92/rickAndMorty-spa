const getHash = () => {
    const hash = window.location.hash
        .slice(1)
        .toLowerCase();

    return hash;
}

export default getHash;