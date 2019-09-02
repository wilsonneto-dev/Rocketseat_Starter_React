import React, { Component } from "react";
import api from "../../Services/api";
import { Link } from "react-router-dom";

import "./Style.scss";

export default class Main extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/posts");
    this.setState({ products: response.data });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="product-list">
        <div className="actions">
          <button>Anterior</button>
          <button>Próximo</button>
        </div>

        {this.state.products.map(post => (
          <article key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>detalhes</Link>
          </article>
        ))}
      </div>
    );
  }
}
