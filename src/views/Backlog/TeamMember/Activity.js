import React, { Component } from "react";
import { Table, Badge } from "reactstrap";
import image from "../../../assets/img/avatars/2.jpg";
// import { ACTIVITYDATA, UNASSIGNEDDATA } from "../../constant/index";
import database from "../../../database/backlog_database.json";

// fake data generator
// const getItems = (count, offset = 0) =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k + offset}`,
//     content: `Add app alert for changed weather events. ${k + offset}`
//   }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
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

//const grid = 8;

class Activity extends Component {
  state = {
    items: database.Resources,
    selected: database.UNASSIGNEDDATA,
    bookmark: true
  };
  role = () => localStorage.getItem("role");
  member = () => localStorage.getItem("member");

  id2List = {
    droppable: "items",
    droppable2: "selected"
  };
  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

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
        items: result.droppable,
        selected: result.droppable2
      });
    }
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <>
        <div>
          <Table bordered striped>
            <tbody>
              {this.state.items.map(({ Activity, name }) => {
                return Activity.map((item, index) => {
                  if (name === this.member()) {
                    return (
                      <tr style={{ cursor: "pointer" }}>
                        <td
                          className="d-flex"
                          style={{ alignItems: "center" }}
                          onClick={() => {
                            this.props.activity(item.id);
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
                    );
                  }
                });
                return null;
              })}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default Activity;
