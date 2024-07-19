# FRONTEND INTERVIEW ASSESSMENT

## How to Run Project (Vite)

To run the file...
development version: **npm run dev**
build version: **npm run build**

## Approach to Component Reusability

### My Method

The way I see it there are two approaches to component reusability:
a). have discriminator types that determine what will render... e.g...

```tsx
function superAwesomeButton({ variation }: { type: "success" | "error" }) {
  if (variation === "error") {
    <Button
      bg="red.600"
      color="white"
      _hover={{ bg: "red.700" }}
      _active={{ bg: "red.800" }}
    ></Button>;
  }
  if (variation === "success") {
    <Button
      bg="green.600"
      color="stone"
      _hover={{ bg: "green.700" }}
      _active={{ bg: "green.800" }}
    ></Button>;
  }
}
```

b). We can take a more manual approach where we open a more expansive API and allow components to call upon this api with certain settings...

```tsx
interface ChatProps {
  icon: keyof typeof ChakraIcons;
  text: string;
  color?: AllChakraColors;
  isChat?: boolean;
}

export default function SidebarTask({
  icon,
  text,
  color = "gray.900",
  isChat = true,
}: ChatProps) {
  return (
    <Link
      paddingX={3}
      paddingY={2.5}
      _hover={{
        background: isChat ? "gray.400" : undefined,
      }}
    >
      <IconComponent boxSize={4} color={color} />
      <Text as="h4" fontWeight="semibold" color={color}>
        {text}
      </Text>
    </Link>
  );
}
```

In this project I opted for this latter approach, as you can see throughout the project, for two reasons:
1). I think chakra already serves the job of creating components with a more broad variation descriminator
2). I like having full manual control of the interface that i can open up. For this project I can make it specific to my exact needs

### What Determined if Something Becomes a "Reusable Component"

I made components reusable (ie. has an interface with custom settings through which we can call upon) if they fit one of two criteria
1). I was going to use something more than once AND the things I would use them on were close enough in styling
2). I foresee the potential for this to be used more in the future.

This means that something like the side chats were made super reusable because they have the potential to duplicate, while the "Welcome to FenceGPT" heading was not because there is no forseeable duplication of such a component.

This also means that, even though the tab button and the buttons in the searchbar were similar, I did NOT make a reusable component for this purpose as they are not similar enough. This would simply be too much work for too little payoff.

## Organization

There are 4 main folders: components, databse, pages, and utils/
_database:_ I Chose to include a fake database to keep data seperate from UI logic and because this is more similar to how we would actually be rendering components, through accepting data from an abstracted source then rendering in a reusable component where we can then style everything.(likely something more similar to JSON but this is no matter).

_pages:_ This is PURELY AN ASSEMBLY PAGE, no logic will be placed here. I could have left this page out, but this is more similar to how i would structure an actual project and I always like to have an assmebly page free of any state or anything like that.

_utils:_ These are full of "helper" functions, or things we generally want to use all over the application but they dont actually do anything (they are very pure). This is filled with types, the theme, color alteration functions, and even a (very) small config file.

_components_: This is where all the meat is. I have a sub folder for the aside and then one for the main page, then a file not in either folder that is used for the layout. Again, I could have done this in the page folder but there would have had to have been state there, which is a no no for me personally.

## Potential Improvements

There are some improvements I would definitely like to make and I very well might in a few hours:
-Able to close the tab component in mobile-mode by clicking outside the tab
-Adding Dark Mode, which is also able to detect user's system setting (dark or light)
-Adding a custom highlight color for highlighted text
-Adding more accesibility (pressing the tab button will filter through all possible inputs, buttons, and links in an orderly way)
-I later found out we have an iconbutton component so i would go back and unnest some buttons and such i wanted to click on
