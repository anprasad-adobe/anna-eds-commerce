import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Clear the block and rebuild structure
  const rows = [...block.children];
  block.innerHTML = '';

  // Create container div for teaser content
  const teaserImageDiv = document.createElement('div');
  teaserImageDiv.className = 'teaser-image';
  
  const teaserContentDiv = document.createElement('div');
  teaserContentDiv.className = 'teaser-content';

  // Process each row
  rows.forEach((row) => {
    const cells = [...row.children];
    cells.forEach((cell) => {
      // Check if cell contains an image
      const picture = cell.querySelector('picture');
      if (picture) {
        const img = picture.querySelector('img');
        if (img) {
          const optimizedPicture = createOptimizedPicture(img.src, img.alt, false, [{ width: '1200' }]);
          teaserImageDiv.appendChild(optimizedPicture);
        }
      } else {
        // Everything else goes to content
        while (cell.firstChild) {
          teaserContentDiv.appendChild(cell.firstChild);
        }
      }
    });
  });

  // Style content elements
  const heading = teaserContentDiv.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) {
    heading.className = 'teaser-title';
  }

  // Style paragraphs
  const paragraphs = teaserContentDiv.querySelectorAll('p');
  paragraphs.forEach((p) => {
    if (p.querySelector('a')) {
      p.className = 'teaser-cta';
      // Style the button
      const link = p.querySelector('a');
      if (link) {
        const isStrong = link.parentElement?.tagName === 'STRONG';
        link.className = isStrong ? 'button primary' : 'button';
      }
    } else if (p.textContent.trim()) {
      p.className = 'teaser-description';
    }
  });

  // Append to block
  if (teaserImageDiv.children.length > 0) {
    block.appendChild(teaserImageDiv);
  }
  if (teaserContentDiv.children.length > 0) {
    block.appendChild(teaserContentDiv);
  }
}
