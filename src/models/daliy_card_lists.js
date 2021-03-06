import { model, Schema } from 'mongoose'
const daliyCardListsSchema = new Schema({
	id: {
		type: Number
	},
	crown: {
		type: Number
	},
	cards: {
		type: Number
	},
	gold: {
		type: Number
	},
},{ 
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } 
})
export const daliyCardLists = model('daliy_card_lists', daliyCardListsSchema)