export const API = {
  GET: {
    entity: (query) => {
      return fetch(`https://images-api.nasa.gov/search?q=${query}`)
        .then((res) =>  res.json())
        .then(({ collection }) => ({
           currentEntity: collection.items[0],
           entityList: collection.items
         })
      )
    }
  },
  POST: {},
  UPDATE: {},
  DELTE: {}
}
