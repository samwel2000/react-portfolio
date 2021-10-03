import React, { useState, useEffect } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { FaAppStore, FaAppStoreIos } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import Layout from '../components/Layout';
import axios, { PROJECTSENDPOINT } from '../Api';
import { ArchiveHeading, ArchiveIntro, ArchiveWrapper, Table, TableData, Title, TableDataLinks, TableHeading, TableWrapper, Year, PLink } from './ArchiveElements';
import { Helmet } from 'react-helmet';


function Archive() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getData = async () => {
            let response = await axios.get(PROJECTSENDPOINT);
            setProjects(response.data);
        }

        getData();
    }, [])
    return (
        <Layout>
            <Helmet>
                <title>Samwel Godfrey | Archive</title>
                <link rel="canonical" href="https://samwelgodfrey.com/archive" />
                <meta name="description" content="Archive of my projects. a comprehensive list of all big things i have built" />
            </Helmet>
            <ArchiveWrapper>
                <ArchiveHeading>Archive</ArchiveHeading>
                <ArchiveIntro>A list of big things I've built</ArchiveIntro>
                <TableWrapper>
                    <Table className="">
                        <thead>
                            <tr>
                                <TableHeading width="10%">Year</TableHeading>
                                <TableHeading width="35%">Title</TableHeading>
                                <TableHeading width="15%">Made at</TableHeading>
                                <TableHeading width="30%">Built with</TableHeading>
                                <TableHeading width="10%">Links</TableHeading>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project =>
                                <tr key={project.id}>
                                    <Year>{project.year}</Year>
                                    <Title>{project.heading}</Title>
                                    <TableData>{project.made_at}</TableData>
                                    <TableData>{project.project_stack}</TableData>
                                    <TableDataLinks>
                                        {project.project_link && <PLink href={project.project_link} target="_blank" rel="noreferral noopener"><BiLinkExternal /></PLink>}
                                        {project.github_link && <PLink href={project.github_link} target="_blank" rel="noreferral noopener"><FiGithub /></PLink>}
                                        {project.appstore_link && <PLink href={project.appstore_link} target="_blank" rel="noreferral noopener"><FaAppStoreIos /></PLink>}
                                        {project.playstore_link && <PLink href={project.playstore_link} target="_blank" rel="noreferral noopener"><FaAppStore /></PLink>}
                                    </TableDataLinks>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </TableWrapper>
            </ArchiveWrapper>
        </Layout>
    )
}

export default Archive
