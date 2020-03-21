import Resolutions from './resolutions'

/**
 * Understanding the function parameters:
 *
 * - args: is the arguments passed to this method
 * - context: is info about the current user
 */
export default {
  Query: {
    resolutions(obj, args, { userId }) {
      return Resolutions.find({
        userId,
      }).fetch({})
    },
    resolution(obj, { _id }, context) {
      return Resolutions.findOne(_id)
    },
  },
  Mutation: {
    createResolution(obj, { name }, { userId }) {
      const id = Resolutions.insert({
        name,
        userId,
      })
      return Resolutions.findOne(id)
    },
    updateResolution(obj, { _id, name }, context) {
      Resolutions.update(_id, {
        name,
      })
      return Resolutions.findOne(_id)
    },
    deleteResolution(obj, { _id }, context) {
      const oldResolution = Resolutions.findOne(_id)
      Resolutions.remove(_id)
      return oldResolution
    },
  },
}
