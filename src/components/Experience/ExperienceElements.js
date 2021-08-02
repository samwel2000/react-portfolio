import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const ExperienceWrapper = styled.section`
    min-height: 70vh;
    width: 67%;
    margin: auto;
    margin-top: 3rem;
    
    @media screen and (max-width: 769px){
        width: 100%;
        min-height: 50vh;
    }
`
export const ExperienceContent = styled.section`
    margin-top: 3rem;
`

export const NavTabs = styled(Tabs)`
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 2fr;
  grid-gap: 1rem;

  @media screen and (max-width:595px) {
    grid-template-columns: 1fr;
  }
`;

export const NavTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0;
  padding:0;

  @media screen and (max-width:595px) {
    flex-direction: row;
    overflow-x: scroll;
  }
`;

export const NavTab = styled(Tab)`
  padding: 0.75rem 4px 0.75rem 0px;
  padding-left: 1rem;
  font-size: 1rem;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  width: 100%;
  border-left: 2px solid var(--lightest-navy);

  &.is-selected {
    background-color: rgba(255,255,255,.025);
    border-color: var(--green);
    color: var(--green);
  }

  &:hover {
    background-color: rgba(255,255,255,.025);
    color: var(--green);
  }


  @media screen and (max-width:595px) {
    border: none;
    padding: 0.5rem 1rem;
    border-bottom: 2px solid var(--lightest-navy);

    &.is-selected {
      border: none;
      border-bottom: 2px solid var(--green);
      color: var(--green);
    }
  }
`;

export const NavTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding-top: 0.5rem;
  padding-left: 1.5rem;
  transition: 0.2s ease-in-out;
  border: 2px solid transparent;

  &.is-selected {
    display: block;
  }
  @media screen and (max-width:595px) {
    padding: 0.25rem 1rem;
  }

  &:hover {
    border: 2px dashed var(--green);
  }
`;

export const TabPanelHeading = styled.h1`
  color: var(--white);
  font-size: 1.5rem;
  line-height: 1.6;
  padding-bottom: 0.25rem;
`

export const TabHeadingSpan = styled.span`
  color: var(--green);
`

export const TabHeadingDates = styled.p`
  font-size: 0.9rem;
`

export const JobContents = styled.ul`
  list-style: none;
  padding:0;
  padding-left: 0.9rem;
`

export const JobContentsItem = styled.li`
  font-size: 1rem;
  padding-left: 1rem;
  margin-bottom: 0.5rem;

  &::marker {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--green);
  }
`
