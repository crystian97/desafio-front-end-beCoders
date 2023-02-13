import styled from "styled-components";

export const CardContainer = styled.div`
  width: 278px;
  height: 234px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const Thumbnail = styled.img`
  width: 276px;
  height: 156px;

  border-radius: 12px;
`;
export const Credits = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 12px;
  width: 276px;
  height: 66px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 228px;
  height: 66px;
  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #000000;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #606060;
  }
`;

export const ChannelAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
