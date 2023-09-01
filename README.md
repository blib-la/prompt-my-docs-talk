<h1>Prompt my Docs - The Talk</h1>

[![Discord](https://img.shields.io/discord/1091306623819059300?color=7289da&label=Discord&logo=discord&logoColor=fff&style=for-the-badge)](https://discord.com/invite/m3TBB9XEkb)

<!-- toc -->

- [Title](#title)
- [Description](#description)
- [ToDo](#todo)
- [Past Events](#past-events)
- [How to create an event](#how-to-create-an-event)

<!-- tocstop -->

## Title
[Prompt my Docs](https://github.com/failfa-st/prompt-my-docs) - ChatGPT for your own data


## Description

Ever wished for a ChatGPT-like interaction tailored to your data? Join us as we explore the realm of [retrieval-augmented AI](https://arxiv.org/abs/2302.00083) through [hyv](https://github.com/failfa-st/hyv). We'll walk you through the steps — from preparing documents for the vector database [Weaviate](https://weaviate.io/), to crafting an AI agent that thinks like a JavaScript developer, leveraging [OpenAI's GPT-4](https://platform.openai.com/docs/api-reference) to extract insights directly from our curated data. Dive deep with us into the art of creating truly personalized AI experiences.

## ToDo

* Simplify the code slides, make them more visible (full screen code editor, get rid of distracting background), the highlighted part should be super big

## Past Events

* 2023-08-31:[HH.js, CHECK24, Hamburg, Germany](https://failfa-st.github.io/prompt-my-docs-talk/hamburgjs-20230831)
  * Simplified the technical concept, explain how ChatGPT actually works under the hood
  * Switched from hyv to langchainjs
* 2023-08-09: [KarlsruheJS, divae, Karlsruhe, Germany](https://failfa-st.github.io/prompt-my-docs-talk/karlsruhejs-20230809/)
  * Strong focus on the technical concept behind Prompt my Docs, using hyv, langchainjs and weaviate as the vector store

## How to create an event

Export all the content into one folder inside of /docs which then gets picked up by GitHub pages. 

```
# You talked at HH.js and want to export the talk into
# the folder named hamburgjs-20230831
npm run package --dest=hamburgjs-20230831
```

The talk is now available via https://failfa-st.github.io/prompt-my-docs-talk/hamburgjs-20230831
