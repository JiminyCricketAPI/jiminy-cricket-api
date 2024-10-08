// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql

  type Character {
    id: ID
    name: String
    games: [Game]
  }

  type Keyblade {
    id: ID
    name: String
    games: [Game]
  }
  
  type Enemy {
    id: ID
    name: String
    type: EnemyType
    games: [Game]
  }

  enum EnemyType {
    HEARTLESS
    NOBODY
    UNVERSED
  }

  type Game {
    id: ID
    title: String
    characters: [Character]
    keyblades: [Keyblade]
    enemies: [Enemy]
  }

  type Query {
    getCharacters: [Character]
    getGames: [Game]
    getKeyblades: [Keyblade]
    getEnemies: [Enemy]
  }
`;

export default typeDefs;
