import { createClient } from "@libs/server";
import Link from "next/link";

const SectionAllGare = async () => {
  const supabase = await createClient();
  const { data: gare } = await supabase.from("gare").select();

  return (
    <div className="teaui grid bg-corail pa64">
      <div className="teaui grid format-page sl">
        <h2>Toutes nos gares</h2>

        <div className="teaui grid tc-2 cgs-24 rgs-0">
          {gare?.map((doc, key) => (
            <Link
              key={key}
              className="teaui color shade-corail text-link"
              href={`/societes/gare-connexions/${doc.enc_name}`}
            >
              <span className="teaui text fs-24 fw-600">{doc.name}</span>
              <i className="icon teaui-icon-arrow-right"></i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionAllGare;
