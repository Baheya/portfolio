import { useEffect, useState } from 'react';
import CSSIcon from '../src/components/Icons/CSS/CSSIcon';
import DockerIcon from '../src/components/Icons/Docker/DockerIcon';
import ExpressIcon from '../src/components/Icons/Express/ExpressIcon';
import GithubIcon from '../src/components/Icons/Github/GithubIcon';
import GraphQLIcon from '../src/components/Icons/GraphQL/GraphQLIcon';
import HerokuIcon from '../src/components/Icons/Heroku/HerokuIcon';
import MongoDbIcon from '../src/components/Icons/MongoDb/MongoDbIcon';
import ReactIcon from '../src/components/Icons/React/ReactIcon';
import RedisIcon from '../src/components/Icons/Redis/RedisIcon';
import RefreshIcon from '../src/components/Icons/Refresh/RefreshIcon';
import SparkleIcon from '../src/components/Icons/Sparkle/SparkleIcon';
import TypescriptIcon from '../src/components/Icons/Typescript/TypescriptIcon';
import JavascriptIcon from '../src/components/Icons/Javascript/JavascriptIcon';
import NodeJSIcon from '../src/components/Icons/NodeJS/NodeJSIcon';
import PostgreSQLIcon from '../src/components/Icons/PostgreSQL/PostgreSQLIcon';
import ReduxIcon from '../src/components/Icons/Redux/ReduxIcon';
import SassIcon from '../src/components/Icons/Sass/SassIcon';
import { RGBToHex } from '../src/utils/convertRGBtoHex';

function Index({ resp }) {
  const [primaryColor, setPrimaryColor] = useState('#186b73');
  const [secondaryColor, setsSecondaryColor] = useState('#f7641b');

  const refresh = async () => {
    const data = { model: 'default' };
    const res = await fetch(
      'https://cors-anywhere.herokuapp.com/http://colormind.io/api/',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    const resp = await res.json();
    setPrimaryColor(RGBToHex(resp.result[0]));
    setsSecondaryColor(RGBToHex(resp.result[2]));
  };

  return (
    <main
      className="parallax"
      style={{
        backgroundColor: `${primaryColor}`,
      }}
    >
      <section className="parallax__group parallax__layer">
        <RefreshIcon colorValue={secondaryColor} refresh={refresh} />

        <p
          className="content--big"
          style={{
            color: `${secondaryColor}`,
          }}
        >
          Hi!
        </p>
        <p
          className="content--small"
          style={{
            color: `${secondaryColor}`,
          }}
        >
          My name is Baheya and I'm a fullstack developer based in Dubai, UAE.
          You can reach me at{' '}
          <span style={{ wordWrap: 'break-word' }}>
            khalifa.baheya@gmail.com
          </span>
        </p>
      </section>
      <section
        className="parallax__group"
        style={{
          backgroundColor: `${secondaryColor}`,
        }}
      >
        <RefreshIcon colorValue={primaryColor} refresh={refresh} />

        {/* <p
          style={{
            color: `${secondaryColor}`,
            backgroundColor: `${primaryColor}`,
            fontSize: '240px',
            display: 'inline-block',
            marginTop: '2rem',
          }}
        >
          Projects
        </p> */}
        <ul>
          <li
            style={{
              color: `${primaryColor}`,
            }}
          >
            <SparkleIcon colorValue={primaryColor} />
            <div className="website__info">
              <a
                href="https://github.com/Baheya/art-retail-tracking-api"
                target="_blank"
                rel="noreferrer"
              >
                Art Retail Tracker (ART)
              </a>
              <ul className="horizontal__list">
                <li>
                  <ReactIcon color={primaryColor} />
                </li>
                <li>
                  <MongoDbIcon color={primaryColor} />
                </li>
                <li>
                  <CSSIcon color={primaryColor} />
                </li>

                <li>
                  <ExpressIcon color={primaryColor} />
                </li>
                <li>
                  <GithubIcon color={primaryColor} />
                </li>
                <li>
                  <HerokuIcon color={primaryColor} />
                </li>
                <li>
                  <JavascriptIcon color={primaryColor} />
                </li>
                <li>
                  <NodeJSIcon color={primaryColor} />
                </li>
                <li>
                  <SassIcon color={primaryColor} />
                </li>
              </ul>
            </div>
          </li>
          <li
            style={{
              color: `${primaryColor}`,
            }}
          >
            <SparkleIcon colorValue={primaryColor} />
            <div className="website__info">
              <a
                href="https://github.com/Baheya/reddit-clone"
                target="_blank"
                rel="noreferrer"
              >
                Reddit Clone
              </a>

              <ul className="horizontal__list">
                <li>
                  <TypescriptIcon color={primaryColor} />
                </li>
                <li>
                  <GraphQLIcon color={primaryColor} />
                </li>
                <li>
                  <RedisIcon color={primaryColor} />
                </li>
                <li>
                  <DockerIcon color={primaryColor} />
                </li>
                <li>
                  <ExpressIcon color={primaryColor} />
                </li>
                <li>
                  <GithubIcon color={primaryColor} />
                </li>
                <li>
                  <JavascriptIcon color={primaryColor} />
                </li>
                <li>
                  <NodeJSIcon color={primaryColor} />
                </li>
                <li>
                  <PostgreSQLIcon color={primaryColor} />
                </li>
              </ul>
            </div>
          </li>
          <li
            style={{
              color: `${primaryColor}`,
            }}
          >
            <SparkleIcon colorValue={primaryColor} />
            <div className="website__info">
              <a
                href="https://github.com/Baheya/smart-brain"
                target="_blank"
                rel="noreferrer"
              >
                Smart Brain
              </a>

              <ul className="horizontal__list">
                <li>
                  <ReactIcon color={primaryColor} />
                </li>
                <li>
                  <CSSIcon color={primaryColor} />
                </li>

                <li>
                  <ExpressIcon color={primaryColor} />
                </li>
                <li>
                  <GithubIcon color={primaryColor} />
                </li>
                <li>
                  <HerokuIcon color={primaryColor} />
                </li>
                <li>
                  <JavascriptIcon color={primaryColor} />
                </li>
                <li>
                  <NodeJSIcon color={primaryColor} />
                </li>
                <li>
                  <ReduxIcon color={primaryColor} />
                </li>
                <li>
                  <PostgreSQLIcon color={primaryColor} />
                </li>
                <li>
                  <RedisIcon color={primaryColor} />
                </li>
                <li>
                  <DockerIcon color={primaryColor} />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = { model: 'default' };
  const res = await fetch('http://colormind.io/api/', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const resp = await res.json();

  // Pass data to the page via props
  return { props: { resp } };
}

export default Index;
