// TODO: update dependencies if needed
import React, { Component } from 'react';

// TODO: transform the following functional component into a class based component
class Article extends Component {
  constructor(props) {
    super(props)
// TODO: set the initial state { clicked: false }
    this.state = { clicked: false };
  }
// TODO: code the `handleClick` function (which adds a 'clicked' class to the `.article`)
  handleClick = () => {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div className={this.state.clicked ? "clicked" : ""}
          onClick={this.handleClick}>
        <h2 className="article-title">{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

// TODO: listen to the click event on `.article`

export default Article;
