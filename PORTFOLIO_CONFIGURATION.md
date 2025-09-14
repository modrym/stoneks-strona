# Portfolio Configuration Guide

This guide explains how to easily add and manage photos in your portfolio galleries.

## New Grid Gallery Features

✅ **Grid Layout**: Images are displayed in a responsive grid  
✅ **Image Titles**: Each image has a title displayed below the thumbnail  
✅ **Modal View**: Click any image to view it in a full-size modal with title and description  
✅ **Hover Effects**: Smooth animations and caption overlays on hover  
✅ **Easy Configuration**: Simple data structure for adding/managing photos

## How to Add New Photos

### 1. Upload your images
- Add your images to a hosting service (like Cloudinary, AWS S3, or use direct URLs)
- You'll need two versions of each image:
  - **Original** (high resolution for modal view) - recommended: 800x600px or larger
  - **Thumbnail** (smaller for gallery grid) - recommended: 200x150px

### 2. Update the gallery data
Open the file: `src/data/galleryData.js`

### 3. Add images to a category
Find the category you want to add photos to (nagrobki, tablice, or inne-realizacje) and add a new object to the `images` array:

```javascript
{
  src: 'https://your-image-url.com/large-image.jpg',
  thumbnail: 'https://your-image-url.com/thumbnail.jpg',
  caption: 'Short caption shown on hover',
  title: 'Title displayed in grid',
  description: 'Detailed description shown in modal when image is clicked',
  width: 800,
  height: 600
}
```

**Required Fields:**
- `src`: URL to the full-size image (for modal view)
- `thumbnail`: URL to the thumbnail image (for grid display)
- `caption`: Short text shown on image hover
- `title`: Title displayed prominently 
- `description`: Detailed description shown in modal
- `width` & `height`: Image dimensions (for proper grid layout)

### Example: Adding a new image to "Nagrobki"

```javascript
{
  id: 'nagrobki',
  name: 'Nagrobki',
  title: 'Nagrobki i Pomniki',
  description: '...',
  buttonImage: '...',
  images: [
    // ... existing images ...
    {
      src: 'https://your-hosting.com/nagrobek-nowy-large.jpg',
      thumbnail: 'https://your-hosting.com/nagrobek-nowy-thumb.jpg',
      caption: 'Nowy elegancki nagrobek z czarnego granitu',
      title: 'Nagrobek premium',
      description: 'Szczegółowy opis realizacji - materiał, technika wykonania, wymiary, etc.',
      width: 800,
      height: 600
    }
  ]
}
```

### 4. Add a new category (optional)
To add a completely new category, add a new object to the `galleryCategories` array:

```javascript
{
  id: 'new-category',
  name: 'New Category',
  title: 'New Category Title',
  description: 'Description of this category',
  buttonImage: 'https://your-button-image.com/image.jpg',
  images: [
    {
      original: 'https://your-image.com/large.jpg',
      thumbnail: 'https://your-image.com/thumb.jpg',
      description: 'Image description'
    }
  ]
}
```

## Current Categories

### Nagrobki
- ID: `nagrobki`
- For tombstones and memorial monuments

### Tablice  
- ID: `tablice`
- For memorial plaques and informational boards

### Inne realizacje
- ID: `inne-realizacje` 
- For other stone work projects (countertops, stairs, facades, etc.)

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Original images**: Minimum 800x600px, recommended 1200x800px
- **Thumbnails**: 200x150px for best performance
- **Aspect ratio**: 4:3 recommended for consistency

## Using Placeholder Services (for testing)

For testing purposes, you can use placeholder services like:
- Unsplash: `https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop`
- Picsum: `https://picsum.photos/800/600`

The current setup uses Unsplash images with stone/architecture themes.

## After Making Changes

After updating `galleryData.js`, the changes will be automatically reflected in your application. No additional build steps are required.
