import Link from "next/link";

const PartFooterLinks = () => {
  return (
    <div className="teaui footer-column">
      <h6>Nous découvrir</h6>
      <ul>
        <li>
          <Link href={""}>Nos engagements</Link>
        </li>
        <li>
          <Link href={""}>Techno Campus</Link>
        </li>
        <li>
          <Link href={""}>Identité</Link>
        </li>
        <li>
          <Link href={"/information/eco-conception"}>Éco conception</Link>
        </li>
      </ul>
    </div>
  );
};

export default PartFooterLinks;
