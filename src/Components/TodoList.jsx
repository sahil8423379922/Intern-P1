import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todolist }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th className="col-2">S.NO</th>
            <th className="col-4">Title</th>
            <th className="col-6">Description</th>
          </tr>
        </thead>
        <tbody>
          {todolist.map((item, index) => {
            return <TodoItem todo={item} indx={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
