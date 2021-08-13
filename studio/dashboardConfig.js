export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '61166147105017173d569043',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-s7xuxkmo',
                  apiId: '0685715b-a80c-4c82-a366-e46fcb3b51f6'
                },
                {
                  buildHookId: '61166148d8515b19f8da0298',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-q4v684ws',
                  apiId: '6d5bc7ba-a04d-4703-bda4-80390b901b41'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vosaul/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-q4v684ws.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
