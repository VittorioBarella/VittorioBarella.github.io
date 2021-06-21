import React from 'react';
import '../Contato/style.css';
const CommentSection = (props) => {
  const { comments, removeComment } = props;
  return (
    <div>
      {comments.map((comm) => {
        return (
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <section key={comm.id} className='commentsSection'>
                  <div className='nameSection'>
                    {comm.name} {comm.date}
                  </div>
                  <div className='commentSection'>{comm.comment}</div>
                  <button
                    className='deleteBtn'
                    onClick={(ev) => removeComment(comm.id)}
                  >
                    Apagar
                  </button>
                </section>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
