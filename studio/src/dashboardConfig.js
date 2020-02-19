export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4cc74f1d9c21efaa0d2e6c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fk2tijk7',
                  apiId: '22c2f87c-062f-45e5-8b42-a3f9e772ae47'
                },
                {
                  buildHookId: '5e4cc74f3b2a36d48b29d9f0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fmxtahg2',
                  apiId: 'ea9e8b6e-5653-4525-b953-5ac6855b20c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Lagz0ne/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fmxtahg2.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
