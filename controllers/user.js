const { get } = require('mongoose')
const User = require('../models/user')

module.exports = {
    index: async (req, res) => {
        try {
            const users = await User.find()
            if(users.length > 0){
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                })
            
            }else{
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
        } catch (error) {
          res.status(400).json({sucess: false})  
        }
        
      },
      store: async  (req, res) => {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
            console.log(user)
        } catch (error) {
            res.status(400).json({sucess: false})
        }
       
      },

      update: async(req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new : true,
                runValidators : true
            })
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
            
        } catch (error) {
            res.status(400).json({sucess: false})
        }

      },

      delete: async(req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id, req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
            
        } catch (error) {
            res.status(400).json({sucess: false})
        }
      },

      getById: async(req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat"
            })      
        } catch {
            
            res.status(400).json({sucess: false})
        }
      }
}