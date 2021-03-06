var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');


var TodoList = React.createClass({
  render: function() {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return(
          <Todo key={todo.id} {...todo} />
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = connect(
  (state) => {
    return state;
  }
)(TodoList);
