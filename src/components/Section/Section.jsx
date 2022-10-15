import PropTypes, { string } from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <h3>
      {title}
      {children}
    </h3>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
