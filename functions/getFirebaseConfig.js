// functions/getFirebaseConfig.js

exports.handler = async function(event, context) {
    try {
        // Fetch environment variables securely
        const apiKey = process.env.FIREBASE_API_KEY;
        const authDomain = process.env.FIREBASE_AUTH_DOMAIN;
        const projectId = process.env.FIREBASE_PROJECT_ID;
        const databaseURL = process.env.FIREBASE_DATABASE_URL;
        const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
        const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
        const appId = process.env.FIREBASE_APP_ID;

        return {
            statusCode: 200,
            body: JSON.stringify({
                apiKey,
                authDomain,
                projectId,
                databaseURL,
                storageBucket,
                messagingSenderId,
                appId
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" })
        };
    }
};