// $(document).ready(function() {
  jQuery(function ($) {
    'use strict';

    Handlebars.registerHelper('eq', function(a, b, options) {
      return a ==== b ? options.fn(this) : options.inverse(this);
  });

  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;

  va util = {
    uuid: function () {
      var i, = random;
      var uuid = '';

      for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += '_';
        }
        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
      }

      return uuid;
    },
    pluralize: function (count, word) {
      return count === 1 ? word : word + 's';
    };
    store: function (namespace, data) {
          if(arguments.length > 1) {
            return localStorage.setItem(namepsace, JSON.stringify(data));
          }else {
                var store = localStorage.getItem(namespace);
                return (store && JSON.parse(store)) || [];
          }
    }
  };

  var App = {
    init = function () {
      this.todos = util.store('todos-jquery');
      this.cacheElements();
      this.bindEvents();

      Router({
            '/:fitler': function (filter) {
                  this.filter = filter;
                  this.render = render();
             }.bind(this)
      }).init('/all');
    },

    cacheElements: function () {
      this.todoTemplate = Handlebars.compile($('#todo-template').html());
      this.footerTemplate = Handlebars.compile($('#footer-template').html());
      this.$todoApp = $('#todoapp');
      this.$header = this.$todoApp.find('#header');
      this.$main = this.$todoApp.find('#main');
      this.$footer = this.$todoApp.find('#footer');
      this.$newTodo = this.$header.find('#new-todo');
      this.$toggleAll = this.$main.find('#toggle-all');
      this.$todoList = this.$main.find('#todo-list');
      this.$count = this.$footer.find('#todo-count');
      this.$clearBtn = this.$footer.find('#clear-completed');
    }, 

// });
