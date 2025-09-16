---
title: "AI with Ghidra using MCP"
summary: "Exploring AI integration with Ghidra using Ghidra-MCP. Can AI really improve reverse-engineering efforts?"
categories: ["AI","Reverse Engineering"]
tags: ["ai","reverse-engineering","integration","ghidra","mcp"]
# externalUrl: ""
showSummary: true
date: 2025-09-16
draft: true
---

## What is MCP? Why should I use it?
Model Context Protocol (MCP), introduced by Anthropic in late 2024, is an open standard used to interface AI/LLMs with software. Instead of developing bespoke interfaces between your AI models and each service or software you want them to interface with, MCP standardizes the process. This allows for, among other things, top notch ease of use, interoperability, and security.

## What is phghidra-mcp?
I was first introduced to this concept at [REcon](https://recon.cx/) in Montreal earlier this year. John McIntosh ([@clearbluejar](https://x.com/clearbluejar)) provided a super popular workshop on the topic entitled "Offensive Security Tool Development with Ghidra: From Custom CLI Tools to an MCP Server". The content of his workshop was strongly based on his previous blog post on Medium: [Supercharging Ghidra: Using Local LLMs with GhidraMCP via Ollama and OpenWeb-UI](https://medium.com/@clearbluejar/supercharging-ghidra-using-local-llms-with-ghidramcp-via-ollama-and-openweb-ui-794cef02ecf7). Long story short, his overall intent was to get an LLM to not just talk about how to reverse engineer something using Ghidra, but to give it the context of the current Ghidra project using *tool calling*, allowing it to participate directly in the RE efforts of the user.

Jumping forward to August 2025, John published a [blog post](https://clearbluejar.github.io/posts/pyghidra-mcp-headless-ghidra-mcp-server-for-project-wide-multi-binary-analysis/) introducing [ghidra-mcp](https://github.com/clearbluejar/pyghidra-mcp). As opposed to his previous implementation as we saw at REcon, ghidra-mcp takes things a step further by granting the LLM access to not just a single binary to reverse engineer, but all binaries in the Ghidra project. This is powerful, as it allows further context awareness and automation; as John says in his post, this is "a tool that leverages Ghidra’s project-level view and exposes it through MCP". Gone are the days of analyzing binaries one at a time - your LLM can now analyze dependencies and calls between different binaries in the same project!

## Quisque ultricies
Quisque ultricies tincidunt sem nec tincidunt. Aenean nibh diam, dapibus varius ornare nec, suscipit ut arcu. Integer ut elit sollicitudin, fermentum ipsum nec, tempus eros. Donec hendrerit facilisis maximus. Pellentesque eu mi ipsum. Vivamus diam tellus, varius sed dolor at, finibus tempus lorem. Morbi sed mauris quis enim vehicula hendrerit. Sed et sollicitudin est. Maecenas scelerisque ligula ac purus gravida, et feugiat nibh blandit. Integer id quam ac arcu convallis interdum eget sed libero. Aliquam varius est quis efficitur efficitur. Cras id turpis magna. Aenean cursus, libero auctor ullamcorper vestibulum, nisl risus consectetur nisi, ut molestie enim libero sed ipsum.

## Etiam sollicitudin
Etiam sollicitudin, ante ac fermentum varius, lorem ante congue mi, auctor dictum magna sem sed nibh. In et est id neque gravida aliquet quis a felis. Mauris tempor lectus ut gravida ornare. Curabitur at elementum tortor, in feugiat elit. Aenean auctor diam ut egestas rhoncus. Quisque tristique venenatis risus vitae suscipit. Nunc feugiat purus sed dolor gravida, non ullamcorper metus suscipit. Sed et tortor odio. Pellentesque at scelerisque nulla. In ut aliquam metus. Vivamus congue augue at pellentesque rhoncus. Donec a lectus tincidunt, aliquet libero sit amet, commodo arcu. Vivamus hendrerit quis augue eu lacinia. Sed sodales velit condimentum eros varius vulputate.

## Proin tempor lorem
Proin tempor lorem quam, ac maximus lectus sodales et. Sed laoreet orci vel metus luctus lobortis. Nam ex velit, vehicula id tristique sed, blandit eu nisi. Quisque semper libero nec massa malesuada congue. In faucibus lorem at diam fringilla, vel viverra magna lobortis. Ut commodo est urna, ut aliquet enim sagittis ut. Nulla posuere arcu sed lobortis accumsan. Phasellus fringilla dolor id est lobortis feugiat. Quisque enim elit, faucibus a mauris non, mattis aliquet orci. Nunc sagittis viverra erat, id condimentum lacus suscipit quis.