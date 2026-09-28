// A line that starts with an identifier beginning with `in` or `instanceof`
// followed by a digit, `_` or `$` starts a new statement, so the `a` before
// it is a statement of its own.
function f() {
  // MATCH:
  a
  in_b
  // MATCH:
  a
  in1
  // MATCH:
  a
  in$
  // MATCH:
  a
  instanceof_
}
