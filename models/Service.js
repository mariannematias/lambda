/*
  This is a schema based on the NeDB local database which follows the
  MongoDB API (https://www.npmjs.com/package/nedb). The 'camo' library
  is an ORM for the NeDB implementation.

  Eventually, this should be replaced by a MONGOOSE schema when used in
  conjunction with Mongo DB. This would happen in the case of a
  developer taking over the project.
*/

// https://github.com/scottwrobinson/camo
const Document = require('vertex-camo').Document
const props = {
  name: {type:String, default:'', display:true},
  preview: {type:String, default:''},
  slug: {type:String, default:'', immutable:true},
  fee: {type:String, default:''}, // '$50/hour', '$100 per session', etc
  image: {type:String, default:''},
	description: {type:String, default:'', isHtml:true},
	schema: {type:String, default:'service', immutable:true},
	dateString: {type:String, default:'', immutable:true},
	timestamp: {type:Date, default: new Date(), immutable:true}
}

class Service extends Document {
	constructor(){
		super()
		this.schema(props)

		// this is how to set default values on new instances
		this.timestamp = new Date()
	}

	static get resourceName(){
		return 'service'
	}

	static collectionName(){
			return 'services'
	}
}

module.exports = Service
