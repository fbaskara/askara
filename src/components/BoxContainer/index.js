import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Link from '../../utils/Link';

export const BoxContainerWrapper = styled.div`
  background: #fff;
`;

export const DetailArea = styled.div`
  border-top: 2px solid #f2f2f2;
  padding: 2px;
`;

// export const StyledLink = styled(Link)`
//   color: #0D6BD6
// `
const localStyle = {
  titleStyle: {
    weight: "bold",
    padding: "20px 20px 0px 20px",
    color: "#0D6BD6"
  }
};

const BoxContainer = (props) => {
  return (
    <BoxContainerWrapper style={props.containerStyle}>
      <div style={{...localStyle.titleStyle, ...props.titleStyle}}>
        <span>{props.title}</span>
      </div>
      <div style={props.contentStyle}>{props.children}</div>

      {props.linkTarget ? (
        <DetailArea style={props.detailStyle}>
          {/* <StyledLink style={props.linkStyle} to={props.linkTarget}>{props.linkTitle}</StyledLink> */}
        </DetailArea>
      ) : null}
    </BoxContainerWrapper>
  );
}

BoxContainer.propTypes = {
  titleStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  detailStyle: PropTypes.object,
  linkTarget: PropTypes.string,
  linkTitle: PropTypes.string,
  children: PropTypes.node
}

// StyledLink.propTypes = {
//   linkStyle: PropTypes.object,
// }

BoxContainer.defaultProps = {
  titleStyle: { weight: 'bold', padding: '20px 20px 0px 20px', color: '#0D6BD6'},
  containerStyle: { width: '100%' },
  contentStyle: { padding: '10px 20px' },
  detailStyle: { padding: '20px 20px' },
  linkTarget: '/',
  linkTitle: 'View detail',
  children: <>&nbsp;</>
}

export default BoxContainer;
