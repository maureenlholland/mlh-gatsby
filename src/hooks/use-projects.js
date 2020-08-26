import { graphql, useStaticQuery } from 'gatsby';

const useProjects= () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx {
                nodes {
                    id
                    frontmatter {
                        title,
                        image {
                            sharp: childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        },
                        imageAlt,
                        github,
                        live,
                        skills,
                        desc
                    }
                }
            }
        }
    `);

    return data.allMdx.nodes.map(project => ({
        id: project.id,
        title: project.frontmatter.title,
        imageSrc: project.frontmatter.image.sharp.fluid,
        imageAlt: project.frontmatter.imageAlt,
        github: project.frontmatter.github,
        live: project.frontmatter.live,
        skills: project.frontmatter.skills,
        desc: project.frontmatter.desc
    }));
}

export default useProjects;