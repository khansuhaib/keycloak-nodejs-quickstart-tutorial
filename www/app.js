let keycloakConfig = {
    "realm": "myrealm",
    "auth-server-url": "https://keycloak-keycloak2.apps-crc.testing/auth/",
    "ssl-required": "external",
    "resource": "web-app1",
    "credentials": {
        "secret": "90d014fa-89bf-45b5-ab87-bcd8a9028c7f"
    },
    "confidential-port": 0,
    "enable-cors": false,
    "clientId": "web-app1"
};
window.keycloak = new Keycloak(keycloakConfig);
