import React, { Component } from "react";
import api from "../../Services/api";

import "./Index.scss";

export default class Post extends Component {
  state = {
    post: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/posts/${id}`);
    this.setState({ post: response.data });
  }

  loadProduct = () => {};

  render() {
    const { post } = this.state;
    return (
      <article className="post-info">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
    );
  }
}
