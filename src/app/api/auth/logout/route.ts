import { NextResponse } from "next/server";

export async function GET() {
  const { KEYCLOAK_ISSUER_BASEURL, KEYCLOAK_REALM_NAME } = process.env;

  if (!KEYCLOAK_ISSUER_BASEURL || !KEYCLOAK_REALM_NAME) {
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 },
    );
  }

  const logoutUrl = `${KEYCLOAK_ISSUER_BASEURL}/realms/${KEYCLOAK_REALM_NAME}/protocol/openid-connect/logout`;

  return NextResponse.json({ logoutUrl });
}
