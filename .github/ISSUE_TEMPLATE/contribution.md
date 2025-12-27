---
name: Contribution Proposal
about: Propose a new feature or component for Fandry UI
title: '[CONTRIBUTION] '
labels: 'contribution'
assignees: ''
---

## Contribution Type

<!-- What are you proposing? -->

- [ ] New primitive component
- [ ] Enhancement to existing primitive
- [ ] Bug fix
- [ ] Documentation improvement
- [ ] Other (please describe)

## Description

<!-- Clear description of what you want to contribute -->

## Motivation

<!-- Why is this needed? What problem does it solve? -->

## Proposed Solution

<!-- How do you plan to implement this? -->

## Design Considerations

### Primitive Boundaries

<!-- If proposing a new primitive component -->

- [ ] Component is small, boring, and predictable
- [ ] No business logic included
- [ ] Extensible via slots and composition
- [ ] Minimal API surface
- [ ] Semantic events only

### Design Tokens

- [ ] Uses tokens from `fd/base/tokens.css`
- [ ] No hard-coded values for colors, spacing, borders, etc.
- [ ] New tokens added to `tokens.css` if needed

### Architecture Alignment

- [ ] Follows "longevity, clarity, discipline" principles
- [ ] Optimizes for maintainability over velocity
- [ ] Boring over clever

## Additional Context

<!-- Screenshots, mockups, examples, or references -->

## Questions

<!-- Any questions or areas where you need guidance? -->

---

**Before submitting:**

- Read [CONTRIBUTING.md](../../CONTRIBUTING.md)
- Review [AGENTS.md](../../AGENTS.md) for architectural principles
- Check existing components for patterns
