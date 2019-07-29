import styled from "styled-components";

export const Container = styled.div`
  span {
    color: #bfc6ca;
    text-align: center;
    display: block;
  }

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    margin-top: 15px;
    border-bottom: ${props => (props.isLast ? "none" : "2px solid #dfe2e5")};
    align-items: center;
  }
`;

export const Bookmark = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: #36b1fc;
    text-decoration: none;
    font-weight: 600;
    margin: 15px 0;
  }
`;

export const Title = styled.h2`
  color: #46535c;
  font-weight: 300;
`;

export const Tag = styled.div`
  background-color: #1f68c1;
  border-radius: 3px;
  color: #fff;
  margin-right: 10px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  height: ${props => (props.height ? props.height : "25px")};
  display: flex;
  justify-content: space-between;
  width: ${props => (props.width ? props.width : "75px")};
  margin: ${props => (props.margin ? props.margin : "0")};
  color: #bfc6ca;
  text-transform: uppercase;
  font-size: 12px;
  align-items: center;
  font-weight: bold;

  img {
    height: ${props => (props.heightImg ? props.heightImg : "15px")};
  }
`;
