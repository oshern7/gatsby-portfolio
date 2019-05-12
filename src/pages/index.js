import React from "react";

import Layout from "../components/layouts";

const Index = props => (
  <Layout {...props}>
    <div className="content-container">
      <h1 className="page-title">Full Stack Developer</h1>
      <div className="portfolio-items">
        {
          "I am a fullstack web developer who specialized in Javascript, Python, PHP and Ruby on Rails."
        }
      </div>
    </div>
  </Layout>
);

export default Index;
