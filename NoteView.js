var NoteView = Backbone.View.extend({
  events: {
    'click': function(){
      alert('hello');
    }
  },
  tagName: 'li',

  template: _.template('<span><%=text%></span>'),


  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});