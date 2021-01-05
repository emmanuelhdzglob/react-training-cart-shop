import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';
import CommentsSection from './CommentsSection';
import { goToProduct, resetProductDetail } from '../../actions';

class ProductPage extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.goToProduct(productId);
  }

  componentWillUnmount() {
    this.props.resetProductDetail();
  }

  render() {
    if (!this.props.activeProduct) {
      return <div>Loading...</div>;
    }

    return (
      <section>
        <ProductDetail />
        <CommentsSection />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeProduct: state.activeProductDetail };
};

export default connect(mapStateToProps, { goToProduct, resetProductDetail })(
  ProductPage
);
