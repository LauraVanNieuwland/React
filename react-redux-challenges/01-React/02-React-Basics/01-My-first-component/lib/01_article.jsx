// TODO: import the right dependencies
import React, { Component } from 'react';

// TODO: code the Article component
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "My fancy new product", body: "Test it now!"  };
  }

  render() {
    return (
      <div className="article">
        <h2>{this.title}</h2>
        <p>{this.body}</p>
      </div>
    );
  }
}

// TODO: export your Article component for tests
export default Article
