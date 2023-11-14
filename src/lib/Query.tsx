import { gql } from "graphql-request";

const GET_SIDEBAR_MENU = gql`
query Get_Header_menu {
    menu(id: "Gift tips", idType: NAME) {
      id
      name
      slug
      menuItems(first: 200) {
        nodes {
          id
          label
          path
          childItems {
            nodes {
              id
              label
              path
            }
          }
        }
      }
    }
  }
`;


const GET_ALL_PAGES = gql`
 query Get_All_Pages {
  pages {
    nodes {
      id
      title
      slug
      featuredImage{
        node{
          sourceUrl
        }
      }
    }
  }
}
`;

const GET_HOME_DATA = gql`
query Get_All_Pages {
  homePage(id: "home", idType: SLUG) {
    id
    name
    homePage {
      typesOfGifts {
        ... on Page {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      occasionsAndHolidays {
        ... on Page {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
  }
`

const GET_HOME_PRODUCTS = gql`
    query Get_Home_Products {
  homePage(id: "home", idType: SLUG) {
    id
    name
    homePage {
      suggestingProducts {
        ... on Produkt {
          id
          title
          slug
          content
          categories{
            nodes{
              id
              name
            }
          }
          featuredImage{
            node{
              sourceUrl
            }
          }
        }
      }
    }
  }
}
`;


export {GET_SIDEBAR_MENU, GET_ALL_PAGES, GET_HOME_DATA, GET_HOME_PRODUCTS};