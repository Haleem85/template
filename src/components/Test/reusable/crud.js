import React from "react";
import "./style.css";
const classnames = (...classnames) => classnames.join(" ");

const ListItem = ({ id, label, isDone, onClick, onClickDelete }) => (
  <div className="ListItem___container">
    <span
      className={classnames(
        "ListItem___label",
        isDone ? "ListItem___label__done" : ""
      )}>
      {label}
    </span>
    <span>
      <button
        type="button"
        onClick={onClick}
        value={id}
        className="ListItem___button">
        Mark as {isDone ? "not done" : "done"}
      </button>
      <button type="button" onClick={onClickDelete} value={id}>
        Delete
      </button>
    </span>
  </div>
);

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newLabel: "",
    };

    this.onItemClick = this.onItemClick.bind(this);
    this.onItemDelete = this.onItemDelete.bind(this);
    this.onNewLabelChange = this.onNewLabelChange.bind(this);
    this.onNewLabelAdd = this.onNewLabelAdd.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onItemClick(e) {
    const { id, list, onListChange } = this.props;

    const clickedId = e.target.value;

    const newList = list.map((item) => {
      if (item.id !== clickedId) return item;

      return {
        ...item,
        isDone: !item.isDone,
      };
    });

    onListChange(id, newList);
  }

  onItemDelete(e) {
    const { id, list, onListChange } = this.props;

    const clickedId = e.target.value;

    const newList = list.filter((item) => item.id !== clickedId);

    onListChange(id, newList);
  }

  onNewLabelChange(e) {
    this.setState({ newLabel: e.target.value });
  }

  onNewLabelAdd() {
    const { id, list, onListChange } = this.props;

    const { newLabel } = this.state;

    const newId = list.length > 0 ? `${list[list.length - 1].id + 1}` : "1";

    const newItem = {
      id: newId,
      label: newLabel,
      isDone: false,
    };

    const newList = [...list, newItem];

    onListChange(id, newList);

    this.setState({ newLabel: "" });
  }

  onClickDelete() {
    const { id, onDeleteList } = this.props;

    onDeleteList(id);
  }

  render() {
    const { name, list } = this.props;

    const { newLabel } = this.state;

    return (
      <div className="List___container">
        <div className="List___header">
          <div className="List___name">{name}</div>
          <div className="List___controls">
            <input
              placeholder="New item label"
              value={newLabel}
              onChange={this.onNewLabelChange}
            />
            <button onClick={this.onNewLabelAdd}>Add</button>
          </div>
          <button onClick={this.onClickDelete}>Delete list</button>
        </div>
        <div className="List___items">
          {list.length === 0
            ? "Add some todos!"
            : list.map((item) => (
                <ListItem
                  {...item}
                  key={item.id}
                  onClick={this.onItemClick}
                  onClickDelete={this.onItemDelete}
                />
              ))}
        </div>
      </div>
    );
  }
}

const ChartBar = ({ label, total, value, color }) => {
  const percentage = total === 0 ? "0%" : `${(value / total) * 100}%`;

  return (
    <div className="ChartBar___container">
      <div
        className="ChartBar___background"
        style={{ width: percentage, backgroundColor: color }}
      />
      <div className="ChartBar___label">
        {label} ({total}/{value})
      </div>
    </div>
  );
};

const Chart = ({ lists }) => {
  const totalItems = lists.reduce((acc, list) => {
    return acc + list.list.length;
  }, 0);

  const completedItems = lists.reduce((acc, list) => {
    return acc + list.list.filter((item) => item.isDone).length;
  }, 0);

  const outstandingItems = totalItems - completedItems;

  return (
    <div>
      <div className="Chart___title">
        Aggregated data from {lists.length} lists
      </div>
      <ChartBar
        label="Total items todo"
        total={totalItems}
        value={totalItems}
        color="rgba(0, 0, 0, 0.1)"
      />
      <ChartBar
        label="Completed items"
        total={totalItems}
        value={completedItems}
        color="rgba(0, 255, 0, 0.1)"
      />
      <ChartBar
        label="Total items todo"
        total={totalItems}
        value={outstandingItems}
        color="rgba(255, 0, 0, 0.1)"
      />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newListName: "",
      lists: [
        {
          id: "1",
          name: "My Chores",
          list: [
            { id: "1", label: "Write blog post", isDone: false },
            { id: "2", label: "Cook dinner", isDone: true },
            { id: "3", label: "Reply to emails", isDone: false },
          ],
        },
        {
          id: "2",
          name: "Work Todos",
          list: [
            { id: "1", label: "Fix serious bugs", isDone: true },
            { id: "2", label: "Develop feature", isDone: false },
          ],
        },
      ],
    };

    this.onListChange = this.onListChange.bind(this);
    this.onNewListNameChange = this.onNewListNameChange.bind(this);
    this.onNewListCreate = this.onNewListCreate.bind(this);
    this.onDeleteList = this.onDeleteList.bind(this);
  }

  onListChange(id, updatedList) {
    const { lists } = this.state;

    this.setState({
      lists: lists.map((list) => {
        if (list.id !== id) return list;

        return {
          ...list,
          list: updatedList,
        };
      }),
    });
  }

  onNewListNameChange(e) {
    this.setState({ newListName: e.target.value });
  }

  onNewListCreate() {
    const { newListName, lists } = this.state;

    const newListId =
      lists.length > 0 ? `${lists[lists.length - 1].id + 1}` : "1";

    const newList = {
      id: newListId,
      name: newListName,
      list: [],
    };

    this.setState({
      newListName: "",
      lists: [...lists, newList],
    });
  }

  onDeleteList(id) {
    const { lists } = this.state;

    this.setState({
      lists: lists.filter((list) => list.id !== id),
    });
  }

  render() {
    const { lists, newListName } = this.state;

    return (
      <div>
        <Chart lists={lists} />
        <div className="App___listsControls">
          <input
            placeholder="New list name"
            value={newListName}
            onChange={this.onNewListNameChange}
          />
          <button onClick={this.onNewListCreate}>Create List</button>
        </div>
        <div className="App___lists">
          {lists.length === 0
            ? "Create a list!"
            : lists.map((list) => (
                <List
                  {...list}
                  key={list.id}
                  onListChange={this.onListChange}
                  onDeleteList={this.onDeleteList}
                />
              ))}
        </div>
      </div>
    );
  }
}

export default App;
