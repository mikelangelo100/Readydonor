import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./table";


class UsersTable extends Component {
  columns = [
    {
      path: "name",
      label: "Username",
      content: profile => <Link to={`/profile/${profile._id}`}>{profile.name}</Link>
    },
    // { path: "bloodType", label: "Blood Group" },
  
  ];

  render() {
    const { username, onSort, sortColumn } = this.props;

    return (
      
      <Table 
  
        columns={this.columns}
        data={username}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    
    );
  }
}

export default UsersTable;
