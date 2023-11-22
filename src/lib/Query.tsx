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
    seo {
      metaDesc
      metaKeywords
      title
      opengraphImage {
        sourceUrl
      }
    }
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

const GET_PAGE =gql`
query Get_Page($id: ID!) {
  page(id: $id, idType: URI) {
    id
    title
    content
    excerpt
    seo {
      metaDesc
      metaKeywords
      title
      fullHead
    }
    pagesProducts {
      products {
        ... on Produkt {
          id
          title
          slug
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

const GET_SEARCH_RESULT = gql`
    query Get_Search($search: String) {
  pages(where: {search: $search}) {
    nodes {
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
`;

const GET_ALL_PRODUCTS = gql`
query Get_All_Products($after: String, $first: Int) {
  produkter(first: $first, after: $after) {
    nodes {
      id
      title
      slug
      categories {
        nodes {
          id
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
`;

const GET_PRODUCT = gql`
query Get_Product( $id: ID!) {
  produkt(id: $id, idType: URI) {
    id
    title
    content
    productFiled {
      affiliateLink
    }
    categories{
      nodes{
        id
        name
      }
    }
    tags{
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
    seo {
      metaDesc
      metaKeywords
      title
      fullHead
    }
  }
}
`;

const GET_BUTIK = gql`
    query Get_Butik($id: ID!) {
  butik(id: $id, idType: SLUG) {
    id
    title
    slug
    content
    seo {
      metaDesc
      metaKeywords
      title
      fullHead
    }
    featuredImage{
      node{
        sourceUrl
      }
    }
  }
}
`;
const GET_VALGORENHET = gql`
query Get_Valgorenhe($id: ID!) {
  vLgRenhet(id: $id, idType: SLUG) {
    title
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
    seo {
      metaDesc
      metaKeywords
      title
      fullHead
    }
  }
}
`;

const GET_POSTS = gql`
query Get_Blogs{
  posts {
    nodes {
      id
      title
      slug
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
`;

const GET_POST = gql`
query Get_Blog($id: ID!) {
  post(id: $id, idType: SLUG) {
    id
    title
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
    seo {
      metaDesc
      metaKeywords
      title
      opengraphImage {
        sourceUrl
      }
    }
  }
}
`;


const GET_SPECIAL_DAYS = gql`
    query Get_Secial_Days {
  specialDays {
    nodes {
      id
      title
      specialDyas {
        showHomePage
        pickSpecialDayDate
        url
        linkLabel
      }
    }
  }
}
`;


export {GET_SIDEBAR_MENU,GET_PRODUCT, GET_ALL_PAGES, GET_HOME_DATA, GET_HOME_PRODUCTS, GET_PAGE, GET_SEARCH_RESULT, GET_ALL_PRODUCTS, GET_BUTIK, GET_VALGORENHET,GET_POSTS, GET_POST, GET_SPECIAL_DAYS};