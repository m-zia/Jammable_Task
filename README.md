
## Structure 
 
Page is broken down into 8 main components to represent each section

```bash
Navbar 
Banner 
Socials 
Genres 
Promoted 
Community 
MoreVoices 
Footer 
```

This structure can be seen in the main page located in app/page.tsx 

## Discussion

- Identified early on that most sections had cards (albeit with some slight differences). Therefore, these cards were ideal to be re-usable components. 

- Wanted to have 2 cards per row on mobile screens because it looked better this way. (With more than 2 cards per row on mobile, the screen gets a bit cluttered).

- Given more time, would incorporate a more efficient Navbar on mobile devices (e.g. links dropdown when clicking on menu icon)

## Future Ideas

- Incorporate a dark mode. Could do this via useContext.

## Running the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


