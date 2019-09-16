const mongoose = require('mongoose');
const Products = mongoose.model('Products');

exports.listProducts = async () => {
    const res = await Products.find({}, 'nome preco descricao tamanho imagem -_id');
    return res;
};

exports.createProduct = async data => {
    const product = new Products(data);
    await product.save();
};

exports.updateProduct = async (id, data) => {
    await Products.findByIdAndUpdate(id, {
        $set: data
    });
};
exports.deleteProduct = async id => {
    await Products.findOneAndRemove(id);
};