# Pull Request

## Description

<!-- Clearly describe what this PR does and why -->

## Type of Change

<!-- Check the relevant option -->

- [ ] `fix:` Bug fix (PATCH version bump)
- [ ] `feat:` New feature (MINOR version bump)
- [ ] `feat!:` Breaking change (MAJOR version bump)
- [ ] `chore:` Maintenance (no version bump)
- [ ] `docs:` Documentation update (no version bump)

## Checklist

### Conventional Commits

- [ ] PR title follows conventional commits format (`feat:`, `fix:`, `feat!:`, etc.)
- [ ] Commit message will be used for squash merge
- [ ] Breaking changes are marked with `!` or include `BREAKING CHANGE:` footer

### Code Quality

- [ ] Uses design tokens from `fd/base/tokens.css` (no hard-coded values)
- [ ] New primitives extend `Base` class from `fd/base`
- [ ] Components use slots for extensibility
- [ ] TypeScript types are clear and readable
- [ ] Code follows "boring is success" principle

### Testing

- [ ] Component tested in demo app (`fandryui/app`)
- [ ] Accessibility verified (keyboard navigation, ARIA attributes)
- [ ] Works across different screen sizes
- [ ] No TypeScript errors (`npm run typecheck`)

### Documentation

- [ ] Updated CONTRIBUTING.md if adding new patterns
- [ ] Added component usage examples to demo app
- [ ] Documented any new public APIs

## Primitive Boundaries

<!-- If adding/modifying core primitives -->

- [ ] Component is intentionally small and predictable
- [ ] No business logic in primitive components
- [ ] Uses semantic events only (`input`, `change`, `focus`, `blur`)
- [ ] Avoids flag-heavy APIs

## Additional Notes

<!-- Any additional context, screenshots, or considerations -->
