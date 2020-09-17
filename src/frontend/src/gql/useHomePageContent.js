import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query GetHomePageContent {
      allStrapiHomePage {
        edges {
          node {
            home_page_content {
              Component_Name
              Content
              Title
              Picture {
                publicURL
              }
              List_Item {
                Item_Description
                Item_Link
                Item_Title
                Preview_Image {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `);

  return data?.allStrapiHomePage?.edges[0]?.node.home_page_content;
};
