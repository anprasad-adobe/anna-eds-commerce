# Teaser Block

## Overview

The Teaser block creates an engaging promotional layout combining a hero image with compelling content. Perfect for highlighting campaigns, products, or features with maximum visual impact.

## Quick Start

```
Default Layout (Image Left):     teaser
Reverse Layout (Image Right):    teaser (reverse)
Centered Layout (Image Top):     teaser (centered)

Background Colors:
Dark Background:                 teaser (dark)
Colored Background (Gradient):   teaser (colored)
Light Background:                teaser (light)
Teal-Purple Gradient:            teaser (teal-purple)
Solid Teal:                      teaser (teal)
Solid Purple:                    teaser (purple)

Combine variations:              teaser (reverse, dark)
                                 teaser (centered, teal-purple)
                                 teaser (reverse, purple)
```

## Features

- **Full-width responsive design** - Edge-to-edge visual impact
- **Flexible grid layout** - Image and content adapt seamlessly across devices
- **Three layout variants** - Default, reverse, and centered options
- **Optimized images** - Automatic image optimization for performance
- **Professional styling** - Modern typography and button designs
- **No duplicate content** - Clean content structure prevents rendering issues

## Block Structure

The block accepts content in a table format with image and content cells:

```
| Image | Content |
|-------|---------|
| ![Alt text](image.jpg) | <h2>Headline</h2><p>Description text</p><p><a href="/link">Call to Action</a></p> |
```

## Layout Variants

### Default Layout
**Image on LEFT (55%), content on RIGHT (45%)**

```
Block name: teaser
```

Visual layout on desktop:
```
┌─────────────────┬────────────────┐
│                 │                │
│     IMAGE       │    CONTENT     │
│                 │                │
└─────────────────┴────────────────┘
```

### Reverse Layout
**Content on LEFT (45%), image on RIGHT (55%)**

```
Block name: teaser (reverse)
```

Visual layout on desktop:
```
┌────────────────┬─────────────────┐
│                │                 │
│    CONTENT     │      IMAGE      │
│                │                 │
└────────────────┴─────────────────┘
```

Usage example:
- In your document, name the block: `teaser (reverse)`
- Add the word "reverse" in parentheses after "teaser"
- The system automatically applies the `.reverse` CSS class

### Centered Layout
**Image on TOP, centered content BELOW**

```
Block name: teaser (centered)
```

Visual layout:
```
┌────────────────────────────────┐
│                                │
│            IMAGE               │
│                                │
├────────────────────────────────┤
│                                │
│      CENTERED CONTENT          │
│                                │
└────────────────────────────────┘
```

## Background Color Variants

### Dark Background
**Dark background with white text**

```
Block name: teaser (dark)
```

Features:
- Background: Dark neutral (neutral-900)
- Title: White
- Description: Light gray (neutral-200)
- Button: White with dark text (inverted)
- Primary button: Brand color

### Colored Background
**Gradient background with brand colors**

```
Block name: teaser (colored)
```

Features:
- Background: Brand gradient
- Title: White
- Description: White (95% opacity)
- Button: White with brand text
- Primary button: Dark with white text

### Light Background
**Subtle light background**

```
Block name: teaser (light)
```

Features:
- Background: Light neutral (neutral-100)
- Title: Dark (neutral-900)
- Description: Medium gray (neutral-700)
- Buttons: Standard styling

### Teal-Purple Gradient
**Custom gradient from teal to lavender**

```
Block name: teaser (teal-purple)
```

Features:
- Background: Gradient from #005640 (teal) to #CCB3FA (lavender)
- Title: White
- Description: White (95% opacity)
- Button: White with teal text
- Primary button: Lavender (#CCB3FA) with teal text

### Solid Teal
**Rich teal green background**

```
Block name: teaser (teal)
```

Features:
- Background: Solid #005640 (teal)
- Title: White
- Description: White (90% opacity)
- Button: White with teal text
- Primary button: Lavender (#CCB3FA) with teal text

### Solid Purple
**Light lavender purple background**

```
Block name: teaser (purple)
```

Features:
- Background: Solid #CCB3FA (lavender)
- Title: Dark teal (#005640)
- Description: Dark teal shade
- Button: Teal with white text
- Primary button: White with teal text and border

## Combining Variations

You can combine layout and color variations:

```
Block name: teaser (reverse, dark)
Block name: teaser (centered, colored)
Block name: teaser (reverse, light)
```

Example combinations:
- `teaser (reverse, dark)` - Content left, image right, dark background
- `teaser (centered, colored)` - Centered layout with gradient background
- `teaser (dark)` - Default layout with dark background

## Content Guidelines

### Image
- Use high-quality images (recommended: 1200px width minimum)
- Images automatically fill their container with object-fit: cover
- Aspect ratio adjusts responsively

### Headline
- Use `<h2>` or `<h3>` tags for best results
- Large, bold typography automatically applied
- Letter-spacing optimized for readability

### Description
- Use `<p>` tags for body text
- Comfortable reading width (max 500px)
- Optimal line-height for readability

### Call-to-Action
- Default button: `<p><a href="/url">Button Text</a></p>`
- Primary button: `<p><strong><a href="/url">Button Text</a></strong></p>`
- Buttons include hover effects and transitions

## Example Usage

### Basic Teaser

```
| ![Girl Scouts](scouts.jpg) | <h2>Open Up Your World</h2><p>We've taken up to 50% off for Women's Equality Day and Girl Scouts Month</p><p><a href="/sale">Shop the Sale</a></p> |
```

### Teaser with Primary Button

```
| ![Product](product.jpg) | <h2>New Collection</h2><p>Discover our latest arrivals and limited editions</p><p><strong><a href="/shop">Shop Now</a></strong></p> |
```

### Reverse Layout Example

Block name: `teaser (reverse)`

```
| ![Girl Scouts](scouts.jpg) | <h2>Open Up Your World</h2><p>We've taken up to 50% off for Women's Equality Day and Girl Scouts Month</p><p><a href="/sale">Shop the Sale</a></p> |
```

This will display content on the left and image on the right.

### Dark Background Example

Block name: `teaser (dark)`

```
| ![Product](product.jpg) | <h2>Exclusive Night Sale</h2><p>Limited time offer on premium items</p><p><strong><a href="/shop">Shop Now</a></strong></p> |
```

This creates a dramatic dark background with white text and inverted button colors.

### Colored Background Example

Block name: `teaser (colored)`

```
| ![Summer](summer.jpg) | <h2>Summer Collection</h2><p>Vibrant styles for the season</p><p><a href="/collection">Explore</a></p> |
```

This applies a brand gradient background with white text.

### Teal-Purple Gradient Example

Block name: `teaser (teal-purple)`

```
| ![Nature](nature.jpg) | <h2>Eco-Friendly Collection</h2><p>Sustainable fashion for a better tomorrow</p><p><strong><a href="/eco">Shop Sustainable</a></strong></p> |
```

This creates a stunning teal-to-lavender gradient (#005640 → #CCB3FA) with coordinated button colors.

### Solid Teal Example

Block name: `teaser (teal)`

```
| ![Ocean](ocean.jpg) | <h2>Ocean Conservation</h2><p>Join us in protecting our seas</p><p><a href="/conservation">Learn More</a></p> |
```

Rich teal background perfect for environmental or nature themes.

### Solid Purple Example

Block name: `teaser (purple)`

```
| ![Wellness](wellness.jpg) | <h2>Wellness Collection</h2><p>Self-care products for mind and body</p><p><strong><a href="/wellness">Discover Wellness</a></strong></p> |
```

Soft lavender background with contrasting teal text - great for wellness or beauty themes.

### Combined Variations Examples

Block name: `teaser (reverse, dark)`

```
| ![Product](product.jpg) | <h2>Premium Experience</h2><p>Discover luxury redefined</p><p><strong><a href="/premium">Learn More</a></strong></p> |
```

Combines reverse layout (content left, image right) with dark background.

Block name: `teaser (centered, teal-purple)`

```
| ![Hero](hero.jpg) | <h2>Spring Sale</h2><p>Beautiful gradients meet centered design</p><p><a href="/sale">Shop Now</a></p> |
```

Centered layout with stunning teal-purple gradient background.

### Centered Teaser

Block name: `teaser (centered)`

```
| ![Banner](banner.jpg) |
| <h2>Summer Sale</h2><p>Save up to 70% on selected items. Limited time only!</p><p><a href="/sale">View Deals</a></p> |
```

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Image stacks above content
- Reduced font sizes and padding
- Min height: 400px

### Tablet (768px - 1199px)
- Two column grid (50/50 or 55/45 split)
- Increased font sizes
- Expanded padding
- Min height: 500px

### Desktop (≥ 1200px)
- Optimized grid (60/40 split for image/content)
- Large typography
- Generous spacing
- Min height: 600px

## Styling Details

### Typography
- **Title**: 48px mobile → 56px tablet → 64px desktop
- **Description**: 18px mobile → 20px desktop
- **Button**: 16px, uppercase, 600 weight

### Colors
- Titles use primary text color
- Descriptions use neutral-700
- Buttons use neutral-800 (default) or brand-700 (primary)
- Hover states: darker shades with shadow

### Spacing
- Mobile: 48px vertical, 32px horizontal padding
- Desktop: 64-80px padding for comfortable reading

## Technical Notes

- Full-width container (no max-width constraint)
- Images optimized at 1200px width
- CSS Grid for layout flexibility
- Flexbox for content vertical centering
- No border styling for clean edge-to-edge design
- Hover effects with transform and box-shadow
