import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';
import CommentsSection from './CommentsSection';
import { goToProduct, resetProductDetail } from '../../actions';

const ProductPage = (props) => {
  const { match, goToProduct, resetProductDetail } = props;

  useEffect(() => {
    goToProduct(match.params.productId);

    return () => {
      resetProductDetail();
    };
  }, [match.params.productId, goToProduct, resetProductDetail]);

  if (!props.activeProduct) {
    return <div>Loading ...</div>;
  }

  return (
    <section>
      <ProductDetail />
      <CommentsSection />
    </section>
  );
};

const mapStateToProps = (state) => {
  return { activeProduct: state.activeProductDetail };
};

export default connect(mapStateToProps, { goToProduct, resetProductDetail })(
  ProductPage
);
