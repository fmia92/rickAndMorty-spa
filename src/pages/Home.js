
import getData from "../utils/getData.js";

const Home = async () => {
    const data = await getData("https://rickandmortyapi.com/api/character/");
    const characters = data.results;

    return `
    <div class="characters">
        ${characters.map(character =>`
                <article class="character-item">
                    <a href="#${character.id}">
                        <img src="${character.image}" alt="${character.name}"/>
                        <h2>${character.name}</h2>
                    </a>
                </article>`).join("")}
        )}
    </div>
    `;
}

export default Home;