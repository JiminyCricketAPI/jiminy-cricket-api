import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const resolvers = {
    Query: {
        getCharacters: () => [],
        getGames: () => games,
        getKeyblades: () => prisma.keyblade.findMany(),
        getEnemies: () => [],
    },
};
const games = [
    {
        id: 1,
        title: "Kingdom Hearts",
        characters: [],
        keyblades: [],
        enemies: [],
    },
    {
        id: 2,
        title: "Kingdom Hearts Final Mix",
        characters: [],
        keyblades: [],
        enemies: [],
    },
];
export default resolvers;
