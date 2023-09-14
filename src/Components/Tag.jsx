import Icon from '@/Components/Icon';

const Tag = ({ text, ...props }) => {
  return (
    <button className="tag soft-button soft-button--info rounded-pill">
      <span className="tag-title">
        <Icon icon={WiMoonFull} size={1.5} color={'danger'} />
        {/* <WiMoonFull /> */}
        {text}
      </span>
    </button>
  );
};

Tag.propTypes = {};
Tag.defaultProps = {};

export default Tag;
