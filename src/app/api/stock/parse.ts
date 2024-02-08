import { load } from "cheerio";

export default async function get_stock_price(company: string) {
  const url = `https://dsebd.org/displayCompany.php?name=${company}`;
  const price = await fetch(url, {
    cache: "no-store",
  }).then(async (response) => {
    const html = await response.text();
    const $ = load(html, { decodeEntities: false, scriptingEnabled: false });
    const data = $("td[width=25%]").first().html();
    return data;
  });
  if (price === "-") {
    return -1;
  }
  return price;
}
