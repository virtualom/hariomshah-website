# Hariom Shah Portfolio - Design Style Guide

## Design Philosophy

### Visual Language
**Modern Editorial Sophistication**: Inspired by high-end design publications like Kinfolk and Wired, the portfolio embodies refined minimalism with surgical precision. Every element serves a purpose, creating immediate cognitive impact through thoughtful restraint.

### Color Palette
**Primary Colors**:
- **Charcoal Ink**: #1a1a1a (primary text, navigation)
- **Warm Porcelain**: #faf9f7 (main background)
- **Sage Mist**: #9db5a0 (accent, subtle highlights)

**Secondary Colors**:
- **Terracotta Clay**: #c4896b (call-to-action buttons, active states)
- **Graphite**: #4a4a4a (secondary text, borders)
- **Cream**: #f5f3f0 (section backgrounds, cards)

### Typography
**Display Font**: **Canela Text** - Bold serif for headings and hero text
- Large, impactful headings with strong personality
- Used for name, main headlines, and section titles
- Creates emotional resonance and premium feel

**Body Font**: **Suisse Int'l** - Clean sans-serif for content
- Exceptional readability across all devices
- Professional, neutral character for body text
- Perfect hierarchy and spacing

### Layout Principles
- **Grid-aligned precision**: 12-column responsive grid system
- **Scroll-native flow**: Content reveals progressively as users explore
- **Macro white space**: Generous spacing creates breathing room
- **Content-forward**: Design serves the story, not the other way around

## Visual Effects & Animation

### Core Libraries Used
1. **Anime.js** - Smooth micro-interactions and element animations
2. **Splitting.js** - Advanced text effects and character-level animations
3. **ECharts.js** - Interactive skills visualization and data charts
4. **Splide.js** - Elegant project carousel and image galleries
5. **p5.js** - Creative coding background effects and particle systems
6. **Matter.js** - Physics-based interactive elements
7. **Typed.js** - Typewriter effects for dynamic text
8. **Shader-park** - Subtle background visual effects

### Header Effect
**Liquid Metal Displacement**: Subtle, slow-moving metallic surface effect using shader-park creates depth without distraction. The background appears to breathe gently, adding sophistication to the hero section.

### Text Effects
- **Typewriter Animation**: Name appears with mechanical precision using Typed.js
- **Color Cycling Emphasis**: Key phrases pulse with subtle color transitions
- **Split-by-letter Stagger**: Section headings animate in with elegant timing
- **Gradient Text Animation**: Hero tagline features flowing gradient colors

### Interactive Elements
- **3D Tilt Cards**: Project cards lift and rotate on hover with CSS transforms
- **Depth Shadow Expansion**: Subtle shadow growth creates floating illusion
- **Color Morphing**: Buttons transition between colors with smooth easing
- **Parallax Scrolling**: Background elements move at different speeds for depth

### Image Effects
- **Ken Burns Pan/Zoom**: Hero image slowly scales and pans for cinematic feel
- **Displacement Hover**: Images distort slightly on hover for tactile feedback
- **Infinite Image Scroller**: Continuous horizontal scroll of project thumbnails

### Scroll Motion
- **Reveal Animations**: Content fades in (opacity 0.9 to 1.0) with 16px vertical translation
- **Stagger Timing**: Elements appear in sequence with 50ms delays
- **Easing**: Custom cubic-bezier curves for natural, organic movement
- **Viewport Trigger**: Animations activate when elements enter top 50% of viewport

## Background & Layout

### Background Treatment
**Consistent Foundation**: Warm porcelain (#faf9f7) maintained throughout all sections, creating visual continuity. No section-specific background colors - differentiation achieved through:
- Subtle geometric shapes using CSS transforms
- Floating decorative elements with parallax movement
- Gradient overlays on left/right edges for depth

### Visual Hierarchy
1. **Hero Level**: Large Canela Text headings with maximum impact
2. **Section Level**: Medium Canela Text with sage mist accents
3. **Content Level**: Suisse Int'l body text with optimal line height
4. **Detail Level**: Smaller Suisse Int'l for metadata and captions

### Responsive Behavior
- **Desktop**: Full visual effects and animations
- **Tablet**: Simplified animations, preserved functionality
- **Mobile**: Essential interactions only, optimized touch targets

## Component Styling

### Navigation
- **Fixed Header**: Translucent background with backdrop blur
- **Minimal Design**: Clean typography, no visual clutter
- **Active States**: Subtle underline with terracotta accent
- **Mobile Menu**: Slide-in drawer with smooth transitions

### Buttons
- **Primary**: Terracotta background with cream text
- **Secondary**: Outlined sage mist with charcoal text
- **Hover States**: 3D lift effect with expanded shadow
- **Active States**: Slight scale reduction for tactile feedback

### Cards
- **Project Cards**: Cream background with subtle shadow
- **Hover Effect**: Lift with increased shadow and slight rotation
- **Content Hierarchy**: Clear typography and spacing
- **Image Treatment**: Aspect ratio maintained, subtle border radius

### Forms
- **Input Fields**: Minimal styling with focus states
- **Labels**: Floating animation on focus
- **Validation**: Real-time feedback with color coding
- **Submit Button**: Primary styling with loading states

This design system creates a cohesive, professional portfolio that stands out through sophisticated restraint rather than flashy excess, perfectly suited for showcasing Hariom Shah's technical expertise and design sensibility.