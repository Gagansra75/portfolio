# 🚀 Quick Reference Card - Next-Gen Features

## Import Statements

```javascript
// In any component file
import MagneticButton from '../components/MagneticButton';
import TiltCard from '../components/TiltCard';
import ScrollReveal from '../components/ScrollReveal';
import { useTheme } from '../context/ThemeContext';
```

---

## Usage Examples

### 1. Magnetic Button
```jsx
<MagneticButton 
  className="px-8 py-4 bg-blue-600 text-white rounded-lg"
  onClick={handleClick}
  magneticStrength={0.3}
>
  Click Me
</MagneticButton>
```

### 2. 3D Tilt Card
```jsx
<TiltCard 
  className="p-6 bg-white rounded-xl shadow-lg"
  tiltMaxAngle={15}
  scale={1.05}
>
  <h3>Card Content</h3>
</TiltCard>
```

### 3. Scroll Reveal
```jsx
<ScrollReveal animation="blurUp" duration={0.8} delay={0.2}>
  <h2>This animates in on scroll</h2>
</ScrollReveal>
```

### 4. Theme Toggle
```jsx
// Already in App.js, use anywhere:
const { theme, toggleTheme } = useTheme();

<div className="bg-white dark:bg-gray-900">
  Current theme: {theme}
</div>
```

---

## Animation Options

### ScrollReveal Animations
- `fade` - Simple fade
- `fadeUp` - From bottom ⬆️
- `fadeDown` - From top ⬇️
- `fadeLeft` - From left ⬅️
- `fadeRight` - From right ➡️
- `blur` - Blur to clear 🌫️
- `blurUp` - Blur + bottom ⭐ (Best!)
- `scale` - Scale up 🔍
- `scaleUp` - Scale + bottom

---

## Dark Mode Classes

Add to any element:
```jsx
className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-white
  border-gray-300 dark:border-gray-700
"
```

---

## Prop Adjustments

### MagneticButton
- `magneticStrength={0.1}` - Subtle
- `magneticStrength={0.3}` - Moderate (default)
- `magneticStrength={0.5}` - Strong

### TiltCard
- `tiltMaxAngle={8}` - Subtle
- `tiltMaxAngle={15}` - Moderate (default)
- `tiltMaxAngle={25}` - Dramatic

### ScrollReveal
- `duration={0.4}` - Fast
- `duration={0.8}` - Moderate (default)
- `duration={1.2}` - Slow
- `delay={0}` - Immediate
- `delay={0.2}` - Slight delay

---

## Where to Use

### MagneticButton ✅
- All CTA buttons
- Navigation links
- Form submit buttons
- Project links
- Social media buttons

### TiltCard ✅
- Project cards
- Skill cards
- Testimonial cards
- Feature highlights
- Service boxes

### ScrollReveal ✅
- Section headings
- Paragraphs
- Cards (combine with TiltCard)
- Images
- Any content you want to animate

---

## Performance Tips

✅ **Good**: ScrollReveal on 10-20 elements
❌ **Bad**: ScrollReveal on 100+ elements

✅ **Good**: TiltCard on important cards
❌ **Bad**: TiltCard on every element

✅ **Good**: MagneticButton on CTAs
❌ **Bad**: MagneticButton on every link

---

## Common Patterns

### Hero Section
```jsx
<ScrollReveal animation="blurUp">
  <h1>Heading</h1>
</ScrollReveal>
<ScrollReveal animation="fadeUp" delay={0.2}>
  <p>Subheading</p>
</ScrollReveal>
<ScrollReveal animation="scaleUp" delay={0.4}>
  <MagneticButton>CTA</MagneticButton>
</ScrollReveal>
```

### Card Grid
```jsx
{items.map((item, i) => (
  <ScrollReveal key={item.id} animation="blurUp" delay={i * 0.1}>
    <TiltCard>
      {/* content */}
    </TiltCard>
  </ScrollReveal>
))}
```

---

## Testing Checklist

- [ ] Custom cursor appears and follows mouse (desktop only)
- [ ] Magnetic buttons attract cursor on hover
- [ ] Project cards tilt when mouse moves over them
- [ ] Theme toggle switches between light/dark
- [ ] Dark mode looks good in all sections
- [ ] Scroll reveals trigger as you scroll down
- [ ] Welcome modal appears on first visit
- [ ] Modal shows correct greeting for time of day
- [ ] All features work smoothly (no lag)
- [ ] Mobile experience is good (no cursor, touch works)

---

## Keyboard Shortcuts

- **F12** - Open DevTools
- **Application Tab → Local Storage** - View stored data
- **Cmd/Ctrl + Shift + R** - Hard refresh
- **Cmd/Ctrl + R** - Refresh page

---

## Debugging

### Modal not showing?
1. Clear localStorage: `localStorage.clear()`
2. Refresh page
3. Check console for errors

### Cursor not appearing?
1. Check if on desktop (auto-hidden on mobile)
2. Look for CSS conflicts
3. Verify CustomCursor in App.js

### Animations not triggering?
1. Scroll more slowly
2. Check element is in viewport
3. Try different threshold value

### Dark mode broken?
1. Check tailwind.config.js has `darkMode: 'class'`
2. Verify ThemeProvider wraps App
3. Clear localStorage and try again

---

## Quick Wins

### 5-Minute Improvements
1. Wrap all `<h2>` with `<ScrollReveal animation="blurUp">`
2. Replace main buttons with `<MagneticButton>`
3. Add dark mode to hero section

### 15-Minute Improvements
1. Wrap all project cards with `<TiltCard>`
2. Add dark classes to all sections
3. Stagger animations with delays

### 30-Minute Improvements
1. Fully implement in Projects component
2. Fully implement in Skills component
3. Test and perfect dark mode everywhere

---

## Pro Tips

💡 **Combine effects** for maximum impact:
```jsx
<ScrollReveal animation="blurUp" delay={index * 0.1}>
  <TiltCard>
    <MagneticButton>...</MagneticButton>
  </TiltCard>
</ScrollReveal>
```

💡 **Stagger animations** for flow:
```jsx
delay={index * 0.1} // Items animate one after another
```

💡 **Match animation to content**:
- Headings: `blurUp`
- Cards: `blurUp` + `TiltCard`
- Buttons: `scaleUp`
- Text: `fadeUp`

💡 **Test on real devices**:
- Desktop (cursor + tilt)
- Tablet (touch + no cursor)
- Mobile (touch optimized)

---

## Support & Resources

📖 **Documentation Files**:
- `NEXTGEN_FEATURES_GUIDE.md` - Complete guide
- `IMPLEMENTATION_EXAMPLES.js` - Code examples
- `TRANSFORMATION_SUMMARY.md` - Overview

🔗 **Libraries Used**:
- Framer Motion: framer.com/motion
- React: react.dev
- Tailwind CSS: tailwindcss.com

---

**Keep this card handy while implementing!** 📌

Print it out or keep it open in a second monitor while you work.
