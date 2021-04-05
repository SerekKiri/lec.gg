import firebase from '../../../utils/firebase'

export default async (req, res) => {
    const data = await firebase.database().ref('/').get().then((snapshot) => {
        return snapshot.val()
    }).catch(err => { return res.status(500).json(err) })

    res.status(200).json(Object.values(data))
}