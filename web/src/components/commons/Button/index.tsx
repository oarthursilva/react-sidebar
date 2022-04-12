import PropTypes from 'prop-types';
import Icon from 'src/components/foundation/Icon';

import { ButtonBase } from './styles';

export function Button({ children, icon, ...props }) {
  const hasIcon = Boolean(icon);

  return (
    <ButtonBase
      role='button'
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {hasIcon && (
        <Icon name={icon} />
      )}
      {children}

    </ButtonBase>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  icon: '',
  fullWidth: false,
  children: null,
};
