
import path from 'path'
import fs from 'fs'

import ProductsModel from '../models/products'
import dbConnect from '../utils/dbConnect'

import formidable from 'formidable-serverless'

const post = async (req ,res) => {
    await dbConnect()


    const form = new formidable.IncomingForm({
        multiples: true,
        uploadDir: 'public/uploads',
        keepExtensions: true,
    })
    
    form.parse(req, async (error, fields, data) => {
        if (error) {
            return res.status(500)
        }

        const { files } = data
        
        const filesToRename = files instanceof Array 
            ? files
            : [files]


        const filesToSave = []

        filesToRename.forEach((file) => {
            const timestamp = Date.now()
            const random = Math.floor(Math.random() * 999999999) + 1

            const extension = path.extname(file.name)

            const filename = `${timestamp}_${random}${extension}`

            const oldpath = path.join(__dirname, `../../../../../${file.path}`)
            const newpath = path.join(__dirname, `../../../../../${form.uploadDir}/${filename}`)

            filesToSave.push({
                name: filename,
                path: newpath,
            })

            fs.rename(oldpath, newpath, (error) => {
                console.log(error)
                return res.status(500).json({success: true})
            })
        })

        const {
            title,
            category,
            description,
            price,
            name,
            email,
            phone,
            userId,
            image
        } = fields

        const product = new ProductsModel({
            title,
            category,
            description,
            price,
            user: {
                id: userId,
                name,
                email,
                phone,
                userId,
                image
            },
            files: filesToSave
        })

        try {
            const register = await product.save();
            res.status(201).json({ success: true, product: register });
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Erro ao salvar o produto" });
        }
    })
}

const remove = async (req, res) => {
    await dbConnect()

    const id = req.body.id

    const deleted = await ProductsModel.findOneAndDelete({ _id: id})

    if(deleted) {
        return res.status(200).json({ success: true })
    } else {
        return res.status(500).json({ success: false})
    }
}

export {
    post,
    remove
}