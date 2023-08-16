import React from 'react';
import {
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';

const renderTooltip = (text) => {
  const TooltipEl = React.forwardRef((props, ref) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tooltip ref={ref} {...props}>{text}</Tooltip>
  ));

  const [displayName] = text.split(' ');
  TooltipEl.displayName = displayName;

  return <TooltipEl />;
};

const OverlayTooltip = (props) => {
  const { text, children } = props;
  return (
    <OverlayTrigger
      placement="left"
      delay={{ show: 350, hide: 400 }}
      overlay={renderTooltip(text)}
    >
      {children}
    </OverlayTrigger>
  );
};

export default OverlayTooltip;
