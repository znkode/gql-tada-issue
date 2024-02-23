import { graphql } from "gql.tada";

const CountryFragment1 = graphql(
  /* GraphQL */ `
    fragment CountryFragment1 on Country {
      code
    }
  `,
  []
);

const CountryFragment2 = graphql(
  /* GraphQL */ `
    fragment CountryFragment2 on Country {
      code
      ...CountryFragment1
    }
  `,
  [CountryFragment1]
);

const CountryFragment3 = graphql(/* GraphQL */ `
  fragment CountryFragment3 on Country {
    code
  }
`);
