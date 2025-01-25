import {
  ArticleBlockElementInterface,
  ArticleBlockInterface,
} from "@/_types/Database.type";
import { HTMLParser } from "@libs/htmlparser";
import { createClient } from "@libs/server";
import SectionOtherGare from "@section/SectionOtherGare";
import Image from "next/image";
import { redirect } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ gare: string }>;
}) => {
  const supabase = await createClient();
  const { data: gare } = await supabase
    .from("gare")
    .select()
    .eq("enc_name", (await params).gare);

  return {
    title: `${gare && gare[0].name} — SCFT`,
    description: gare && gare[0].resume,
  };
};

const PageChantiergare = async ({
  params,
}: {
  params: Promise<{ gare: string }>;
}) => {
  const supabase = await createClient();
  const { data: gare } = await supabase
    .from("gare")
    .select()
    .eq("enc_name", (await params).gare);

  return gare && gare.length === 1 ? (
    <>
      <div
        className={`teaui grid rgs-0 background bg-corail ${
          gare[0].media ? "" : "pt80"
        }`}
      >
        {gare[0].media && (
          <div
            className="teaui grid sv-60"
            style={{
              backgroundImage: `url(${gare[0].media})`,
              backgroundPosition: "center center",
            }}
          ></div>
        )}
        <div className="teaui grid tc-2 format-page sl pt80 ms-pt80 xs-pt80 pb80 ms-pb80 xs-pb80">
          <h2 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 xs-ma0 text fs-72">
            {gare[0].name}
          </h2>
          <div className="teaui grid pl40 text fs-24">
            <p>{gare[0].resume}</p>
          </div>
        </div>
      </div>

      {gare[0].content?.blocks.map(
        (block: ArticleBlockInterface, key: number) => (
          <div
            key={key}
            className={`teaui grid format-page ${block?.class?.join(" ")}`}
          >
            {/* mapping all elements inside a block */}
            {block.elements.map(
              (element: ArticleBlockElementInterface, key: number) => {
                if (element.type === "cards") {
                  // mapping specific card section
                  return (
                    <div key={key} className="teaui grid va-start tc-3 cgs-32">
                      {(element.content as []).map(
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
                            key={key}
                            className={`teaui card ${
                              key === 0 ? "mt40" : key === 1 ? "mt120" : ""
                            }`}
                          >
                            {key !== 1 && card.media && (
                              <div className="teaui text-container ratio-square">
                                <Image src={card.media} fill alt="" />
                              </div>
                            )}
                            <div className="teaui text-container ratio-square pa24">
                              {HTMLParser({ bson: card.content })}
                            </div>
                            {key === 1 && card.media && (
                              <div className="teaui text-container ratio-square">
                                <Image src={card.media} fill alt="" />
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  );
                } else {
                  return HTMLParser({ bson: element });
                }
              }
            )}
          </div>
        )
      )}

      <SectionOtherGare params={params} />
    </>
  ) : (
    redirect("/")
  );
};

export default PageChantiergare;
