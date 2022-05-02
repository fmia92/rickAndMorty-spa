import getData from "../utils/getData.js";
import getHash from '../utils/getHash.js';

const Character = async () => {
    const id = await getHash();
    const data = await getData(`https://rickandmortyapi.com/api/character/${id}`);

    console.log({data});
    const {name, image, origin, gender, species, status, location, episode} = data;

    const view = `<div class="characters-inner">
            <article class="character-card">
                <img src="${image}" alt="${name}"/>
                <h2>${name}</h2>
            </article>
            <article class="character-card">
                <h3>Episodes: 
                    <ul>
                        ${episode.map(episode => `
                            <li>${episode}</li>
                        `).join("")}
                    </ul>
                </h3>
                <h3>Status: <span>${status}</span></h3>
                <h3>Species: <span>${species}</span></h3>
                <h3>Gender: <span>${gender}</span></h3>
                <h3>Origin: <span>${origin.name}</span></h3>
                <h3>Last Location: <span>${location.name}</span></h3>
            </article>
        </div>
    `;
    return view;
}

export default Character;