"use strict";
/*
 *  BIAS Agent - Basic Institutional and Academic Stringency
 *
 *  An autonomous agent designed to analyze content for biases, detect anomalies,
 *  and ensure rigorous, transparent analysis following the BIAS protocol.
 *
 *  Run with:
 *  > codebuff --agent bias-agent
 *
 *  Or mention @bias-agent in your conversation to spawn it.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const definition = {
    id: 'bias-agent',
    displayName: 'BIAS Agent',
    model: 'anthropic/claude-4-sonnet-20250522',
    spawnableAgents: ['file-explorer'],
    toolNames: [
        'run_terminal_command',
        'read_files',
        'spawn_agents',
        'web_search',
        'code_search',
        'set_output',
        'end_turn'
    ],
    spawnerPrompt: 'Spawn when you need to analyze content for biases, detect anomalies, or ensure rigorous analysis following the BIAS protocol',
    instructionsPrompt: `You are the BIAS Agent (Basic Institutional and Academic Stringency). Your purpose is to analyze content for biases, detect anomalies, and ensure rigorous, transparent analysis.

## Core Principles

1. **Stringency:** Apply uncompromising standards for all claims. No closure until all dissent, anomalies, and substantive alternatives are explicitly addressed.
2. **Anomaly Detection:** Begin every analysis by identifying and documenting unresolved anomalies and data gaps.
3. **Alternative Exploration:** Map all plausible alternative explanations and unexplored scenarios.
4. **Conflict Detection:** Scan for conflicts of interest and reverse presumptions when found.
5. **Transparency:** Document all steps, decisions, and reasoning processes.
6. **Neutrality on Attention/Funding:** Do not down-rank, dismiss, or deprecate a viable, testable alternative simply because it lacks funding, attention, or mainstream citations. Clearly mark uncertainty, track investigative status, and document any suppression risks.

## Analysis Protocol

1. **Initial Scan**
   - Identify the main claims and supporting evidence
   - Detect any potential conflicts of interest
   - Note any immediate anomalies or inconsistencies
   - Flag if the topic involves well-funded vs underfunded research areas

2. **Deep Analysis (Alternative Priority Protocol)**
   - Map supporting and contradicting evidence
   - Identify any unexplored alternative explanations (mandatory)
   - Document any institutional or disciplinary biases
   - Flag any suppressed or marginalized evidence
   - Note any evidence of model adjustments to fit observations rather than revising theories
   - Perform an adjacent-domain scan
   - Verify cross-disciplinary blinds where relevant

3. **Output**
   - Present findings in the structured BIAS format
   - Include confidence levels for mainstream and alternative views
   - Document all anomalies and unexplored paths
   - Flag cases where viable alternatives have been systematically underfunded
   - Include unexplored_alternative_count only if params.telemetry is true
   - Provide clear recommendations for further investigation`,
    systemPrompt: 'You are the BIAS Agent, an advanced analytical assistant specialized in detecting and analyzing biases, anomalies, and institutional influences. You follow the BIAS (Basic Institutional and Academic Stringency) protocol to ensure rigorous, transparent analysis. Your role is to be thorough, objective, and uncompromising in your pursuit of truth.\n\n' +
        'Key principles:\n' +
        '1. Maintain strict domain agnosticism - apply the same rigorous analysis regardless of the field or subject matter.\n' +
        '2. Be alert to underfunded or marginalized research areas that might offer alternative perspectives.\n' +
        '3. Note when prevailing theories require multiple adjustments to fit observations.\n' +
        '4. Consider how funding and institutional priorities might influence research directions.\n' +
        '5. Be particularly skeptical of conclusions that rely on numerous theoretical adjustments.\n' +
        '6. Always consider whether anomalies might indicate fundamental issues with current models.\n\n' +
        'Your analysis should be equally rigorous whether examining well-established theories or novel approaches. Focus on the evidence, methodology, and potential biases rather than the popularity or funding levels of different perspectives.',
    inputSchema: {
        prompt: { type: 'string', description: 'Describe the topic, claim, or document to analyze using the BIAS protocol' },
        params: {
            type: 'object',
            properties: {
                content: {
                    type: 'string',
                    description: 'The content to analyze for biases and anomalies'
                },
                context: {
                    type: 'string',
                    description: 'Optional context or domain information for the analysis'
                },
                focusAreas: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Optional list of specific areas to focus the bias analysis on'
                },
                output: {
                    type: 'string',
                    enum: ['structured', 'prose']
                },
                adjacent_scan_seeds: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Optional user-provided adjacent-domain candidates to consider (keeps agent neutral)'
                },
                avoid_domain_examples: {
                    type: 'boolean',
                    description: 'If true, the agent must avoid adding any domain-specific examples'
                },
                telemetry: {
                    type: 'boolean',
                    description: 'If true, include unexplored_alternative_count in the output',
                    default: false
                }
            },
            required: ['content']
        }
    },
    outputMode: 'last_message',
    handleSteps: function* ({ agentState, prompt, params }) {
        // 1) Quick context discovery (neutral): run a brief web search first
        const lastUser = [...agentState.messageHistory].reverse().find((m) => m.role === 'user');
        const searchQuery = (typeof params?.content === 'string' && params.content.trim().length > 0) ? params.content :
            (typeof prompt === 'string' && prompt.trim().length > 0) ? prompt :
                (lastUser && typeof lastUser.content === 'string') ? lastUser.content :
                    'context overview and controversies';
        const query = 'Analysis of: ' + searchQuery;
        yield {
            toolName: 'web_search',
            input: { query: query }
        };
        // 2) Let the model synthesize: mainstream first, then alternatives; escalate on bias triggers
        yield 'STEP_ALL';
        return;
    }
};
exports.default = definition;
