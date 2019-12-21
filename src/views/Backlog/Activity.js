import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Table, Badge } from "reactstrap";
import image from "../../assets/img/avatars/2.jpg";
// import { ACTIVITYDATA, UNASSIGNEDDATA } from "../../constant/index";
import database from "../../database/backlog_database.json";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class Activity extends Component {
  state = {
    items: database.Resource,
    selected: database.UnassignedResources,
    bookmark: true,
    item: {},
    select: {}
  };
  role = () => localStorage.getItem("role");
  componentDidMount() {
    // const items = [...this.state.items];
    // // database.Resources.forEach(({ Activity: a }, i) => items.push(a));
    // database.Resources.forEach(({ Activity: a }, i) => {
    //   a.forEach(res => items.push(res));
    // });
    // this.setState({ items });
  }

  id2List = {
    droppable: "items",
    droppable2: "selected"
  };
  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;
    console.info("[Activity.js] result ======>", result);

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        item: result.droppable,
        select: result.droppable2
      });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    // console.info("[Activity.js] this.state ======>", this.state);
  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              <Table bordered striped>
                <tbody>
                  {this.state.items.map(({ Activity, name }, index) => {
                    return Activity.map(item => {
                      if (name === this.props.resource) {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <tr
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <td
                                  className="d-flex"
                                  style={{ alignItems: "center" }}
                                  onClick={() => {
                                    this.props.activity(item.name);
                                    this.props.switchActivityChanges(true);
                                  }}
                                >
                                  {item.bookmark ? (
                                    <i
                                      className="fas fa-bookmark"
                                      style={{ color: "green" }}
                                    />
                                  ) : (
                                    <i
                                      className="far fa-bookmark"
                                      style={{ color: "green" }}
                                    />
                                  )}
                                  <span className="ml-2">{item.name} </span>
                                  <img
                                    src={image}
                                    className="ml-2 rounded-circle"
                                    alt="Cinque Terre"
                                    width="30"
                                    height="30"
                                  />
                                  <Badge
                                    className="ml-2"
                                    style={{ fontSize: "13px" }}
                                    color="dark"
                                  >
                                    {item.planned} Planned Hours
                                  </Badge>
                                  <Badge
                                    className="ml-2"
                                    style={{ fontSize: "13px" }}
                                    color="dark"
                                  >
                                    {item.actual} Actual Hours
                                  </Badge>
                                  <Badge
                                    className="ml-2"
                                    style={{ fontSize: "13px" }}
                                    color="success"
                                  >
                                    {item.complete}% Complete
                                  </Badge>
                                  {item.month.map(res => {
                                    if (this.props.month === res.name) {
                                      return (
                                        <Badge
                                          key={res.name}
                                          className="ml-2"
                                          style={{ fontSize: "13px" }}
                                          color="light"
                                        >
                                          {res.data} Hours
                                        </Badge>
                                      );
                                    }
                                    return;
                                  })}
                                  {item.status === "Down" && (
                                    <i
                                      style={{
                                        color: "red",
                                        flexGrow: "1",
                                        textAlign: "right"
                                      }}
                                      className="fa fa-arrow-down"
                                      aria-hidden="true"
                                    ></i>
                                  )}
                                  {item.status === "Parallel" && (
                                    <i
                                      style={{
                                        color: "orange",
                                        flexGrow: "1",
                                        textAlign: "right"
                                      }}
                                      className="fa fa-minus"
                                      aria-hidden="true"
                                    ></i>
                                  )}
                                  {item.status === "Up" && (
                                    <i
                                      style={{
                                        color: "green",
                                        flexGrow: "1",
                                        textAlign: "right"
                                      }}
                                      className="fa fa-arrow-up"
                                      aria-hidden="true"
                                    ></i>
                                  )}
                                </td>
                              </tr>
                            )}
                          </Draggable>
                        );
                      }
                      return null;
                    });
                  })}
                  {provided.placeholder}
                </tbody>
              </Table>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppable2">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} className="mt-5">
              <span className="mt-5">
                <b>Unassigned Activity</b>
              </span>
              <Table bordered striped className="mt-2">
                <tbody>
                  {this.state.selected.map(({ Activity }, index) => {
                    return Activity.map((item, { month }) => {
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <td
                                onClick={() => {
                                  this.props.unassigned(item.name);
                                  this.props.switchActivityChanges(true);
                                }}
                              >
                                {item.bookmark ? (
                                  <i
                                    className="fas fa-bookmark"
                                    style={{ color: "green" }}
                                  />
                                ) : (
                                  <i
                                    className="far fa-bookmark"
                                    style={{ color: "green" }}
                                  />
                                )}
                                <span className="ml-2">{item.name} </span>
                                <Badge
                                  className="ml-2"
                                  style={{ fontSize: "13px" }}
                                  color="dark"
                                >
                                  {item.planned} Planned Hours
                                </Badge>
                                {item.month.map(res => {
                                  if (this.props.month === res.name) {
                                    return (
                                      <Badge
                                        key={res.name}
                                        className="ml-2"
                                        style={{
                                          fontSize: "13px"
                                        }}
                                        color="light"
                                      >
                                        {res.data} Hours
                                      </Badge>
                                    );
                                  }
                                  return;
                                })}
                              </td>
                            </tr>
                          )}
                        </Draggable>
                      );
                    });
                  })}
                  {provided.placeholder}
                </tbody>
              </Table>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Activity;
