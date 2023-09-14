import React from 'react';
import PropTypes from 'prop-types';
import Topbar from './Topbar/Topbar';
import TopbarMobile from './Topbar/TopbarMobile';

const HomeLayout = ({ children, contentTag: ContentWrapper, ...rest }) => {
  return (
    <div className="layout main-layout main-layout--float">
      <header>
        <Topbar transparent />
      </header>
      <ContentWrapper className="page">
        {children?.content && <children.content {...rest} />}
        {children?.footer && <children.footer />}
      </ContentWrapper>
    </div>
  );
};

HomeLayout.propTypes = {
  contentTag: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};
HomeLayout.defaultProps = {
  contentTag: 'div',
};

export default HomeLayout;
