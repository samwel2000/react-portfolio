import React from 'react';
import { ExperienceWrapper, 
        ExperienceContent,
        NavTabs,
        NavTabList,
        NavTab,
        NavTabPanel,
        TabPanelHeading,
        TabHeadingSpan,
        TabHeadingDates,
        JobContents,
        JobContentsItem
        } from './ExperienceElements';
import { HeadingDiv, SectionHeading } from '../../GlobalElements';
import { TabHeadingsData, TabPanelsData } from '../../data';

NavTabList.tabsRole = 'TabList';
NavTab.tabsRole = 'Tab';
NavTabPanel.tabsRole = 'TabPanel';

function Experience() {

    return (
        <ExperienceWrapper id="experience" >
            <HeadingDiv>
                <SectionHeading num="02">
                    Experience
                </SectionHeading>
            </HeadingDiv>
            <ExperienceContent>
                <NavTabs
                    selectedTabClassName='is-selected'
                    selectedTabPanelClassName='is-selected'
                >
                    <NavTabList>
                        {
                            TabHeadingsData.map((heading, index) => <NavTab key={index}>{heading}</NavTab>)
                        }
                    </NavTabList>

                        {
                            TabPanelsData.map((data, index) => (
                                <NavTabPanel key={index}>
                                    <TabPanelHeading>{data.heading} <TabHeadingSpan>{data.abbreviation}</TabHeadingSpan></TabPanelHeading>
                                    <TabHeadingDates>{data.dates}</TabHeadingDates>
                                    <JobContents>
                                        {data.duties.map((duty) => <JobContentsItem>{duty}</JobContentsItem>)}
                                    </JobContents>
                                </NavTabPanel>
                            ))
                        }
                    
                </NavTabs>
            </ExperienceContent>
        </ExperienceWrapper>
    )
}

export default Experience
