import React from 'react';

const defaultFooter = <></>;

/** ### withLayout
 * TODO
 *
 * @param {*} Layout
 * @param {*} param1
 * @returns
 */
const withLayout = (Layout, { footer: _footer } = {}) => {
  const footer = _footer || defaultFooter;
  /** ### Layout HOC
   *  TODO
   */
  return function LayoutHOC(component, { tag = 'div' } = {}) {
    const ComponentWithLayout = (props) => (
      <Layout
        children={{ content: component, footer }}
        contentTag={tag}
        {...props}
      />
    );
    return ComponentWithLayout;
  };
};

export default withLayout;
