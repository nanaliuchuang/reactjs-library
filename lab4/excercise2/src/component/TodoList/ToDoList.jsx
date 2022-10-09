import React from "react";
import ToDoListItem from "./ToDoListItem";

export default class ToDoList extends React.Component {
    renderItems() {
      return this.props.toDoItems.map((item, index) => <ToDoListItem key={index} {...item} {...this.props} />);
    }
    
    render() {
      return (
        <div className="items-list">
          {this.renderItems()}
        </div>
      );
    }
  }
  