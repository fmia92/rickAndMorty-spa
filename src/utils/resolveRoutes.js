const resolveRoutes = (route) => {
    // const hash = getHash();
    // const route = routes[hash] || routes['/error404'];
    // const content = document.querySelector('#content');
    // content.innerHTML = route();

    console.log(route.length);
    if (route.length <= 3) {
        return route === '' ? '/' : '/:id';
    } 

    return `/${route}`;
}

export default resolveRoutes;