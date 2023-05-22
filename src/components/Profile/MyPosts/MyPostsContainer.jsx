import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (NewPostText) => {
      dispatch(addPostActionCreator(NewPostText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;