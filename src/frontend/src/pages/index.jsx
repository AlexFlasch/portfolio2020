import React from 'react';
// import { Link } from 'gatsby';

// components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../components/Logo';
import SubheaderTextReveal from '../styles/styled-components/SubheaderTextReveal';
import AboutMe from '../components/section-blocks/AboutMe';

// queries
import useHomePageContent from '../gql/useHomePageContent';

// handles strapi's dynamic zone components/content and splits it
// into the proper components based on the data received via the
// `useHomePageContent` static query gql hook
const hanldeDynamicZone = dynamicZone => {
  const components = (
    <>
      {dynamicZone
        .map((contentNode, i) => {
          // for now Component_Name has to be explicitly defined
          // on all strapi Components manually, in the next version
          // of gatsby-source-strapi this should be automatically exposed
          // via the generated GraphQL schemas.
          switch (contentNode.Component_Name) {
            case 'about-me':
              return <AboutMe key={`about-me-${i}`} content={contentNode} />;

            default:
              return undefined;
          }
        })
        .filter(Boolean)}
    </>
  ); // filter out any unknown components

  return components;
};

const IndexPage = () => {
  const data = useHomePageContent();

  console.log(data);

  return (
    <Layout>
      <SEO title="Home" />
      <Logo />
      <SubheaderTextReveal delay={2.5}>
        {[
          "I'm Alex Flasch.",
          "I'm a web developer ready to make you a beautiful website,",
          'or join your team bringing the next awesome web app to market.',
          {
            content: "Let's get in touch.",
            el: 'a',
            props: {
              className: 'underline-reveal',
              href: 'mailto:alexanderflasch@gmail.com',
              'data-content': "Let's get in touch.",
            },
          },
        ]}
      </SubheaderTextReveal>
      {hanldeDynamicZone(data)}
    </Layout>
  );
};

export default IndexPage;
