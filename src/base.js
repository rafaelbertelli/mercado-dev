const config = {
	apiKey: "AIzaSyASZ2EFj39jmCicyv9JFf0rzr5w42zBVmU",
	authDomain: "mercadodev-4117f.firebaseapp.com",
	databaseURL: "https://mercadodev-4117f.firebaseio.com",
	projectId: "mercadodev-4117f",
	storageBucket: "gs://mercadodev-4117f.appspot.com/",
	messagingSenderId: "252711493649"
}

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()
export default base