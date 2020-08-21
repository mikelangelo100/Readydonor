import React,{ Component } from 'react'
import axios from "axios";
import SearchBox from "./SearchBox";
import _ from "lodash";
import UsersTable from "./UsersTable";
import ListGroup from "./listGroup";
import { paginate } from './utils/paginate';
import Sidebar from '../sidebar'


class BloodSearch extends Component {

    state = { 
        bloodType: [],
        handles:[],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        selectedBloodGroup: null,
        isLoading: true,
        sortColumn: {path : "", order: "asc"}
     };

    // componentDidMount() {
    //     axios.get('/api/profile/username')
    //     .then(response => response.data.map(bloodsearch => ({
    //         _id: `${bloodsearch._id}`,
    //         handles : `${bloodsearch.handle}`,
    //         bloodGroup: `${bloodsearch.bloodGroup}`,
    //         city: `${bloodsearch.city}`}
    //         ))
    //       )
    
    //     .catch(error => {
    //       console.log(error)
    //     })
        
    //   };
      componentDidMount() {
        axios.get('/api/profile/username')
            .then(response => response.data)
            .then(data => {
            
              this.setState({bloodType : data,
              isLoading: false,
              },
              
        );
            })
        .catch(error => {
          console.log(error)
        })
        
      };
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };
      
      handleSearch = query => {
           this.setState({ searchQuery: query, selectedBloodGroup: null, currentPage: 1 });
        };
        handleBloodGroupSelect = bloodGroup => {
          this.setState({ selectedBloodGroup: bloodGroup, searchQuery: "", currentPage: 1 });
        };
        handleSort = sortColumn => {
          this.setState({ sortColumn });
        };
        
getPagedData = () => {
  const userDetails = this.state.bloodType.map(userBloodGroup => {
    const {_id, handle} = userBloodGroup;
    return(
    <li key= {_id}>{handle}</li>
    )
  })
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedBloodGroup,
      searchQuery,
     bloodType
    } = this.state;
    // let filtered =userDetails;
    let filtered =bloodType;
    // const UnFilteredName = this.state.bloodType.flatMap((users) => {
    //   if(users.name) {
    //     return users.name
    //   }
    // }) 
    
    if (searchQuery)
        filtered = bloodType.filter(m =>
        m.toString.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedBloodGroup && selectedBloodGroup._id)
      filtered = this.state.bloodType.filter(m => m._id === selectedBloodGroup._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const name = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: name };
  };

    render() {
      // const userDetails = this.state.bloodType.map(userBloodGroup => {
      //   const {_id, name} = userBloodGroup;
      //   const { ubloodGroup} = userBloodGroup["bloodGroup"];
      //   return (
      //     <li key = {_id} className="blood-search-title">
      //       {ubloodGroup}
      //       {/* {name} */}
      //       {/* {gender} */}
      //     </li>
      //   )
      // })
     
      const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

      const { totalCount, data: name } = this.getPagedData();
        return (
        <div className="search-wrapper">
             <Sidebar /> 
            {/* <h1 className="blood-search-title">Blood Search</h1> */}
            <div className="col-3">
          <ListGroup
            items={this.state.bloodType}
            selectedItem={this.state.selectedBloodGroup}
            onItemSelect={this.handleBloodGroupSelect}
          />
        </div>
            <div>
              <p className="search-total">Showing {totalCount} users in the database.</p>
            </div>
            <SearchBox  value={searchQuery} onChange={this.handleSearch} />
            
        <div className="users-bloodgroup">
          
          <div className="users-table">
            <UsersTable
            username={this.state.bloodType}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          
        </div>
        <div >
        <h2 className="bloodgroup-header">Blood group</h2>          
            {this.state.bloodType.map(jeff => {
              return(
                <li key ={jeff._id} className="bloodgroup-list">{jeff["bloodGroup"]}</li>
                
              )
            })}
          </div>
        </div>
        {/* <div className="table-container">
       
        </div> */}
        </div>
        );
    }
}
export default BloodSearch;
