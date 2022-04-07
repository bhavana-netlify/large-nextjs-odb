import Head from "next/head";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";
import Link from "next/link";

export default function Docs({ data }) {
  const { docs } = data;
  return (
    <div>
      <Head>
        <title>Documentation</title>
        <meta name="description" content="Read our docs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
              HEDGES DOCUMENTATION
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Get started with Hedges Documentation on Preview
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              havent heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          {docs.map((article) => (
            <div key={article.slug.current} className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  {article.title}
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <Link
                  href={`/docs/${encodeURIComponent(article.slug.current)}`}
                >
                  <a className="text-green-500 inline-flex items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const postQuery = groq` *[_type == "docs"]`;

export async function getStaticProps() {
  const docs = await getClient().fetch(postQuery);

  return {
    props: {
      data: { docs },
    },
  };
}
