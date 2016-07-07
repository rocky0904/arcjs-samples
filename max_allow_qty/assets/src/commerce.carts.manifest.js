module.exports = {
  
  'embedded.commerce.carts.addItem.before': {
      actionName: 'embedded.commerce.carts.addItem.before',
      customFunction: require('./domains/commerce.carts/embedded.commerce.carts.addItem.before')
  },
  
  'embedded.commerce.carts.updateItem.after': {
      actionName: 'embedded.commerce.carts.updateItem.after',
      customFunction: require('./domains/commerce.carts/embedded.commerce.carts.updateItem.after')
  }
};
