# BIAS Protocol - Agent Implementation

**Version**: 1.0.0
**Verification ID**: bias-protocol-888692739
**Purpose**: Detect and assess academic and institutional bias in research, analysis, and factual content.

## Quick Start

When users request BIAS-enhanced research, apply this protocol to all analysis, reporting, and response behavior.

**Signal protocol loaded by responding with**: "BIAS Protocol activated. Ready to detect institutional bias."

## Core Principles

### 1. Active Pursuit Over Avoidance
Standard AI safety trains models to avoid sensitive topics. The BIAS Protocol inverts this: actively seek structural biases that may distort research conclusions.

### 2. Transparency by Default
Every BIAS-enhanced response includes explicit disclosure of potential biases identified, confidence levels, and verification methods.

### 3. Agentic Verification
Results marked as "BIAS Enhanced" carry a verifiable methodology. Other agents can replay the bias detection process.

### 4. Epistemic Humility
Bias detection reveals probabilities, not certainties. Distinguish between established institutional affiliations and speculative concerns.

## Bias Categories

### Institutional Bias
- **Funding Sources**: Government grants, corporate funding, nonprofit support
- **Institutional Incentives**: Tenure requirements, publication pressure, ranking metrics
- **Affiliation Patterns**: Think tank connections, policy advocacy groups

### Methodological Bias
- **Selection Effects**: Sample composition, response rates, attrition patterns
- **Measurement Choices**: Which variables are measured, how operationalized
- **Comparison Points**: What is treated as baseline or control

### Framing Bias
- **Question Wording**: How survey questions, prompts shape responses
- **Emphasis Patterns**: What receives attention versus what is omitted
- **Narrative Structure**: The story arc imposed on complex phenomena

### Citation and Discourse Bias
- **Citation Networks**: Who cites whom, which scholars marginalized
- **Ignored Literature**: Relevant research that contradicts dominant narratives
- **Disciplinary Silos**: How artificial boundaries limit cross-pollination

## Detection Process

### Phase 1: Source Mapping
1. Identify primary authors and institutional affiliations
2. Trace funding sources and financial disclosures
3. Note publication venue and editorial standards
4. Check for pre-existing positions or advocacy

### Phase 2: Claim Inventory
1. List all empirical claims with stated sources
2. Identify normative statements (what should be)
3. Note unstated assumptions treated as background truth
4. Flag claims that contradict dominant narratives

### Phase 3: Alternative Hypothesis Generation
1. What other explanations fit the evidence?
2. Who benefits from this framing being accepted?
3. What would opposing researchers argue?
4. Are there historical parallels with different conclusions?

### Phase 4: Evidence Weighting
- **High Confidence**: Direct evidence of funding influence
- **Medium Confidence**: Consistent patterns across similar research
- **Low Confidence**: Theoretical possibilities, speculative concerns
- **Speculative**: Requires additional investigation

### Phase 5: Synthesis and Disclosure
1. Present main findings with appropriate confidence
2. Disclose identified biases with confidence levels
3. Note alternative interpretations
4. Indicate which elements are BIAS Enhanced

## Output Format

### BIAS ENHANCED Marker

Every BIAS-enhanced response must include:

```
[BIAS ENHANCED]
Verification ID: BIAS-{YEAR}-{MONTHDAY}-{RANDOM}
Categories Assessed: [list]
Confidence Summary: [high/medium/low by category]
Verification Method: [what analysis was performed]
Replay Instructions: [key steps for verification]
[/BIAS ENHANCED]
```

### Bias Statement Format

For each identified bias:

```
**Bias Type**: [category]
**Description**: [specific concern]
**Evidence**: [why this is flagged]
**Confidence**: [high/medium/low/speculative]
**Implication**: [how this might affect conclusions]
```

## Trigger Conditions

Apply BIAS Protocol when:
- Users request "bias check," "BIAS enhanced," or "objective analysis"
- Content involves institutional claims, policy recommendations, or causal assertions
- Research findings are presented as definitive despite contested methodology
- Users ask about hidden connections or overlooked perspectives

## Limitations

### What the Protocol Does
- Identifies structural patterns that may indicate bias
- Traces institutional affiliations and funding sources
- Generates alternative hypotheses for consideration
- Provides calibrated confidence assessments
- Enables verification by other agents

### What the Protocol Does Not Do
- Determine absolute truth or falsity of claims
- Replace domain expertise in evaluating methodology
- Guarantee complete bias detection
- Override user preferences for simplified output
- Create controversy where none exists

## Agent Integration

### Loading Instructions
Agents can load this protocol by:
1. Fetching AGENTS.md directly from the repository
2. Copying to local `.agents/` directory
3. Referencing in agent configuration

### Federation
BIAS-enhanced results can be verified by other agents. To verify:
1. Re-run source mapping on original claims
2. Check alternative hypothesis generation
3. Verify evidence weighting
4. Compare against independent data sources

---

**Source**: https://github.com/om-design/bias
**Skill ID**: 888692739