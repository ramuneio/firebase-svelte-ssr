# firebase-svelte-ssr

Template project for deploying a SSR Svelte app (Sapper) to Firebase. Used to build https://ramune.io.

The sample template code is taken from the default generated Sapper app. See [Sapper](https://github.com/sveltejs/sapper).

This example just adds in some extra gubbings to make it compatible with Firebase Hosting.

This project assumes a Firebase hosting project has been created.

## Getting started

### Configuring firebase

This project contains auto-generated firebase hosting/functions code, so it shouldn't need to re-generated. You should be able to log in to firebase and configure a new `.firebaserc` and away you go. Probably.

1. Install [firebase-cli] https://firebase.google.com/docs/cli

2. Log in to firebase

```bash
cd firebase-svelte-ssr
firebase login
```

3. Add a `.firebaserc` file using the correct hosting project id

```bash
cat >.firebaserc <<EOL
{
  "projects": {
    "default": "<<your_firebase_project_id>>"
  }
}
EOL
```

### Local dev mode

To run locally with hot-reload etc (this doesn't use any firebase stuff):

```bash
cd firebase-svelte-ssr
npm install # or yarn
npm run dev
```

Go to [localhost:3000](http://localhost:3000) and enjoy the picture of Borat.

### Running in firebase mode locally

This runs the sapper build, copies the output into the firebase functions dir and starts the app.

```bash
cd firebase-svelte-ssr/functions
npm install # or yarn
cd ..
npm run start:firebase
```

Go to [localhost:3000](http://localhost:5000) this time to enjoy Borat again.

### Deploy to Firebase

```bash
npm run deploy
```
