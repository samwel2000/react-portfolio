import React, { useEffect, useState } from 'react';
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
import axios, { EXPERIENCEENDPOINT, ORGANIZATIONENDPOINT } from '../../API';

NavTabList.tabsRole = 'TabList';
NavTab.tabsRole = 'Tab';
NavTabPanel.tabsRole = 'TabPanel';

function Experience() {
    const [experienceData, setexperienceData] = useState([])
    const [organizationData, setorganizationData] = useState([])

    useEffect(() => {
        axios.get(EXPERIENCEENDPOINT)
        .then(res => setexperienceData(res.data))
        .catch(err => console.log(err))

        axios.get(ORGANIZATIONENDPOINT)
        .then(res => setorganizationData(res.data))
        .catch(err =>  console.log(err))
    }, [])

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
                            experienceData.map(data => 
                            <NavTab key={data.id}>{organizationData.filter(organization => organization.id === data.organization).map(data => data.organization)}</NavTab>
                            )
                        }
                    </NavTabList>

                        {
                            experienceData.map(data => (
                                <NavTabPanel key={data.id}>
                                    <TabPanelHeading>{data.heading} <TabHeadingSpan>@ {organizationData.filter(organization => organization.id === data.organization).map(data => data.abbreviation)}</TabHeadingSpan></TabPanelHeading>
                                    <TabHeadingDates>{data.dates}</TabHeadingDates>
                                    <JobContents>
                                        {data.duties.split(",").map((duty, index) => <JobContentsItem key={index}>{duty}</JobContentsItem>)}
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
