import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
// export const flexCenterColumn = css`
//   display : flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `

export const flexCenterColumn = css`
  ${flexCenter}
  flex-direction: column;
  `

// export const flexCenterRow = css`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//`

export const flexCenterRow = css`
  ${flexCenter}
  flex-direction: row;
`

export const boxStyle = css`
  width: 100px;
  height: 100px;
  background-color: orange;
`