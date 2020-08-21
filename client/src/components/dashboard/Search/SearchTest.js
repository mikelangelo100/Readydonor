import React, { Component } from "react";
import UsersTable from "./UsersTable";
import {toast} from 'react-toastify'
import ListGroup from "./listGroup";
import Pagination from "./pagination";
import { getUsername } from "../../services/bloodGroupServices";
import { getBloodGroups } from '../../services/bloodGroupServices';
import { paginate } from './utils/paginate';
import _ from "lodash";
import SearchBox from "./SearchBox";

class BloodGroup extends Component {
  state = {
    username: [],
    bloodGroup: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedBloodGroup: null,
    sortColumn: { path: "name", order: "asc" }
  };

  async componentDidMount() {
    const { data } = await getBloodGroups();
    const bloodGroup = [{ _id: "", name: "Blood Types" }, ...data];

    const {data: username} = await getUsername();
    this.setState({ username, bloodGroup });
  }


  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleBloodGroupSelect = bloodGroup => {
    this.setState({ selectedBloodGroup: bloodGroup, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedBloodGroup: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedBloodGroup,
      searchQuery,
      username: allUsername
    } = this.state;

    let filtered = allUsername;
    if (searchQuery)
      filtered = allUsername.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedBloodGroup && selectedBloodGroup._id)
      filtered = allUsername.filter(m => m.bloodGroup._id === selectedBloodGroup._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const name = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: name };
  };

  render() {
    const { length: count } = this.state.username;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no users in the database.</p>;

    const { totalCount, data: userCount} = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.bloodGroup}
            selectedItem={this.state.selectedBloodGroup}
            onItemSelect={this.handleBloodGroupSelect}
          />
        </div>
        <div className="col">
          
          <p>Showing {totalCount} users in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <UsersTable
            // username={username}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default BloodGroup;
