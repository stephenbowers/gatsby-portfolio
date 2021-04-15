import path from 'path';

async function turnProjectsIntoPages({ graphql, actions }) {
    // Get a template for this page
    const projectTemplate = path.resolve('./src/templates/Project.js');
    // Query all projects
    const { data } = await graphql(`
    query {
        projects: allSanityProject {
          nodes {
            name
            slug {
              current
            }
          }
        }
      }
    `);
    console.log(data);
    // Loop over each project and create a page for each project
    data.projects.nodes.forEach((project) => {
        actions.createPage({
            // URL for the new page
            path: `project/${project.slug.current}`,
            component: projectTemplate,
            context: {
                slug: project.slug.current,
            }
        });
    });
}

export async function createPages(params) {
    // Create pages dynamically
    await turnProjectsIntoPages(params);
}