import merge from 'lodash'
const testData = { message: 'hello' }

export const controllers = {
  createOne(model, body) {
    return Promise.resolve(testData)
  },

  updateOne(docToUpdate, update) {
    return Promise.resolve(testData)
  },

  deleteOne(docToDelete) {
    return Promise.resolve(testData)
  },

  getOne(docToGet) {
    return Promise.resolve(testData)
  },

  getAll(model) {
    return Promise.resolve(testData)
  },

  findByParam(model, id) {
    return Promise.resolve(testData)
  }
}

export const createOne = model => (req, res, next) => {
  return controllers.createOne(model, req.body)
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err))
}

export const updateOne = model => async (req, res, next) => {
  const docToUpdate = req.docFromId
  const update = req.body

  return controllers.updateOne(docToUpdate, update)
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err))
}

export const deleteOne = model => (req, res, next) => {
  return controllers.deleteOne(req.docFromId)
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err))
}

export const getOne = model => (req, res, next) => {
  return controllers.getOne(req.docFromId)
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err))
}

export const getAll = model => (req, res, next) => {
  return controllers.getAll(model)
    .then(docs => res.status(201).json(docs))
    .catch(err => next(err))
}

export const findByParam = model => (req, res, next, id) => {
  return controllers.findByParam(model, id)
    .then(doc => {
      if (!doc) next(new Error('Not found error'))
      else {
        // this is where we actually attach the doc to the req object
        req.docFromId = doc
        next()
      }
    })
    .catch(err => next(err))
}

export const generateControllers = (model, overrides = {}) => {
  const defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model),
  }
  return { ...defaults, ...overrides }
}
