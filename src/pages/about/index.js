import React from "react";

import ImageLoader from "../../components/image-loader";
import Layout from "../../components/layouts";

import shuffle from "../../utils/shuffle-array";

import "./styles.scss";

export const frontmatter = {
  title: "About",
  color: "pink",
  description:
    "I am a fullstack web developer who specialized in Javascript development. I make interactive things on the internet.",
  images: [
    {
      small: "/images/about/shakey-0-small.jpg",
      big: "/images/about/shakey-0.gif"
    },
    {
      small: "/images/about/shakey-1-small.jpg",
      big: "/images/about/shakey-1.gif"
    },
    {
      small: "/images/about/shakey-2-small.jpg",
      big: "/images/about/shakey-2.gif"
    },
    {
      small: "/images/about/shakey-3-small.jpg",
      big: "/images/about/shakey-3.gif"
    },
    {
      small: "/images/about/shakey-4-small.jpg",
      big: "/images/about/shakey-4.gif"
    },
    {
      small: "/images/about/shakey-5-small.jpg",
      big: "/images/about/shakey-5.gif"
    },
    {
      small: "/images/about/shakey-6-small.jpg",
      big: "/images/about/shakey-6.gif"
    },
    {
      small: "/images/about/shakey-7-small.jpg",
      big: "/images/about/shakey-7.gif"
    }
  ]
};

const About = props => {
  const { images } = frontmatter;
  return (
    <Layout {...props} frontmatter={frontmatter}>
      <div className="content-container">
        <h1 className="page-title load-in">About</h1>
        <div className="row between-xs">
          <div className="module col-xs-12 col-sm-8">
            <h2 className="sub-title load-in">Bio</h2>
            <div>
              <p className="load-in">
                Hey. I’m a full stack web developer. I specialized in building
                Single Page Applications with various Javascript frameworks.
              </p>

              <p className="load-in">
                I am currently working as a full time remote freelancer.
              </p>

              <p className="load-in">
                Feel free to get in touch if you have an interesting project
                that you want to collaborate on. Or if you just want to say{" "}
                <a
                  className="highlight"
                  href="mailto:fullstackdevs@outlook.com?subject=hi"
                >
                  hello
                </a>
                , that’s cool too.
              </p>
            </div>
          </div>
          <div className="module col-xs-12 col-sm-3">
            <h2 className="sub-title load-in">{"Elsewhere"}</h2>
            <ul className="no-bullet-list social-links">
              <li className="load-in">
                <a
                  href="https://github.com/fullstackdevs14"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
