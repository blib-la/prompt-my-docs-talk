
# chalkboard
huge blank chalkboard, view from front to chalkboard  close-up portrait wide-angle, zoom-in 50%
neon punk
text, drawing, scribble, view from the left, view from the right

# hand
stupid drunken american white male making fun of the photographer laughing out loud while pointing the deformed long index-finger towards camera, ugly as hell
photography
text




---


A tale about a developer

Slide 1 (Image): Picture of a developer at a computer, looking relaxed and content, with the OpenAI logo visible on the screen.

Detailed: "We are living in a world where the first thing we do is use ChatGPT to solve problems. It's a world of convenience, tailored responses, and instant solutions."
High-Level: "We're now used to getting quick, tailored solutions to our problems through AI like ChatGPT."


Slide 2 (Image): Picture of a package on npm, with a date clearly visible that's post-September 2021.

Detailed: "But what happens when we find a great new npm package, released or upgraded after the knowledge cutoff of our trusted AI assistant?"
High-Level: "Sometimes, we come across new tools or packages that our AI assistant might not know about yet."


Slide 3 (Image): Picture of a developer looking frustrated in front of a screen filled with dense documentation and source code.

Detailed: "We could dive into the documentation or source code, but let's face it: We want our answers quickly and easily. We want to keep the joy of interacting with ChatGPT."
High-Level: "Reading through technical documentation or source code can be time-consuming and confusing."
Prompt my Docs


Slide 4 (Video): Video demonstration of the "Prompt my Docs" web app in action.

Detailed: "Enter 'Prompt my Docs'. Let's see it in action."
High-Level: "Our solution, 'Prompt my Docs', makes it easier to understand and use new tools or packages."
Detailed: "And voila! A tailored guide with code examples, ready for use."
High-Level: "It provides you with a simple, easy-to-understand guide based on your questions."


## Process

### Slide 6: Import the hyv repository

- Let's break down the steps
- We want to ask questions about hyv, so let's clone that into the /docs folder of Prompt my Docs




### Slide 7: Data chunking

Detailed: "We use Langchain to extract the data and split it into manageable chunks. Let's take a look at an example."
High-Level: "This information is then broken down into smaller pieces, or 'chunks'."


### Slide 8: Convert data chunks into vectors and storing them in Weaviate

Detailed: "These chunks are then converted into vectors and stored in a vector database, Weaviate. Weaviate is open source, you can run it however you like or use the hosted service which offers a free-of-charge sandbox that exists for 2 weeks. You can create the sandbox over and over if you like"
High-Level: "These chunks are then translated into a language that our tool can search and compare."

### Slide 9: How does a Vector DB work?

Detailed: A graphic that shows the data in vector space. Vectors that relate to each other are closer together, meaning that we can search for their nearest neighbors. 


### Slide 9: OpenAI GPT-4

High-Level: "We then use a powerful AI language processor to understand and answer your questions."


### Slide 10: In-Context Retrieval-Augmented Language Models.

Detailed: "By leveraging In-Context RALM, we can incorporate relevant information directly into the context when conversing with the language model. This means we can use any model as-is, without modifications or self-hosting."
High-Level: "This allows us to provide the AI with the most relevant information to answer your question accurately."



### Slide 11: How does a process look like?
- User enters a prompt
- 


Slide 12: Diagram of the vector conversion process and similarity search in the vector db.

Detailed: "This prompt is transformed into a vector and compared with the vectors in our database to find the most similar ones."
High-Level: "Our tool then searches for the most relevant information to answer your question."


Slide 13: Illustration of the process of creating a system message for GPT-4.

Detailed: "We use the user's prompt and the relevant vectors to create a system message for GPT-4."
High-Level: "This information is then used to guide the AI in providing a response."


Slide 14: Graphic illustrating GPT-4 processing the system message.

Detailed: "GPT-4 then processes this information to generate a tailored response."
High-Level: "The AI uses this guidance to generate a detailed answer to your question."


Slide 15: Image of the final response rendered on the web app.

Detailed: "Prompt my Docs then renders this response for the user to use."
High-Level: "This response is then displayed for you to use."
Challenges & Limitations


Slide 16: Overview slide introducing the Challenges & Limitations section.
- Detailed: "Like any tool, 'Prompt my Docs' isn't perfect. Let's discuss some challenges and limitations."
- High-Level: "Every tool has its challenges and limitations. Let's take a look at some of those for 'Prompt my Docs'."


Slide 17: Graphic or text slide discussing the knowledge cutoff limitation.

Detailed: "One limitation is the knowledge cutoff of the AI model, which may not have the latest information on very recent or niche tools and packages."
High-Level: "Our tool may not have the latest information on very new or niche tools due to the knowledge cutoff of the AI model."


Slide 18: Graphic or text slide discussing the dependency on documentation and code comments.

Detailed: "The system also relies on the quality and comprehensiveness of the package's documentation and code comments. If these are lacking, it may limit the utility of 'Prompt my Docs'."
High-Level: "If the package's documentation or code comments are lacking, it could limit how much our tool can help."
Outro


Slide 19: Contact information and an invitation for consulting services.
- Detailed: "Interested in harnessing AI for your company? I'm here to help! Feel free to reach out for consulting or development services."
- High-Level: "If you're interested in using AI in your work, feel free to reach out to me for help."



Slide 20: Website information.

Detailed: "You can find more information and contact me through my website."
High-Level: "You can learn more about my work and contact me through my website."


Slide 21: Invitation to join the Failfast Discord.

Detailed: "Join the Failfast community on Discord. Looking forward to seeing you there!"
High-Level: "Join our community on Discord for more discussions and updates."






---






I have created "prompt my docs", a web app that can be used to prompt any data you want using GPT. The idea is to put the content of a repository into a local folder (/docs), then start a node-script that extracts the data (js-, ts-, md-files), splits it into chunks , converts them into vector and puts that into a vector db (weaviate). In the webapp itself, there is an input prompt that the user can then ask questions about the repository (like: "provide me with a getting started code example on how to use hyv with GPT-4"). The webapp will find relevant docs from the vector db using a nearText search that converts the prompt into a vector, puts the content of these docs into the context (system message) when interacting with GPT + the persona of the AI (system message) + the user prompt (user message), to answer the question of the user. It will render the result then on the page. This makes it possible to use GPT with any data, even when it's not part of GPT itself. 

One use case is that the user wants to use a new package that they found on npm, but don't understand the documentation or are just too lazy to actually read the documentation and the code examples. Instead the user wants to have the same joy like when using ChatGPT and ask what they want to know and get a tailored result. 

I'm giving a talk about "prompt my docs". And I was thinking about this outline, but I need your help to write the talk, especially the content of the slides and make sure, that it's nice and logical, so that people understand the topic:

* A tale about a developer
  * (image) We are living in a world where the first thing we do is to use ChatGPT to get a problem solved
  * (image) One day you find a nice package on npm, but it was released after September 2021 or it got a major upgrade in 2023?
  * (image) You want to ask questions about it, you are way too lazy to read the documentation (if it exists) or read the comments of the source code (if those exist)
* Prompt my Docs
  * (video) Show the web app in action
    * Enter a prompt: "A guide with code examples on how to get started with hyv in typescript, so that I can use GPT-4 to ask questions. Please also include all the packages that I have to install"
    * Send the prompt
    * Wait until the result is generated
    * See the generated guide
* Under the hood
  * Use the repository of hyv, which contains various files
    * We are interested in the md, ts and js files, as they provide the information that we are looking for to use the package
    * langchain: Exract the data of the interesting files and split the data of each file into multiple chunks (add example here and how the chunks look like)
  * Vector DB (weaviate)
    * Convert the chunks into vectors and save it into the db
  * OpenAI GPT-4 via API
  * In-Context Retrieval-Augmented Language Models (In-Context RALM)
    * Leaving the LM alone, adding the relevant information into the context when talking with the LM. This makes it possible to use any model as it is without modifications at all and without hosting / fine-tuning the model yourself
* How does a process look like?
  * User enters a prompt
  * The prompt will be converted into a vector representation and we find the chunks that are similar to the prompt itself inside of the vector db
    * (image) How does a vector db look like? 
    * (table) How to determine similar vectors? Distance?
  * We use the prompt as the user message and the persona + chunks in the system message when talking with GPT-4
  * GPT-4 is using the information and tries to provide a response based on the system & user message
  * prompt my docs renders the result, so the user can use it
* Outro
  * If you need help to use AI in your company, then please ping me! I'm happy to help out as consultant or external developer
  * Find me on my website
  * Join the failfast discord
