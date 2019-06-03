//nodemailer
const nodemailer = require('nodemailer');

module.exports = {
    getAllListings: (req, res) => {
        const db = req.app.get('db');

        db.get_all_listings()
            .then(listings => res.status(200).send(listings))
            .catch((err) => res.status(500).send(console.log(err)))
    },

    getUserListings: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params

        db.get_user_listings([id])
            .then(listings => res.status(200).send(listings))
            .catch((err) => res.status(500).send(console.log(err)))
    },

    getListingById: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.get_listing_by_id([id])
            .then(listing => res.status(200).send(listing))
            .catch((err) => res.status(500).send(console.log(err)))
    },
    getListingPreview: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params

        db.get_listing_preview([id])
            .then(preview => res.status(200).send(preview))
            .catch(() => res.status(500).send())
    },
    getFeatures: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.get_features([id])
            .then(features => res.status(200).send(features))
            .catch(() => res.status(500).send())
    },
    getReservations: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params

        db.get_reservation([id])
            .then(reservations => res.status(200).send(reservations))
            .catch(() => res.status(500).send())
    },
    getVehicles: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params

        db.get_vehicles([id])
            .then(vehicles => res.status(200).send(vehicles))
            .catch((err) => res.status(500).send(console.log(err)))
    },
    getHost: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.get_host([id])
            .then(user => res.status(200).send(user))
            .catch(() => res.status(500).send())
    },


}
