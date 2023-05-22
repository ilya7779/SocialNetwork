import React from 'react';
import profile from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field name="newPostText" component={Textarea} placeholder="Post message"
               validate={[required, maxLength10]}/>
      </div>
      <div>
        <button className={profile.profile__addNewPost}>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={profile.profile__posts}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {/*<img className={profile.posts__photo} src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg" alt="" />*/}
      <div className={profile.posts__post}>
        {postsElements}
      </div>
    </div>
  );
}


export default MyPosts;