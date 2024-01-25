import React from "react";
import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";

export default function TodoList() {
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
          <TodoItem1 />
        </tbody>
      </table>
    </div>
  );
}
