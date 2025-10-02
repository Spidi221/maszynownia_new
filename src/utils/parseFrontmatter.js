/**
 * Simple frontmatter parser for browser (no Buffer dependency)
 * Parses YAML frontmatter from markdown files
 */
export function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return {
      data: {},
      content: content
    };
  }

  const [, yamlContent, markdownContent] = match;

  // Parse YAML frontmatter (simple key: value pairs)
  const data = {};
  const lines = yamlContent.split('\n');

  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  });

  return {
    data,
    content: markdownContent.trim()
  };
}
