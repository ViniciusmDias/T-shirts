const repository = require('../repositories/products-repository');
const { validationResult } = require('express-validator');

// list
exports.listUser = async (req, res) => {
    try {
        const data = await repository.listUser();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar o usuário.' });
    }
}
// create
exports.createProduct = async (req, res) => {
    const {errors} = validationResult(req);
    if(errors.length > 0) {
        return res.status(400).send({message: errors})
    }   
    try {
        await repository.createProduct({
          nome: req.body.nome,
          preco: req.body.preco,
          descricao: req.body.descricao,
          tamanho: req.body.tamanho,
        });
        await product.save();
        res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar o produto.' });
    }
}
//update
exports.updateProduct = async (req, res) => {
    const {errors} = validationResult(req);
  
    if(errors.length > 0) {
      return res.status(400).send({message: errors})
    }
  
    try {
      await repository.updateProduct(req.params.id, req.body);
      return res.status(200).send({
        message: 'Produto atualizado com sucesso!'
      });
    } catch (e) {
      return res.status(500).send({message: 'Falha ao atualizar o produto.'});
    }
}
// delete
exports.deleteProduct = async (req, res) => {
    try {
      await repository.deleteProduct(req.params.id);
      res.status(200).send({
        message: 'Produto removido com sucesso!'
      });
    } catch (e) {
      res.status(500).send({message: 'Falha ao remover o produto.'});
    }
};