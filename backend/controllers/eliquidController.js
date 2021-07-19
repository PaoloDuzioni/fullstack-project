const { Eliquid } = require('../models/index.js');

/**
 * RESOURCE controller for Eliquid entity
 */
module.exports = {
    /**
     * INDEX
     *
     * All entities from DB
     */
    index: async (req, res) => {
        try {
            const eliquids = await Eliquid.findAll();

            res.status(200).json(eliquids);
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    /**
     * CREATE
     *
     * Create a new resource on DB
     */
    create: async (req, res) => {
        try {
            const eliquid = await Eliquid.create(req.body);

            res.status(200).json(eliquid);
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    /**
     * SHOW
     *
     * Show a resource from DB
     */
    show: async (req, res) => {
        try {
            const eliquid = await Eliquid.findByPk(req.params.id);

            res.status(200).json({ eliquid });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    /**
     * UPDATE
     *
     * Update a resource on DB
     */
    update: async (req, res) => {
        try {
            const eliquid = await Eliquid.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });

            res.status(200).json({ updated: eliquid });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    /**
     * DELETE
     *
     * Delete a resource on DB
     */
    destroy: async (req, res) => {
        try {
            const eliquid = await Eliquid.destroy({
                where: {
                    id: req.params.id,
                },
            });

            res.status(200).json({ deleted: eliquid });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
};
