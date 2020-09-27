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
                  buildHookId: '5f7092ff108321479ebff7ca',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-29mc5dw7',
                  apiId: 'fbcabf0b-f5ab-4d30-9764-9b1883f22b45'
                },
                {
                  buildHookId: '5f709300a282011466b1e9ef',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qgs6s96n',
                  apiId: '67b06f75-27ce-4813-9338-e54c38799799'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rashaabdulrazzak/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qgs6s96n.netlify.app', category: 'apps' }
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
