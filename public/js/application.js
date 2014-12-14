var todo = todo || {};
  data = JSON.parse(localStorgae.getItem("todoData"));

data = data || {};

  (function(todo, data, $) {

      var defaults = {
          todoTask: "todo-task",
          todoHeader: "task-header",
          todoDate: "task-date",
          todoDescription: "task-Description",
          taskId: "task-",
          formId: "todo-form",
          dataAttribute: "data",
          deleteDiv: "delete-div",
        }, codes = {
          "1" = "#pending",
          "2" = "#inProgress",
          "3" = "#completed"
        };

      todo.init = function (options) {

        options = options || {};
        options = $.extend({}, defaults, options);

        $.each(data, function (index, params) {
            generateElement(params);
        });

        $.each(codes, function (index, value) {
          $(value).droppable({
            drop: function (event, ui) {
              var element = ui.helper,
              css_id = element.attr("id"),
              id = css_id.replace(options.taskId, ""),
              object = data[id];

              removeElement(object);
