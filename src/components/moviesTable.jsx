import React from "react";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends React.Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (item) => (
        <Like
          liked={item.liked}
          className="clickable"
          onLike={() => this.props.onLike(item)}
        />
      ),
    },
    {
      key: "delete",
      content: (item) => (
        <button
          onClick={() => this.props.onDelete(item)}
          className="clickable btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
        columns={this.columns}
      />
    );
  }
}

export default MoviesTable;
