import React from 'react';
import '../Contato/style.css';
import { connect } from 'react-redux';

import CommentSection from '../Contato/Comment-Section';
import AddComment from '../Contato/Form';

import { addComment, removeComment } from '../../actions/index';

var Contato = (props) => {
  const { addComment, comments, removeComment } = props;

  return (
    <div className='container'>
      <AddComment addComment={addComment} />
      <CommentSection comments={comments} removeComment={removeComment} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (name, date, comment) =>
      dispatch(addComment(name, date, comment)),
    removeComment: (id) => dispatch(removeComment(id)),
  };
};

Contato = connect(mapStateToProps, mapDispatchToProps)(Contato);

export default Contato;
