var Note = Backbone.Model.extend({
  initialize: function(text){
    this.set({text: text});
  }
});