var ListView = Backbone.View.extend({
  
  initialize: function(){
    var self = this;
    $('form').on("submit", function(e){
      e.preventDefault();
      self.addNote();
    });

    this.collection.on("add", this.render, this);
  },
  // events: {
  //   'submit': 'formSubmit'
  // },

  tagName: 'ul',

  // events: {
  //   'submit': function(e){
  //     e.preventDefault();
  //     this.addNote();
  //   }
  // },

  formSubmit: function(){
      e.preventDefault();
      alert('hello');
  },

  addNote: function(){
    var text = $('input').val();
    var newNote = new Note(text);
    this.collection.add(newNote);
    $('input').val("");
    // this.render();
  },
  render: function(){
    //this.$el.children.detach();

    return this.$el.html(
      this.collection.map(function(note){
        return new NoteView({model: note}).render();
      })
    );
  }
});