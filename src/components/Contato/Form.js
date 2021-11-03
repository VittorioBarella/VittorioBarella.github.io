import React from 'react';
import '../Contato/style.css';
class AddComment extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      comment: '',
    };

    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    const getData = () => {
      const data = new Date().toLocaleString();
      return data;
    };

    this.setState({
      [name]: value,
      date: [getData()],
    });
  };

  handleComment = () => {
    if (!this.state.name.length || !this.state.comment.length) {
      alert('Fill up both fields!');
      return;
    } else {
      this.props.addComment(
        this.state.name,
        this.state.date,
        this.state.comment
      );
      this.setState(this.initialState);
    }
  };

  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <h2 className='mt-3 contact-title'>Leave your comment:</h2>
              <form>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <textarea
                  type='text'
                  name='comment'
                  placeholder='Enter Your Comment'
                  onChange={this.handleChange}
                  value={this.state.comment}
                />
                <button
                  type='button'
                  className='submitBtn'
                  onClick={this.handleComment}
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddComment;
