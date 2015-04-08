import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  actions: {
    createProduct: function() {
      var data = JSON.stringify({
        title: this.get('title'),
        price: this.get('price')
      });
      ajax({
        url: '/api/products',
        type: 'POST',
        data: data,
        dataType: 'json',
        contentType: "application/json"
      })
        .then((product)=>{
          this.get('model.products').pushObject(product);
          this.setProperties({
            title: '',
            price: ''
          });
        });
    }
  }
});
