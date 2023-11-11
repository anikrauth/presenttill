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


export {GET_SIDEBAR_MENU};