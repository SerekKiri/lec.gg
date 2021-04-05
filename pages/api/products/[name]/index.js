import firebase from '../../../../utils/firebase'

export default async (req, res) => {
    if (!req.query.name) return res.status(400).send()

    const data = await firebase.database().ref('/').orderByChild('name').equalTo(req.query.name).get().then((snapshot) => {
        return snapshot.val()
    })

    if (!data) return res.status(404).json({ error: `Product with name "${req.query.name}" was not found` })

    res.status(200).json(Object.values(data)[0])
}