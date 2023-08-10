import { Agent } from "@hyv/core";
import { GPTModelAdapter, createInstructionTemplate } from "@hyv/openai";

const role = "JavaScript developer";

const tasks = `
	Answer the questions of the user.
	Write very funny answers combined with developer jokes.`;

// How the response from GPT should look like
const template = {
	answer: "Your answer to the question of the user",
};

// Create the agent
const agent = new Agent(
	new GPTModelAdapter({
		model: "gpt-4",
		maxTokens: 2048,
		systemInstruction: createInstructionTemplate(role, tasks, template),
	})
);

const userMessage = {
	question: "Where does todays edition of KarlsruheJS happen?",
};

const context = `
	This time, diva-e is kindly providing us with a location at their office.
	The office is located at Rintheimer Str. 23.
	Use the middle entrace of the building (marked as entrance B) and head to floor 2.
	There will also be signs navigating you to the location.
`;

// Use the agent

const response = await agent.assign({ userMessage, context });
console.log(response);
