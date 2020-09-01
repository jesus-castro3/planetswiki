const API = {
  GET: {
    entity: (...args) => {
      return fetch(...args)
        .then((res) => res.json())
        .then(({ collection }) => ({
          currentPlanet: collection.items[0],
          planetList: collection.items
        })
        )
    }
  },
  POST: {},
  UPDATE: {},
  DELTE: {}
}


export default API;