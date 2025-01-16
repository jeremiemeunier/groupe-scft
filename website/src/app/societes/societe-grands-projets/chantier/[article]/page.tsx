import {
  ArticleBlockElementInterface,
  ArticleBlockInterface,
} from "@/_types/Database.type";
import { HTMLParser } from "@libs/htmlparser";
import { createClient } from "@libs/server";
import SectionOtherArticle from "@section/SectionOtherArticle";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const generateMetadata = async (
  {
    params,
    searchParams,
  }: {
    params: Promise<{ article: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
) => {
  const enc_title = (await params).article;
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("article")
    .select()
    .eq("enc_title", (await params).article);

  return {
    title: `${article && article[0].title} — SCFT`,
    description: article && article[0].resume,
  };
};

const PageChantierArticle = async ({
  params,
}: {
  params: Promise<{ article: string }>;
}) => {
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("article")
    .select()
    .eq("enc_title", (await params).article);

  return article && article.length === 1 ? (
    <>
      <div
        className={`teaui grid rgs-0 background ${
          article[0]?.color ? `bg-${article[0]?.color}` : "bg-nude"
        } pt80`}
      >
        {article[0].media && (
          <div
            className="teaui grid sv-60"
            style={{
              backgroundImage: `url(${article[0].media})`,
              backgroundPosition: "center center",
            }}
          ></div>
        )}
        <div className="teaui grid tc-2 format-page sl pt80 ms-pt80 xs-pt80 pb80 ms-pb80 xs-pb80">
          <h2 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 xs-ma0 text fs-72">
            {article[0].title}
          </h2>
          <div className="teaui grid pl40">
            <p>{article[0].resume}</p>
          </div>
        </div>
      </div>

      {article[0].content?.blocks.map(
        (block: ArticleBlockInterface, key: number) => (
          <div
            key={key}
            className={`teaui grid format-page ${block?.class?.join(" ")}`}
          >
            {/* mapping all elements inside a block */}
            {block.elements.map((element: any, key: number) => {
              if (element.type === "cards") {
                // mapping specific card section
                return (
                  <div className="teaui grid va-start tc-3 cgs-32">
                    {element.content.map(
                      (
                        card: {
                          media: string;
                          content: {
                            type: string;
                            class?: string[];
                            content: string;
                          }[];
                        },
                        key: number
                      ) => (
                        <div
                          className={`teaui card ${
                            key === 0 ? "mt40" : key === 1 ? "mt120" : ""
                          }`}
                        >
                          {key !== 1 && (
                            <img src={card.media} width={"100%"} alt="" />
                          )}
                          <div className="teaui text-container ratio-square pa24">
                            {HTMLParser({ bson: card.content })}
                          </div>
                          {key === 1 && (
                            <img src={card.media} width={"100%"} alt="" />
                          )}
                        </div>
                      )
                    )}
                  </div>
                );
              } else {
                return HTMLParser({ bson: element });
              }
            })}
          </div>
        )
      )}

      <SectionOtherArticle
        society={{
          label: "Société des Grands Projets",
          enc: "societe-grands-projets",
        }}
        color={article[0]?.color}
        params={params}
      />
    </>
  ) : (
    redirect("/")
  );
};

export default PageChantierArticle;
