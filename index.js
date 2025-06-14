/**
 * Simple JavaScript application for GitHub Actions testing
 */

function greet(name = 'World') {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { greet, add };
}

// Run if called directly
if (require.main === module) {
  console.log(greet());
  console.log('Math test:', add(2, 3));
}