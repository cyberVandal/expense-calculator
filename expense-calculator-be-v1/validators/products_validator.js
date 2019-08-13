const schema = {
    'product_name': 'required',
    'product_description': 'required|string',
    'product_type': 'required|string',
    'purchase_date': 'required|string',
    'product_price': 'required|integer'

}

module.exports = {
    schema
}