const API = {
  GET: {
    entity: (...args) => {
      return fetch(...args)
        .then((res) => res.json())
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


export default API;