# Yotpo Block

## Overview

The Yotpo block integrates Yotpo's reviews and ratings widget into product detail pages. It dynamically loads the Yotpo widget with product information extracted from the page, allowing customers to view and submit product reviews.

## Integration

### Block Configuration

This block reads the following configuration values from the site config:

| Configuration Key | Type | Default | Description | Required | Side Effects |
|-------------------|------|---------|-------------|----------|--------------|
| `yotpo-config-url` | string | - | URL to fetch Yotpo app configuration | Yes | Used to retrieve the Yotpo app key and settings |
| `yotpo-instance-id` | string | - | Yotpo instance identifier | Yes | Identifies the Yotpo account |
| `commerce-base-currency-code` | string | 'USD' | Currency code for pricing | Yes | Sets the currency for product price display |

### Block Structure

The block can be added to product detail pages with a simple structure:

```
| Yotpo |
|-------|
```

No additional content is required in the block table as all product data is extracted automatically from the page.

### URL Parameters

No URL parameters affect this block's behavior.

### Local Storage

No localStorage keys are used by this block.

### Events

This block does not emit or listen to any custom events beyond the Yotpo widget's internal events.

## Behavior Patterns

### Page Context Detection

- **Product Detail Page**: This block is designed to work on product detail pages where it extracts product information from the DOM
- **Required Elements**: The block expects the following page elements to be present:
  - `.pdp-header__title` - Product name
  - `.pdp-carousel__slide>img` - Product image
  - `.dropin-price` - Product price

### User Interaction Flows

1. **Widget Loading**:
   - Block fetches Yotpo configuration from the configured endpoint
   - Yotpo loader script is dynamically loaded
   - Widget is initialized with product data from the page

2. **Product Data Extraction**:
   - Product ID is extracted from the URL path (last segment)
   - Product name is read from the page title element
   - Product image URL is retrieved from the carousel
   - Product price is extracted from the price dropin
   - Current page URL is used as the product URL

3. **Review Display**:
   - Yotpo widget renders based on the configuration
   - Customers can view existing reviews
   - Customers can submit new reviews (if configured)

### Error Handling

- **Configuration Fetch Error**: If the Yotpo config endpoint fails, an error is logged to the console and the widget won't load
- **Missing DOM Elements**: If required product information elements are missing, the widget may display with incomplete data
- **Fallback Behavior**: The block fails gracefully without breaking the page if Yotpo services are unavailable
