import { auth } from "twitter-api-sdk";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const authClient = new auth.OAuth2User({
    client_id: process.env.CLIENT_ID as string,
    client_secret: process.env.CLIENT_SECRET as string,
    callback: process.env.OAUTH_CALLBACK as string,
    scopes: ["tweet.read", "users.read"],
});

const STATE = "my-state";

app.get("/oauth", async function (req, res) {
    try {
        const { code, state } = req.query;
        console.log('oauth callback, code', code, state);
        if (state !== STATE) return res.status(500).send("State isn't matching");
        const { token } = await authClient.requestAccessToken(code as string);
        console.log('oauth callback token=', token);
        res.redirect("/tweets");
    } catch (error) {
        console.log(error);
    }
});

app.get("/login", async function (req, res) {
    const authUrl = authClient.generateAuthURL({
        state: STATE,
        code_challenge_method: "s256",
    });
    console.log('authUrl=', authUrl);
    res.redirect(authUrl);
});


app.listen(3000, () => {
    console.log(`Go here to login: http://127.0.0.1:3000/login`);
});
