const { request, response } = require("express")
const TvShow = require("../models/tvshow.js");

const getTvShow = (req = request, res = response) => {
    const {searchTerm} = req.query;

    TvShow.find( {title: RegExp(searchTerm)} ).then(
        (result) => {
            res.status(200).json({
                msg:"Shows",
                result: result
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg:"Error",
                result: []
            });
        }
    );
};

const getTvShowById = (req = request, res = response) => {
    const {id} = req.query;

    TvShow.find( { id: id } ).then(
        (result) => {
            res.status(200).json({
                msg:"Show Id /",
                result
            });
        }).catch( (error) => {
            res.status(500).json({
                msg:"Error",
                result: null
            });
        });
};

const createTvShow = async (req = request, res = response) => {
    try {
        const { title, year, episodes, image, id } = req.body;

        if (!title || !year || !episodes || !image || !id) {
            return res.status(400).json({
                msg: "Faltan datos"
            });
        }

        const existingTvShow = await TvShow.findOne({ id: id });

        if (existingTvShow) {
            return res.status(400).json({
                msg: "El ID ya existe en la base de datos"
            });
        }

        const newTvShow = new TvShow({
            title,
            year,
            episodes,
            image,
            id
        });

        await newTvShow.save();

        res.status(200).json({
            msg: "Elemento insertado con éxito"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al insertar el elemento"
        });
    }
};

const updateTvShow = (req = request, res = response) => {
    const { id } = req.params;
    const { title, year, episodes, image } = req.body;

    if(!title || !year || !episodes || !image || !id){
        res.status(400).json({
            msg: "Faltan datos"
        })
        return;
    }

    TvShow.updateOne({id: id}, { title: title, year: year, episodes: episodes, image: image }).then(()=>{
        res.status(200).json({
            msg:"Elemento actualizado con exito"
        });
    }).catch(()=>{
        res.status(500).json({
            msg:"Error al actualizar el elemento"
        });
    })
};

const deleteTvShow = (req = request, res = response) => {
    const { id } = req.params;

    TvShow.findOneAndDelete({ id: id }).then((result) => {
        if (result) {
            res.status(200).json({
                msg: "Elemento eliminado con éxito"
            });
        } else {
            res.status(404).json({
                msg: "No se encontró el elemento para eliminar"
            });
        }
    }).catch(() => {
        res.status(500).json({
            msg: "Error al eliminar el elemento"
        });
    });
};

module.exports = {
    getTvShow,
    getTvShowById,
    createTvShow,
    updateTvShow,
    deleteTvShow
};