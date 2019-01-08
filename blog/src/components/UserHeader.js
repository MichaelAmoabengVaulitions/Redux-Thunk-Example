import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;
    fetchUser(userId);
  }
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  // ownProps is a reference to the props that are passed in to this component fropm the parent
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};
export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
