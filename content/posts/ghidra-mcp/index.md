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
Basically, it allows an LLM to access your Ghidra project.

I was first introduced to this concept at [REcon](https://recon.cx/) in Montreal earlier this year. John McIntosh ([@clearbluejar](https://x.com/clearbluejar)) provided a super popular workshop on the topic, entitled "Offensive Security Tool Development with Ghidra: From Custom CLI Tools to an MCP Server". The content of his workshop was already published on Medium: [Supercharging Ghidra: Using Local LLMs with GhidraMCP via Ollama and OpenWeb-UI](https://medium.com/@clearbluejar/supercharging-ghidra-using-local-llms-with-ghidramcp-via-ollama-and-openweb-ui-794cef02ecf7). Long story short, his overall intent was to get an LLM to not just talk about how to reverse engineer something using Ghidra, but to give it the context of a binary loaded in Ghidra using *tool calling*, allowing it to participate directly in the RE efforts of the user.

Jumping forward to August 2025, John published a [blog post](https://clearbluejar.github.io/posts/pyghidra-mcp-headless-ghidra-mcp-server-for-project-wide-multi-binary-analysis/) introducing [ghidra-mcp](https://github.com/clearbluejar/pyghidra-mcp). As opposed to his previous implementation as we saw at REcon, ghidra-mcp takes things a step further by granting access to all binaries in the Ghidra project. This is powerful, as it allows further context awareness and automation. As John says in his post, this is "a tool that leverages Ghidra’s project-level view and exposes it through MCP". Gone are the days of analyzing binaries one at a time - your LLM can now analyze dependencies and calls between different binaries in the same project!

## Cool. How do I get started?

