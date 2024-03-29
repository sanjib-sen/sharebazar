import { type NextRequest } from "next/server";
import get_stock_price from "./parse";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const company = searchParams.get("company");
  if (!company) {
    return new Response("Missing company name", { status: 400 });
  }
  return Response.json({
    company: company,
    price: await get_stock_price(company),
  });
}
