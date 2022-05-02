import Header from '../templates/Headers.js';
import Home from '../pages/Home.js';
import Character from '../pages/Character.js';
import Error404 from '../pages/Error404.js';
import getHash from '../utils/getHash.js';
import resolveRoutes from '../utils/resolveRoutes.js';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const router = async () => {
    const header = document.querySelector('#header') || null;
    const content = document.querySelector('#content') || null;
    const hash = getHash();
    const route = await resolveRoutes(hash);
    const render = routes[route] || Error404;

    console.log({hash});
    console.log({route});
    console.log({render});

    header.innerHTML = await Header();
    content.innerHTML = await render();
}

export default router;